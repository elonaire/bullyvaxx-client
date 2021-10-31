import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { FunctionComponent, useContext, useState } from "react";

interface FormProps {
    children: any;
    submit: any;
    initialValues: any;
    buttonText: string;
    buttonSize: "small" | "medium" | "large";
}

interface InputFieldProps {
    type: string;
    variant: 'standard' | 'outlined' | 'filled';
    label?: string;
    name: string;
    size: 'small' | 'medium';
    fullWidth?: boolean;
}

export const FormContext = React.createContext({
    form: {} as any,
    handleFormChange: {} as any,
});

export const InputField: FunctionComponent<InputFieldProps> = (props: InputFieldProps) => {
    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;
    const { type, variant, label, name, size, fullWidth } = props;

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        type !== 'password' ? <TextField color="secondary" fullWidth={fullWidth} size={size} value={form[name]} type={type} label={label} variant={variant} onChange={handleFormChange} /> : <TextField color="secondary" size={size} value={form[name]} type={form['showPassword'] ? 'text' : type} label={label} variant={variant} onChange={handleFormChange} InputProps={{
            endAdornment: <InputAdornment position="end"><IconButton
                aria-label="toggle password visibility"
                onClick={handleFormChange}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {form['showPassword'] ? <VisibilityOff /> : <Visibility />}
            </IconButton></InputAdornment>,
        }} />
    );
};

const Form: FunctionComponent<FormProps> = (props: FormProps) => {
    const { children, submit = () => { }, initialValues, buttonText, buttonSize } = props;

    const [form, setForm] = useState(initialValues);

    const handleFormChange = <T,>(event: T) => {
        const type = 'type' as keyof T;
        const target = 'target' as keyof T;

        if (event[type] as any === 'change') {
            const { name, value } = event[target] as any;

            setForm({
                ...form,
                [name]: value
            });
        } else {
            setForm({showPassword: !form.showPassword});
        }
    };

    return (
        <form>
            <FormContext.Provider value={{
                form,
                handleFormChange
            }}>
                {children}
            </FormContext.Provider>

            <Button variant="contained" size={buttonSize} color="secondary" onClick={() => submit(form)}>{buttonText}</Button>
        </form>
    );
}

export default Form;