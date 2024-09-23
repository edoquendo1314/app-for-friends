import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { AuthContext } from '@/context/AuthContext';
import { signin } from '../services/authService';


export default function SignInScreen() {
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const { setUser } = useContext(AuthContext);

    const handleLogin = async () => {
        try{
            const currentUser = await signin({ email, password });
            setUser(currentUser);
        } catch(e) {
            console.error("Error during login:", (e as Error).message)
        }
    }

    return(
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='Username'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder='Password'
                keyboardType='default'
            />
            <Button
                title="Sign In"
                onPress={() => handleLogin}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});