import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Button from '../components/Button';
import TextButton from '../components/TextButton'

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Button title="Create Account" onPress= {() => console.log('Create Account Pressed!')} />
        <TextButton title="Sign In" onPress={() => console.log('Sign In Pressed!')} />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});