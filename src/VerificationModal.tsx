import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  onComplete: () => void;
  email: string;
}

export default function VerificationModal({
  visible,
  onClose,
  onComplete,
  email,
}: VerificationModalProps) {
  const [code, setCode] = useState("");

  const handleDigitPress = (digit: string) => {
    if (code.length < 6) {
      const newCode = code + digit;
      setCode(newCode);

      if (newCode.length === 6) {
        setTimeout(onComplete, 300);
      }
    }
  };

  const handleBackspace = () => {
    setCode(code.slice(0, -1));
  };

  const digits = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <SymbolView
              name="xmark.circle.fill"
              size={32}
              tintColor="#E5E7EB"
            />
          </TouchableOpacity>

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.title}>Verify your email</Text>
            <Text style={styles.subtitle}>
              We've sent a verification code to
            </Text>
            <Text style={styles.email}>{email}</Text>

            {/* Code Display */}
            <View style={styles.codeContainer}>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <View key={index} style={styles.codeDigit}>
                  <Text style={styles.codeDigitText}>{code[index] || ""}</Text>
                </View>
              ))}
            </View>

            {/* Number Pad */}
            <View style={styles.numberPad}>
              {digits.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.numberPadRow}>
                  {row.map((digit) => (
                    <TouchableOpacity
                      key={digit}
                      style={[
                        styles.numberPadButton,
                        digit === "*" || digit === "#"
                          ? styles.numberPadButtonSpecial
                          : null,
                      ]}
                      onPress={() => handleDigitPress(digit)}
                      disabled={digit === "*" || digit === "#"}
                    >
                      <Text style={styles.numberPadButtonText}>{digit}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}

              {/* Backspace Button */}
              <TouchableOpacity
                style={styles.backspaceButton}
                onPress={handleBackspace}
              >
                <SymbolView
                  name="delete.left.fill"
                  size={24}
                  tintColor="#6B7280"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.hint}>
              Enter the 6-digit code sent to your email
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 16,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D132B",
    marginBottom: 8,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0D132B",
    marginBottom: 32,
  },
  codeContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
    justifyContent: "center",
  },
  codeDigit: {
    width: 48,
    height: 56,
    backgroundColor: "#F6F7FB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E5E7EB",
  },
  codeDigitText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#0D132B",
  },
  numberPad: {
    width: "100%",
    marginBottom: 24,
  },
  numberPadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 12,
  },
  numberPadButton: {
    flex: 1,
    height: 56,
    backgroundColor: "#F6F7FB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  numberPadButtonSpecial: {
    opacity: 0.5,
  },
  numberPadButtonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#0D132B",
  },
  backspaceButton: {
    height: 56,
    backgroundColor: "#F6F7FB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 16,
  },
  hint: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
  },
});
