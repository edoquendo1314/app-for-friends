import React, { useContext, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import Button from '../components/Button';
import { createaccount } from '../services/authService';
import { AuthContext } from '@/context/AuthContext';
import { SignUpSchema, validationForm } from '../utils/validation';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/usePasswordVisibility';

export default function CreateAccountScreen() {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const { setUser } = useContext(AuthContext);

    //function 
    const handleSignUp = async () => {
        try{
           await validationForm(name, dob, phone, email, password);
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

    const handleValidation = async (field: string, value: string) => {
        try{
            const fieldSchema = Yup.reach(SignUpSchema, field) as Yup.AnySchema;
            await fieldSchema.validate(value);

            // Clear the error if validation is successful
            setErrors((prevErrors) => {
                const updatedErrors = { ...prevErrors };
                delete updatedErrors[field]; // Remove the error for this field
                return updatedErrors;
            });
        }catch(e){
            if (e instanceof Yup.ValidationError) {
                // Set the error for this specific field
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: e.message, // Store the error message
                }));
            } else {
                console.error(`Unexpected error: ${e}`);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setName}
                        value={name}
                        placeholder='Enter your Name'
                        keyboardType='default'
                    />
                </View>
                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(value) => {
                            setDob(value);
                            handleValidation('dateOfBirth', value); 
                        }}
                        value={dob}
                        placeholder='MM/DD/YYYY'
                        keyboardType='default'
                    />
                </View>
                {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(value) => {
                            setPhone(value);
                            handleValidation('phone', value);
                        }}
                        value={phone}
                        placeholder='(888)888-8888'
                        keyboardType='phone-pad'
                    />
                </View>
                {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(value) => {
                            setEmail(value);
                            handleValidation('email', value);
                        }}
                        value={email}
                        placeholder='email@domain.com'
                        keyboardType='default'
                    />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(value) => {
                            setPassword(value);
                            handleValidation('password', value);
                        }}
                        value={password}
                        secureTextEntry={passwordVisibility}
                        placeholder='Enter your password'
                        keyboardType='default'
                    />
                    <Pressable onPress={handlePasswordVisibility}>
                        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323"/>
                    </Pressable>
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>
            <Button
                title="Create Account"
                onPress={() => handleSignUp}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5EEDC",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 15, // Spacing between input fields and error messages
    },
    inputContainer: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#d7d7d7",
    },
    inputField: {
        padding: 10,
        fontSize: 22,
        width: "90%",
    },
    errorText:{
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 15, // Align with input if needed
        maxWidth: '90%',
    }
});