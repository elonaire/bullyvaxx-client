import { Box, Typography, Tabs, Tab, styled, Grid, Backdrop } from "@mui/material";
import React, { FunctionComponent, useEffect } from "react";
import { Carousel } from 'react-carousel-minimal';
import { Link } from "react-router-dom";
import Form, { InputField } from "../components/Form";
import Axios from 'axios';
import Loader from "react-loader-spinner";

interface HomeProps {

}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface CarouselData {
    image: string;
    caption: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const StyledTabPanel = styled(TabPanel)(() => ({
    // height: '50vh',
    // overflow: 'scroll'
}));

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const FeedbackDiv = styled('div')(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
}));


export const Video = styled('video')(({ theme }) => ({
    width: '100%'
}));

const FeedbackForm = styled('div')(({ theme }) => ({
    width: '100%',
    background: '#fff',
    padding: '7%',
    borderRadius: '5px',
}));

export const FormFieldWrapper = styled('div')(({ theme }) => ({
    marginBottom: '3%'
}));

const Home: FunctionComponent<HomeProps> = () => {
    const data: CarouselData[] = [
        {
            image: 'banner.jpeg',
            caption: 'Important “Vaccines” Have Been Developed; One for the Coronavirus Pandemic and One for the Bullying Epidemic'
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelectedTab(`${newValue}`);
    };
    const [response, setResponse] = React.useState({} as any);
    const [loading, setLoading] = React.useState(false);
    const [selectedPage] = React.useState('Home');
    const [selectedTab, setSelectedTab] = React.useState('0');

    let url: string;

    if (process.env.NODE_ENV === 'development') {
        url = `${process.env.REACT_APP_DEV_BACKEND}`;
    } else if (process.env.NODE_ENV === 'production') {
        url = `${process.env.REACT_APP_PRODUCTION}`;
    }

    let fetchContent = async (q: { page?: string; tab?: string; }) => {
        setLoading(true);
        try {
            let res = await Axios({
                method: 'get',
                url: `${url + '/content'}?page=${q.page}&tab=${q.tab}`,
            });

            // console.log('res.data', res.data, response, loading);

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
        fetchContent({ page: selectedPage, tab: selectedTab });
        return () => { abortController.abort(); };
        // eslint-disable-next-line
    }, [selectedPage, selectedTab]);

    return (
        <div style={{ width: '100%' }}>
            <Carousel
                data={data}
                time={5000}
                width="100%"
                height="500px"
                captionStyle={captionStyle}
                radius="0"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={false}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={false}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    width: "100%",
                    maxHeight: "500px",
                    margin: "40px auto",
                    marginTop: '0',
                }}
            />

            <Box sx={{ width: '100%' }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <Loader
                    type="Puff"
                    color="#f44336"
                    height={100}
                    width={100}
                    visible={loading}
                />
            </Backdrop>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
                        <Tab label="BullyVaxx Works, Here’s Why" {...a11yProps(0)} />
                        <Tab label="Is your School Protected?" {...a11yProps(1)} />
                        <Tab label="Report a Bully or Threat" {...a11yProps(2)} />
                        <Tab label="Message to Moms" {...a11yProps(3)} />
                        <Tab label="Message to Bullies" {...a11yProps(4)} />
                        <Tab label="Principals/School Administrators" {...a11yProps(5)} />
                        <Tab label="BullyVaxx Database" {...a11yProps(6)} />
                    </Tabs>
                </Box>
                <StyledTabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        <Grid item sm={3}></Grid>
                        <Grid item xs={12} sm={6}>
                            <Video controls>
                                <source src="mov_bbb.mp4" type="video/mp4" />
                                <source src="mov_bbb.ogg" type="video/ogg" />
                                Your browser does not support HTML video.
                            </Video>
                            <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                        </Grid>
                        <Grid item sm={3}></Grid>
                    </Grid>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={1}>
                    <Typography variant="h3">Search for your school: </Typography>
                    <Form initialValues={{ username: '' }} buttonText="Search" buttonSize="medium" submit={() => { }}>
                        <InputField size="small" color="secondary" name="school_name" type="text" variant="outlined" label="School Name" />
                        <InputField size="small" color="secondary" name="zip_code" type="text" variant="outlined" label="Zip Code" />
                    </Form>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={2}>
                    <Typography variant="h3">Report a Bully or Threat: </Typography>
                    <Typography component={'p'}>To report a bully or a threat, sign up <Link to="/signup">here</Link>. If you already have an account, login <Link to="/login">here</Link>.</Typography>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={3}>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={4}>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={5}>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={6}>
                    <div dangerouslySetInnerHTML={{ __html: response?.content }}></div>
                </StyledTabPanel>
            </Box>


            <Box sx={{ width: '100%', background: '#fff' }}>
                <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#f44336" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <FeedbackDiv>
                    <Typography variant="h3" style={{ textAlign: 'center' }}>Send us your feedback</Typography>
                    {/* <Typography variant="h4" style={{ textAlign: 'center' }}>See what people say about us</Typography> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}></Grid>
                        <Grid item xs={12} sm={4}>
                            <FeedbackForm>
                                <Form initialValues={{ form: { username: '' } }} buttonText="submit" buttonSize="medium" submit={() => { }}>
                                    <FormFieldWrapper>
                                        <InputField size="small" color="secondary" fullWidth={true} name="name" type="text" variant="outlined" label="Full Name" />
                                    </FormFieldWrapper>
                                    <FormFieldWrapper>
                                        <InputField size="small" color="secondary" fullWidth={true} name="email" type="email" variant="outlined" label="Email" />
                                    </FormFieldWrapper>
                                    <FormFieldWrapper>
                                        <InputField size="small" isMultiline={true} color="secondary" fullWidth={true} name="message" type="text" variant="outlined" label="Message" />
                                    </FormFieldWrapper>
                                </Form>
                            </FeedbackForm>
                        </Grid>
                    </Grid>
                </FeedbackDiv>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#f44336" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,117.3C672,139,768,181,864,208C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </Box>

        </div>
    );
}

export default Home;