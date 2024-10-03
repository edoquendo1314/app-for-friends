import * as Yup from 'yup';

const passwordRegex = /^(?=(.*[!@#\$%\^\&*\)\(+=._-]){1,})(?=(.*[A-Z]){2,})(?=(.*\d){2,}).*$/;


const isOfAge = (dob: string): boolean => {
    const [monthStr, dayStr, yearStr] = dob.split("/");
    const month: number = Number(monthStr);
    const day: number = Number(dayStr);
    const year: number = Number(yearStr); 

    const today = new Date(); 

    const yearsSinceBirth = today.getFullYear() - year;
    
    if (yearsSinceBirth > 18) {
        return true; 
    } else if (yearsSinceBirth === 18) {
        if (month > today.getMonth() || (today.getMonth() === month && today.getDay() >= day)) {
            return true; 
        }
    }

    return false; 
}

export const SignUpSchema = Yup.object({
    name: Yup.string()
            .test(
                'check-name',
                'You must put your name',
                value => {
                    if(value === undefined) return false;
                    return true; 
                }
            )
            .required('Name is required'),
    dateOfBirth: Yup.string()
                .test(
                    'check-age',
                    'You must be atleast 18 years of age',
                    value => {
                        if(value === undefined) return false;
                        return isOfAge(value); 
                    }
                )
                .required('Date of Birth is required'),
    phone: Yup.string()
                .matches(/^[0-9]+$/, 'Phone number must contain only digits')
                .test(
                    'contains-ten-numbers',
                    'Phone number must be 10 digits',
                    value => {
                        if(!value) return false;
                        const count = value.length;
                        return count === 10;
                    }
                )
                .required('Phone number is required'),
    email: Yup.string().email('Email is invalid'),
    password: Yup.string()
                .min(9, "At least 9 characters")
                .test(
                    'contains-number-cap-letter-special-char',
                    'Password must contain at least 2 numbers, 2 Capital letters and a special character',
                    value => value ? passwordRegex.test(value) : false
                )
                .required('Password is required')
});

export const validationForm = async (name: string, dateOfBirth: string, phone: string, email: string, password: string): Promise<boolean | void> => {
    try{
        await SignUpSchema.validate({name, dateOfBirth, phone, email, password});
        return true;
    } catch(e){
        return console.error(`Error is ${e}`);
    }
};
