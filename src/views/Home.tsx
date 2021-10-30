import { Box, Typography, Tabs, Tab, styled } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Carousel } from 'react-carousel-minimal';
import Form, { InputField } from "../components/Form";

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
    height: '50vh',
    overflow: 'scroll'
}));

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Home: FunctionComponent<HomeProps> = () => {
    const data: CarouselData[] = [
        {
            image: 'banner.jpeg',
            caption: 'Important “Vaccines” Have Been Developed; One for the Coronavirus Pandemic and One for the Bullying Epidemic'
        },
        {
            image: 'banner.jpeg',
            caption: 'Our educational system has been defeated by school shooters and bullies.'
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
    };

    return (
        <div>
            <Carousel
                data={data}
                time={5000}
                width="100vw"
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
                    maxWidth: "100vw",
                    maxHeight: "500px",
                    margin: "40px auto",
                    marginTop: '0',
                }}
            />

            <Box sx={{ width: '100vw' }}>
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

                </StyledTabPanel>
                <StyledTabPanel value={value} index={1}>
                    <Form initialValues={{ form: { username: '' } }} buttonText="Search" submit={() => { }}>
                        <InputField size="small" name="school_name" type="text" variant="outlined" label="School Name" />
                        <InputField size="small" name="zip_code" type="text" variant="outlined" label="Zip Code" />
                    </Form>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={2}>

                </StyledTabPanel>
                <StyledTabPanel value={value} index={3}>

                </StyledTabPanel>
                <StyledTabPanel value={value} index={4}>

                </StyledTabPanel>
                <StyledTabPanel value={value} index={5}>

                </StyledTabPanel>
                <StyledTabPanel value={value} index={6}>

                </StyledTabPanel>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Typography variant="h3" style={{ textAlign: 'center' }}>Send us your feedback</Typography>
                <Typography variant="h4" style={{ textAlign: 'center' }}>See what people say about us</Typography>
            </Box>
        </div>
    );
}

export default Home;