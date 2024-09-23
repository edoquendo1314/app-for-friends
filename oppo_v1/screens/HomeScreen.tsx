import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import TextButton from '../components/TextButton'


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Button 
            title="Create Account" 
            onPress= {() => navigation.navigate('CreateAccount')} 
        />
        <TextButton 
            title="Sign In" 
            onPress={() => navigation.navigate('SignIn')} 
        />
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