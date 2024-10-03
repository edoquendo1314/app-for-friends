import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye'); 

    const handlePasswordVisibility = () => {
        if(rightIcon === 'eye'){
            setRightIcon('eye-off');
            setPasswordVisibility(false);
        } else if (rightIcon === 'eye-off'){
            setRightIcon('eye');
            setPasswordVisibility(true); 
        }
    };

    return {passwordVisibility, rightIcon, handlePasswordVisibility};

}; 