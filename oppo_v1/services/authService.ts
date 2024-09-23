import api from './api';

interface LoginCredentials {
    email: string;
    password: string;
}

interface CreateUserCredentials {
    name: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: string; 
}

export const signin = async (credentials: LoginCredentials) => {
    try{
        const response = await api.post('/login', credentials);
        
        return response.data;
    }catch(error: unknown){
        console.error(`Error: ${error}`);
    }
}; 

export const createaccount = async (credentials: CreateUserCredentials) => {
    try{
        const response = await api.post('/createaccount', credentials);
        return response.data;
    }catch(error: unknown){
        console.error(`Error: ${error}`);
    }
};

// create a logout function

