import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useUser, User } from "./useUser";

export const useAuth = () => {
    const { user, setUser, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();
    
    useEffect(() => {
        const user = getItem("user");
        if(user){
            addUser(JSON.parse(user)); // parsing so the user is a javascript object
        }
    }, [addUser, getItem]);

    const login = (user: User) => {
        setUser(user);
    }

    const logout = () => {
        removeUser(); 
    }

    return { user, login, logout, setUser }; 

}