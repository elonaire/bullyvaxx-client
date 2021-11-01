import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React, { FunctionComponent } from "react";
import Form, { InputField } from "../components/Form";

interface DashboardProps {

}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
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

const Dashboard: FunctionComponent<DashboardProps> = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ width: '100%' }}>
                <Typography variant="h3">What type of information are you submitting?</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
                        <Tab label="Threat against a school" {...a11yProps(0)} />
                    </Tabs>
                </Box>
                <StyledTabPanel value={value} index={0}>
                    <Typography variant="h4"></Typography>
                    <Form initialValues={{ form: { username: '' } }} buttonText="Search" buttonSize="medium" submit={() => { }}>
                        To report a school shooter or any type threat against a school complete the form below and click SUBMIT REPORT. The report will automatically be sent by email to the principal:

                        Dear Principal, I have information involving a threat against your school. I am reporting this threat through The Threat Alert system.

                        I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.

                        I am not a trustee for someone else, I am submitting this information on my own behalf.

                        I have uploaded an identification video in the Threat Alert System database. You can view this video at www.threatalert.us under my username <InputField size="small" color="secondary" name="username" type="text" variant="standard" />.<br />

                        If you have any further questions or need to immediately verify this information please contact me and I will provide the answers for you.

                        Your Full Name

                        Your cell phone number

                        My e-mail address

                        Name of School

                        Principal’s email address

                        Name of person/student making this threat?

                        Gender of person/student making this threat: Male  Female

                        Grade of person if student is making this threat.

                        Homeroom Teacher of person/student making this threat.

                        When is this attack supposed to occur?
                        dd/mm/yyyy

                        Do any other people/students have knowledge of this threat? Yes  No

                        If yes, what are their names? (if more than one person, seperate their names using commas)

                        In complete detail provide all information you have on this threat.

                        Please send me a reply email confirming that you have received this information, this will allow me to know that the information that I have submitted is being properly addressed. Thank you.
                        <InputField size="small" color="secondary" name="school_name" type="text" variant="standard" label="School Name" />
                        <InputField size="small" color="secondary" name="zip_code" type="text" variant="standard" label="Zip Code" />
                    </Form>
                </StyledTabPanel>
            </Box>
        </div>
    );
}

export default Dashboard;