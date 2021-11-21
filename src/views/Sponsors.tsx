import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useEffect } from "react";
import Form, { InputField, SelectOption } from "../components/Form";
import { FormFieldWrapper } from "./Home";
import Axios from 'axios';
import { PayPalButton } from "react-paypal-button-v2";
import { Search, SearchIconWrapper, StyledInputBase } from "../components/Navbar";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";

interface SponsorsProps {

}

export const SearchSchool = styled(StyledInputBase)(({ theme }) => ({
    color: theme.palette.secondary.main,
    // '& .MuiInputBase-input': {
    //     border: `solid ${theme.palette.secondary.main} 1px`,
    //     borderRadius: '5px'
    // }
}));

export const SearchSchoolWrapper = styled(Search)(({ theme }) => ({
    color: theme.palette.secondary.main,
    border: `solid ${theme.palette.secondary.main} 2px`,
    borderRadius: '3px'
}));

const Sponsors: FunctionComponent<SponsorsProps> = () => {
    const [states, setStates] = React.useState([] as SelectOption[]);
    const [counties, setCounties] = React.useState([] as SelectOption[]);
    const [loading, setLoading] = React.useState(false);
    const [selectedState, setSelectedState] = React.useState('');
    const [response, setResponse] = React.useState({} as any);
    const [selectedPage] = React.useState('Sponsors');
    const [canCheckout, setCanCheckout] = React.useState(false);

    let statesUrl = 'https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:*&key=8ea19e5ad6a8d3f6f527ef60f677f2e6586178f1';
    let url: string;

    if (process.env.NODE_ENV === 'development') {
        url = `${process.env.REACT_APP_DEV_BACKEND}`;
    } else if (process.env.NODE_ENV === 'production') {
        url = `${process.env.REACT_APP_PRODUCTION}`;
    }

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

    let fetchContent = async (q: { page?: string; tab?: string; }) => {
        setLoading(true);
        try {
            let res = await Axios({
                method: 'get',
                url: `${url + '/content'}?page=${q.page}&tab=${q.tab}`,
            });

            console.log('res.data', res.data, response, loading);

            setResponse(res.data);

            setLoading(false);
        } catch (error: any) {
            console.log(error.response);
            setResponse(error.response);
            setLoading(false);
        }
    };

    useEffect(() => {
        let abortController = new AbortController();
        fetchContent({ page: selectedPage, tab: '' });
        return () => { abortController.abort(); };
        // eslint-disable-next-line
    }, [selectedPage]);
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

    let buySponsorship = (form: any) => {
        setCanCheckout(true);
    };

    return (
        <div style={{ width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item sm={7} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item sm={3}></Grid>
                        <Grid item sm={6} xs={12}>
                            <SearchSchoolWrapper>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <SearchSchool
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </SearchSchoolWrapper>
                        </Grid>
                        <Grid item sm={3}></Grid>
                    </Grid>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Box sx={{ marginTop: '4%', padding: '2%' }}>
                        <Typography variant="h4">Buy Sponsorships</Typography>

                        <Form initialValues={{ first_name: '', last_name: '', state: '', county: '', email: '', school_name: '', zip_code: '', quantity: '' }} buttonText="checkout" buttonSize="medium" submit={buySponsorship}>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="first_name" type="text" variant="outlined" label="First Name" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="last_name" type="text" variant="outlined" label="Last Name" />
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
                                <InputField size="small" color="secondary" fullWidth={true} name="school_name" variant="outlined" label="Name of School" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="zip_code" variant="outlined" label="Zip Code of School" />
                            </FormFieldWrapper>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="quantity" type="number" variant="outlined" label="Number of sponsorships" />
                            </FormFieldWrapper>
                        </Form>
                        {canCheckout && <PayPalButton
                            amount="0.01"
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={() => {
                                alert("Transaction completed by Elon");

                                // OPTIONAL: Call your server to save the transaction
                                // return fetch("/paypal-transaction-complete", {
                                //     method: "post",
                                //     body: JSON.stringify({
                                //         orderID: data.orderID
                                //     })
                                // });
                            }}
                            options={{ clientId: 'sb' }}
                        />}
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sponsors;