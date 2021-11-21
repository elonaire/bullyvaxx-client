import { Autocomplete, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useEffect } from "react";
import Form, { FRadioButton, InputField, SelectOption } from "../components/Form";
import { FormFieldWrapper } from "./Home";
import Axios from 'axios';
import { PayPalButton } from "react-paypal-button-v2";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

interface SponsorsProps {

}

const Sponsors: FunctionComponent<SponsorsProps> = () => {
    const [states, setStates] = React.useState([] as SelectOption[]);
    const [counties, setCounties] = React.useState([] as SelectOption[]);
    const [loading, setLoading] = React.useState(false);
    const [selectedState, setSelectedState] = React.useState('');
    const [response, setResponse] = React.useState({} as any);
    const [selectedPage] = React.useState('Sponsors');
    const [canCheckout, setCanCheckout] = React.useState(false);
    const [sponsorType, setSponsorType] = React.useState('Individual');
    const [userDetails, setUserDetails] = React.useState({} as any);
    const [sponsorshipPrice] = React.useState(84);

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

    let handleSponsorTypeSelection = (selected: string) => {
        setSponsorType(selected);
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

    let createUser = async (reqBody: any) => {
        setUserDetails(reqBody);

        setLoading(true);
        try {
            let res = await Axios({
                method: 'post',
                url: `${url + '/users/create-user'}`,
                data: reqBody,
            });

            setResponse(res.data);
            setCanCheckout(true);

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

    let buySponsorship = (userInfo: any) => {
        console.log('userInfo', userInfo);

    };

    return (
        <div style={{ width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <Box sx={{ marginTop: '4%', padding: '2%' }}>
                        <Grid container spacing={2}>
                            <Grid item sm={3}></Grid>
                            <Grid item sm={6} xs={12}>
                                <Typography style={{ textAlign: 'center' }} variant="h5">Confirm school sponsorship</Typography>
                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={[].map((option: any) => option.title)}
                                    renderInput={(params: any) => (
                                        <TextField
                                            {...params}
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                                placeholder: 'School Name or Zip Code…',
                                                size: 'small',
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <SearchIcon />
                                                    </InputAdornment>
                                                ),
                                                color: 'secondary'
                                            }}
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid item sm={3}></Grid>
                        </Grid>
                        <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                    </Box>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Box sx={{ marginTop: '4%', padding: '2%' }}>
                        <Typography variant="h4">Buy Sponsorships</Typography>

                        {!canCheckout && <Form initialValues={{ type: 'Individual', entity_name: '', first_name: '', last_name: '', state: '', county: '', email: '', username: '', school_name: '', zip_code: '', quantity: '' }} buttonText="checkout" buttonSize="medium" submit={createUser}>
                            <FormFieldWrapper>
                                Sponsor type:  <br /><FRadioButton selectionChange={handleSponsorTypeSelection} name="type" options={['Individual', 'Entity']} />
                            </FormFieldWrapper>
                            {sponsorType === 'Individual' && <div><FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="first_name" type="text" variant="outlined" label="First Name" />
                            </FormFieldWrapper>
                                <FormFieldWrapper>
                                    <InputField size="small" color="secondary" fullWidth={true} name="last_name" type="text" variant="outlined" label="Last Name" />
                                </FormFieldWrapper></div>}
                            {sponsorType === 'Entity' && <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} name="entity_name" type="text" variant="outlined" label="Entity Name" />
                            </FormFieldWrapper>}
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
                        </Form>}
                        {canCheckout && <div>
                            <Link  onClick={() => setCanCheckout(false)} to="#">Back</Link>
                            <Typography variant="h5">Total: ${sponsorshipPrice * userDetails?.quantity}</Typography>
                            <PayPalButton
                                amount={sponsorshipPrice * userDetails?.quantity}
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                onSuccess={() => buySponsorship(response)}
                                options={{ clientId: 'sb' }}
                            />
                        </div>}
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sponsors;