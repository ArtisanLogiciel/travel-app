export type LogInFormType = {
    email: string;
    password: string;
}

export type RegisterFormType = LogInFormType & {
    confirmPassword: string;
    displayName: string;
    city: string;
    //interests: string[];
}