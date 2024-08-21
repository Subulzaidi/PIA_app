import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React, { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  type?: "primary" | "secondary";
  onClick?: () => void;
  disable?: boolean;
}>;

// Define the Button component
const Button: React.FC<ButtonProps> = ({
  type = "primary",
  onClick,
  disable,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "primary" ? styles.primaryButton : styles.secondaryButton,
      ]}
      onPress={onClick}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// Define styles for the button
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  } as ViewStyle,
  primaryButton: {
    backgroundColor: "#b59906",
  } as ViewStyle,
  secondaryButton: {
    backgroundColor: "#034c2e",
  } as ViewStyle,
  text: {
    color: "#fff",
    fontWeight: "bold",
  } as TextStyle,
});
