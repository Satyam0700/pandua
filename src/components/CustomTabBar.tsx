import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

interface TabItemProps {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

function TabItem({ isFocused, onPress, onLongPress, label, iconName }: TabItemProps) {
  const focusProgress = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    focusProgress.value = withTiming(isFocused ? 1 : 0, { duration: 200 });
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    // When focused (1), icon translates to 0 (centered)
    // When unfocused (0), icon translates to -6 to leave room for label
    const translateY = (1 - focusProgress.value) * -6;
    const scale = 1 + focusProgress.value * 0.1; // subtle scale up when active
    return {
      transform: [{ translateY }, { scale }],
    };
  });

  const animatedLabelStyle = useAnimatedStyle(() => {
    // When focused (1), opacity is 0, translateY is 12 (hidden/pushed down)
    // When unfocused (0), opacity is 1, translateY is 2
    const opacity = 1 - focusProgress.value;
    const translateY = focusProgress.value * 12 + (1 - focusProgress.value) * 2;
    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
    >
      <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={isFocused ? "#FFFFFF" : "#6B7280"}
        />
      </Animated.View>
      <Animated.View style={[styles.labelContainer, animatedLabelStyle]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [containerWidth, setContainerWidth] = useState(Dimensions.get("window").width);

  // Position of active indicator (indexed from 0 to routes.length - 1)
  const activeIndexShared = useSharedValue(state.index);

  useEffect(() => {
    // Use spring for smooth natural motion of the indicator circle
    activeIndexShared.value = withSpring(state.index, {
      damping: 14,
      stiffness: 110,
      mass: 0.8,
    });
  }, [state.index]);

  const totalTabs = state.routes.length;
  const tabWidth = containerWidth / totalTabs;
  const circleSize = 52; // circle indicator diameter

  const animatedCircleStyle = useAnimatedStyle(() => {
    // Center the circle inside each tab
    const x = activeIndexShared.value * tabWidth + (tabWidth - circleSize) / 2;
    return {
      transform: [{ translateX: x }],
    };
  });

  const isAndroid = Platform.OS === "android";
  const bottomPadding = insets.bottom > 0 ? insets.bottom : (isAndroid ? 16 : 12);
  const containerHeight = 72 + (insets.bottom > 0 ? insets.bottom - 12 : (isAndroid ? 4 : 0));

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: bottomPadding,
          height: containerHeight,
        },
      ]}
      onLayout={(e) => {
        setContainerWidth(e.nativeEvent.layout.width);
      }}
    >
      {/* Animated Circle Indicator */}
      <Animated.View style={[styles.activeCircle, animatedCircleStyle]} />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? (options.tabBarLabel as string)
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Custom icon mapping based on screen name
        let iconName: keyof typeof MaterialCommunityIcons.glyphMap = "home";
        if (route.name === "index") {
          iconName = isFocused ? "home" : "home-outline";
        } else if (route.name === "learn") {
          iconName = isFocused ? "book-open" : "book-open-outline";
        } else if (route.name === "ai-teacher") {
          iconName = isFocused ? "robot" : "robot-outline";
        } else if (route.name === "chat") {
          iconName = isFocused ? "message" : "message-outline";
        } else if (route.name === "profile") {
          iconName = isFocused ? "account" : "account-outline";
        }

        return (
          <TabItem
            key={route.key}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
            iconName={iconName}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6", // very soft border
    paddingTop: 12,
    position: "relative",
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 8,
  },
  activeCircle: {
    position: "absolute",
    top: 10, // vertical alignment inside the 72px container
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#6C4EF5", // lingua-purple
    zIndex: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    height: 50,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    position: "absolute",
    bottom: 2,
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
    color: "#6B7280", // text-secondary
    textAlign: "center",
  },
});
