import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent } from "react";
import Form, { InputField } from "../components/Form";
import { FormFieldWrapper } from "./Home";

interface SponsorsProps {

}

const Sponsors: FunctionComponent<SponsorsProps> = () => {
    return (
        <div style={{ width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item sm={7} xs={12}>
                    <Typography variant="h3">Our esteemed sponsors</Typography>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Box sx={{ marginTop: '4%', padding: '2%' }}>
                        <Typography variant="h4">Buy Sponsorships</Typography>

                        <Form initialValues={{ form: { username: '' } }} buttonText="checkout" buttonSize="medium" submit={() => { }}>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="name" type="text" variant="outlined" label="First Name" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="name" type="text" variant="outlined" label="Last Name" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="email" type="email" variant="outlined" label="Email" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" isSelect={true} fullWidth={true} name="email" selectOptions={['Penn']} variant="outlined" label="Select your state" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" isSelect={true} fullWidth={true} name="email" selectOptions={['Penn']} variant="outlined" label="Select your county" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="email" type="number" variant="outlined" label="Number of sponsorships" />
                            </FormFieldWrapper>
                        </Form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sponsors;