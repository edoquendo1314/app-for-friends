import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

interface TextButtonProps {
  title: string;
  onPress: () => void;
  style?: object; // Optional style override
}

const TextButton: React.FC<TextButtonProps> = ({ title, onPress, style }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.text, style]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});

export default TextButton;
