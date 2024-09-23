import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
    id: string;
    name: string;
    email: string;
    authToken?: string;
}

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem } = useLocalStorage();

    const addUser = (user: User) =>  {
        setUser(user);
    }

    const removeUser = () => {
        setUser(null);
        setItem("user", "");
    }

    return { user, setUser, addUser, removeUser };
}