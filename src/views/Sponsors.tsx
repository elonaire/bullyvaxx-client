import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useEffect } from "react";
import Form, { InputField, SelectOption } from "../components/Form";
import { FormFieldWrapper } from "./Home";
import Axios from 'axios';

interface SponsorsProps {

}

const Sponsors: FunctionComponent<SponsorsProps> = () => {
    const [states, setStates] = React.useState([] as SelectOption[]);
    const [counties, setCounties] = React.useState([] as SelectOption[]);
    const [loading, setLoading] = React.useState(false);
    const [selectedState, setSelectedState] = React.useState('');

    let statesUrl = 'https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:*&key=8ea19e5ad6a8d3f6f527ef60f677f2e6586178f1';

    let handleSelection = (selected: SelectOption) => {
        setSelectedState(selected.value);
    };

    let getStates = async () => {
        setLoading(true);
        try {
            let res = await Axios({
                method: 'get',
                url: `${statesUrl}`,
            });

            console.log('res.data', res.data, states, loading);

            setStates(res.data.map((stateInfo: any[], index: number): SelectOption => {
                let state = {
                    label: stateInfo[1],
                    value: stateInfo[2]
                }

                if (index === 0) {
                    state.label = 'Choose your State';
                    state.value = '';
                }

                return state;
            }));

            setLoading(false);
        } catch (error: any) {
            console.log(error.response);
            setStates([]);
            setLoading(false);
        }
    };

    let getCounties = async (selectedState: string) => {
        setLoading(true);
        try {
            let res = await Axios({
                method: 'get',
                url: `https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=county:*&in=state:${selectedState}&key=8ea19e5ad6a8d3f6f527ef60f677f2e6586178f1`,
            });

            console.log('res.data', res.data, states, loading);

            setCounties(res.data.map((stateInfo: any[], index: number): SelectOption => {
                let state = {
                    label: stateInfo[1],
                    value: stateInfo[1]
                }

                if (index === 0) {
                    state.label = 'Choose your County';
                    state.value = '';
                }

                return state;
            }));
            setLoading(false);
        } catch (error: any) {
            console.log(error.response);
            setCounties([]);
            setLoading(false);
        }
    };
    useEffect(() => {
        let abortController = new AbortController();
        getStates();
        return () => { abortController.abort(); };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let abortController = new AbortController();
        getCounties(selectedState);
        return () => { abortController.abort(); };
        // eslint-disable-next-line
    }, [selectedState]);

    return (
        <div style={{ width: '100%', marginTop: '8%' }}>
            <Grid container spacing={2}>
                <Grid item sm={7} xs={12}>
                    <Typography variant="h3">Our esteemed sponsors</Typography>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Box sx={{ marginTop: '4%', padding: '2%' }}>
                        <Typography variant="h4">Buy Sponsorships</Typography>

                        <Form initialValues={{ username: '', state: '', county: '' }} buttonText="checkout" buttonSize="medium" submit={() => { }}>
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
                                <InputField size="small" color="secondary" selectionChange={handleSelection} isSelect={true} fullWidth={true} name="state" selectOptions={states} variant="outlined" label="Select your state" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" isSelect={true} fullWidth={true} name="county" selectOptions={counties} variant="outlined" label="Select your county" />
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