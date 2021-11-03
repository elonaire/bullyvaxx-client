import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React, {FunctionComponent} from 'react';
import Form, {FRadioButton, InputField} from '../components/Form';

interface ReportsProps {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
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

const Reports: FunctionComponent<ReportsProps> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{width: '100%'}}>
      <Box sx={{width: '100%', p: 2}}>
        <Typography variant="h3">
          What type of information are you submitting?
        </Typography>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
          >
            <Tab label="Threat against a school" {...a11yProps(0)} />
            <Tab label="Mass Attack Threat" {...a11yProps(1)} />
            <Tab label="Weapons in School" {...a11yProps(2)} />
            <Tab label="Bullying" {...a11yProps(3)} />
            <Tab label="Cyberbullying" {...a11yProps(4)} />
            <Tab label="Other threat" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <StyledTabPanel value={value} index={0}>
          <Typography variant="h4">THREAT AGAINST A SCHOOL</Typography>
          <Form
            initialValues={{form: {username: ''}}}
            buttonText="submit report"
            buttonSize="medium"
            submit={() => {}}
          >
            To report a school shooter or any type threat against a school
            complete the form below and click SUBMIT REPORT. The report will
            automatically be sent by email to the principal: <br />
            Dear Principal, I have information involving a threat against your
            school. I am reporting this threat through The Threat Alert system.{' '}
            <br />
            <FRadioButton name="gender" options={['I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.', 'I am not a trustee for someone else, I am submitting this information on my own behalf.']} /><br />
            I have uploaded an identification video in the Threat Alert System
            database. You can view this video at www.threatalert.us under my
            username
            <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            .<br />
            If you have any further questions or need to immediately verify this
            information please contact me and I will provide the answers for
            you.
            <br />
            Your Full Name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Your cell phone number <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            My e-mail address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Name of School <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Principal’s email address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Name of person/student making this threat? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Gender of person/student making this threat:  <br /><FRadioButton name="gender" options={['Male', 'Female']} />
            <br />
            Grade of person if student is making this threat. <InputField
              size="small"
              color="secondary"
              name="username"
              type="number"
              variant="standard"
            />
            <br />
            Homeroom Teacher of person/student making this threat. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            When is this attack supposed to occur? <InputField
              size="small"
              color="secondary"
              name="username"
              type="date"
              variant="standard"
            />
            <br />
            Do any other people/students have knowledge of this threat? <br /><FRadioButton name="gender" options={['No', 'Yes']} />
            <br />
            If yes, what are their names? (if more than one person, seperate
            their names using commas) <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            In complete detail provide all information you have on this threat. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            />
            <br />
            Please send me a reply email confirming that you have received this
            information, this will allow me to know that the information that I
            have submitted is being properly addressed. Thank you.
            <br />
          </Form>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={1}>
          <Typography variant="h4">MASS ATTACK THREAT</Typography>
          <Form
            initialValues={{form: {username: ''}}}
            buttonText="submit report"
            buttonSize="medium"
            submit={() => {}}
          >
            To report a mass attack, terrorism, workplace attack or any other
            public mass attack complete the form below and click SUBMIT REPORT.
            The report will automatically be sent by email to the proper
            authorities: <br />
            Dear Sir, I have information involving a terrorism threat. I am
            reporting this threat through The Threat Alert system. <br />
            <FRadioButton name="gender" options={['I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.', 'I am not a trustee for someone else, I am submitting this information on my own behalf.']} /><br />
            I have uploaded an identification video in the Threat Alert System
            database. You can view this video at www.threatalert.us under my
            username <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />. <br />
            If you have any further questions or need to immediately verify this
            information please contact me and I will provide the answers for
            you. <br />
            Your Full Name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Your cell phone number <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            My e-mail address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of County <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            County Sheriff's email address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of person/student making this threat? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Gender of person/student making this threat: <br /><FRadioButton name="gender" options={['Male', 'Female']} /> <br />
            When is this attack supposed to occur? <InputField
              size="small"
              color="secondary"
              name="username"
              type="date"
              variant="standard"
            /> <br />
            Do any other people/students have knowledge of this threat? <br /><FRadioButton name="gender" options={['Yes', 'No']} />
            <br />
            If yes, what are their names? (if more than one person, seperate
            their names using commas) <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            In complete detail provide all information you have on this threat. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            />
            <br />
            Please send me a reply email confirming that you have received this
            information, this will allow me to know that the information that I
            have submitted is being properly addressed. Thank you. <br />
          </Form>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={2}>
          <Typography variant="h4">WEAPONS IN SCHOOL</Typography>
          <Form
            initialValues={{form: {username: ''}}}
            buttonText="submit report"
            buttonSize="medium"
            submit={() => {}}
          >
            To report a WEAPON IN THE SCHOOL complete the form below and click
            SUBMIT REPORT. The report will automatically be sent by email to the
            principal: Dear Principal, I have information involving a weapon in
            your school. I am reporting this threat through The Threat Alert
            system. <br />
            <FRadioButton name="gender" options={['I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.', 'I am not a trustee for someone else, I am submitting this information on my own behalf.']} /><br />
            I have uploaded an identification video in the Threat Alert System
            database. You can view this video at www.threatalert.us under my
            username <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />. <br />
            If you have any further questions or need to immediately verify this
            information please contact me and I will provide the answers for
            you. <br />
            Your Full Name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Your cell phone number <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            My e-mail address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of School <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Principal’s email address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of the person/student bringing the weapon to school? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Gender of person/student bringing the weapon to school: <br /><FRadioButton name="gender" options={['Male', 'Female']} />
            <br />
            Grade of person/student bringing the weapon to school. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Homeroom Teacher of person/student bringing the weapon to school <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            What type of weapon is this? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Do any other people/students have knowledge of this threat? <br /><FRadioButton name="gender" options={['Yes', 'No']} />
            <br />
            If yes, what are their names? (if more than one person, seperate
            their names using commas) <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Where does the student keep this weapon at school? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Do you know why this student is bringing this weapon to school? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            In complete detail provide all information you have on this threat. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            />
            <br />
            Please send me a reply email confirming that you have received this
            information, this will allow me to know that the information that I
            have submitted is being properly addressed. Thank you.
            <br />
          </Form>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={3}>
          <Typography variant="h4">BULLYING</Typography>
          <Form
            initialValues={{form: {username: ''}}}
            buttonText="submit report"
            buttonSize="medium"
            submit={() => {}}
          >
            To report BULLYING IN THE SCHOOL complete the form below and click
            SUBMIT REPORT. The report will automatically be sent by email to the
            principal: <br />
            Dear Principal, I have information involving bullying in your
            school. I am reporting this threat through The Threat Alert system.{' '}
            <br />
            <FRadioButton name="gender" options={['I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.', 'I am not a trustee for someone else, I am submitting this information on my own behalf.']} /><br />
            If you have any further questions or need to immediately verify this
            information please contact me and I will provide the answers for
            you. <br />
            Your Full Name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Your cell phone number <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            My e-mail address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of School <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Principal’s email address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            What is the first initial in the bully’s first name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            What is the bully’s last name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Full name of bully <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Gender of bully: <br /><FRadioButton name="gender" options={['Male', 'Female']} /><br />
            Grade of bully. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Homeroom Teacher of bully <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Date of incident <InputField
              size="small"
              color="secondary"
              name="username"
              type="date"
              variant="standard"
            /><br />
            Time of incident <InputField
              size="small"
              color="secondary"
              name="username"
              type="time"
              variant="standard"
            /><br />
            If more than one bully add their names here <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Names of any other students that supported the bully’s actions <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Did any teacher or staff member see this incident? <br /><FRadioButton name="gender" options={['Yes', 'No']} /><br />
            If yes, who was the teacher / staff member? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            What actions did the teacher / staff member take? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Where did this incident occur? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Did the bully physically abuse the victim? <br /><FRadioButton name="gender" options={['Yes', 'No']} />
            <br />
            Was the victim a handicapped student? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            Was the victim a
            younger or smaller student than the bully? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            In complete detail provide all information you have on this threat. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Have you witnessed this bully abusing other students in the past?
            <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            If Yes, please provide any details of other bullying incidents that
            you have witnessed or seen in the past involving this bully. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            /><br />
            Please send me a reply email confirming that you have received this
            information, this will allow me to know that the information that I
            have submitted is being properly addressed. Thank you.
            <br />
          </Form>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={4}>
          <Typography variant="h4">CYBERBULLYING</Typography>
          <Form
            initialValues={{form: {username: ''}}}
            buttonText="submit report"
            buttonSize="medium"
            submit={() => {}}
          >
            To report BULLYING IN THE SCHOOL complete the form below and click
            SUBMIT REPORT. The report will automatically be sent by email to the
            principal: <br />
            Dear Principal, I have information involving cyberbullying in your
            school. I am reporting this threat through The Threat Alert system.{' '}
            <br />
            <FRadioButton name="gender" options={['I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.', 'I am not a trustee for someone else, I am submitting this information on my own behalf.']} /><br />
            If you have any further questions or need to immediately verify this
            information please contact me and I will provide the answers for
            you. <br />
            Your Full Name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Your cell phone number <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            My e-mail address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of School <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Principal’s email address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            What is the first initial in the bully’s first name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            What is the cyberbully’s last name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Full name of cyberbully <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Gender of cyberbully: <br /><FRadioButton name="gender" options={['Male', 'Female']} /> <br />
            Grade of cyberbully. <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Homeroom Teacher of cyberbully <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Date of incident <InputField
              size="small"
              color="secondary"
              name="username"
              type="date"
              variant="standard"
            /><br />
            Time of incident <InputField
              size="small"
              color="secondary"
              name="username"
              type="time"
              variant="standard"
            /><br />
            If more than one cyberbully add their names here <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Names of any other students that supported the cyberbully’s actions <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            Did any teacher or staff member see this incident? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            If yes, who was the teacher / staff member? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            What actions did the teacher / staff member take? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Where did this incident occur? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Did the cyberbully physically abuse the victim? <br /><FRadioButton name="gender" options={['Yes', 'No']} />
            <br />
            Was the victim a handicapped student? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            Was the victim a younger or smaller student than the cyberbully? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            In complete detail provide all information you have on this threat. <br /><InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            />
            <br />
            Have you witnessed this cyberbully abusing other students in the
            past? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            If Yes, please provide any details of other cyberbullying incidents
            that you have witnessed or seen in the past involving this
            cyberbully. <br /><InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            /><br />
            Please send me a reply email confirming that you have received this
            information, this will allow me to know that the information that I
            have submitted is being properly addressed. Thank you.
            <br />
          </Form>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={5}>
          <Typography variant="h4">OTHER THREAT</Typography>
          <Form
            initialValues={{form: {username: ''}}}
            buttonText="submit report"
            buttonSize="medium"
            submit={() => {}}
          >
            To report any OTHER THREAT complete the form below and click SUBMIT
            REPORT. The report will automatically be sent by email to the proper
            authorities: <br />
            Dear Sir, I have information involving a threat. I am reporting this
            threat through The Threat Alert system. <br />
            <FRadioButton name="gender" options={['I am a trustee reporting this information for another individual who requests to not be identified; however, I will act as an intermediary so you can immediately access any additional information you need.', 'I am not a trustee for someone else, I am submitting this information on my own behalf.']} /><br />
            I have uploaded an identification video in the Threat Alert System
            database. You can view this video at www.threatalert.us under my
            username <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />. <br />
            If you have any further questions or need to immediately verify this
            information please contact me and I will provide the answers for
            you. <br />
            Your Full Name <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Your cell phone number <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            My e-mail address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of County <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Is the threat against a school? <br /><FRadioButton name="gender" options={['Yes', 'No']} /> <br />
            If this is a threat against a school, principal’s email address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            />
            <br />
            If this is not a threat against a school, County Sheriff’s email
            address <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Name of person/student making this threat? <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            Gender of person/student making this threat:  <br /><FRadioButton name="gender" options={['Male', 'Female']} /> <br />
            When is this attack supposed to occur? <InputField
              size="small"
              color="secondary"
              name="username"
              type="date"
              variant="standard"
            /> <br />
            Do any other people/students have knowledge of this threat? <br /><FRadioButton name="gender" options={['Yes', 'No']} />
            <br />
            If yes, what are their names? (if more than one person, seperate
            their names using commas) <InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
            /><br />
            In complete detail provide all information you have on this threat. <br /><InputField
              size="small"
              color="secondary"
              name="username"
              type="text"
              variant="standard"
              isMultiline={true}
            />
            <br />
            Please send me a reply email confirming that you have received this
            information, this will allow me to know that the information that I
            have submitted is being properly addressed. Thank you.
            <br />
          </Form>
        </StyledTabPanel>
      </Box>
    </div>
  );
};

export default Reports;
