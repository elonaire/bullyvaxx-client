import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { FunctionComponent, useContext, useState } from "react";

interface FormProps {
    children: any;
    submit: any;
    initialValues: any;
    buttonText: string;
    buttonSize: "small" | "medium" | "large";
}

interface InputFieldProps {
    type?: string;
    variant: 'standard' | 'outlined' | 'filled';
    label?: string;
    name: string;
    size: 'small' | 'medium';
    fullWidth?: boolean;
    required?: boolean;
    disabled?: boolean;
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    isMultiline?: boolean;
    isSelect?: boolean;
    selectOptions?: any[];
}

export const FormContext = React.createContext({
    form: {} as any,
    handleFormChange: {} as any,
});

export const InputField: FunctionComponent<InputFieldProps> = (props: InputFieldProps) => {
    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;
    const { type, variant, label, name, size, fullWidth, color, isMultiline, isSelect, selectOptions = [] } = props;

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        type !== 'password' ? <TextField color={color} select={isSelect} rows={isMultiline ? 4 : 1} multiline={isMultiline} fullWidth={fullWidth} size={size} value={form[name]} type={type} label={label} variant={variant} onChange={handleFormChange}>
            {isSelect && selectOptions.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField> : <TextField color={color} size={size} value={form[name]} type={form['showPassword'] ? 'text' : type} label={label} variant={variant} onChange={handleFormChange} InputProps={{
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
        console.log(event);
        
        const type = 'type' as keyof T;
        const target = 'target' as keyof T;

        if (event[type] as any === 'change') {
            const { name, value } = event[target] as any;

            setForm({
                ...form,
                [name]: value
            });
        } else {
            setForm({ showPassword: !form.showPassword });
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