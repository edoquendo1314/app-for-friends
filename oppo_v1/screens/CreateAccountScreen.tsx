import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { createaccount } from '../services/authService';
import { AuthContext } from '@/context/AuthContext';

export default function CreateAccountScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AuthContext);

    //function 
    const handleSignUp = async () => {
        try{
           const currentUser = await createaccount({ 
                name: name,
                email: email,
                dateOfBirth: dob,
                phone: phone,
                password: password 
            }); 
            setUser(currentUser);
        }catch(error){
            console.error(`Error ${error}`);
        }
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder='Enter your Name'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                onChangeText={setDob}
                value={dob}
                placeholder='Enter your Date of Birth'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPhone}
                value={phone}
                placeholder='Enter your Phone Number'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='Enter your email'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder='Enter your password'
                keyboardType='default'
            />
            <Button
                title="Create Account"
                onPress={() => handleSignUp}
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