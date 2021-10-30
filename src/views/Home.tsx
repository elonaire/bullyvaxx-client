import { Box, Typography, Tabs, Tab, styled } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Carousel } from 'react-carousel-minimal';

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
                    <Typography>{children}</Typography>
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
            caption: 'With School Safety Net, the parents and community control safety in the schools.'
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
                    marginTop: '0'
                }}
            />

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Info" {...a11yProps(0)} />
                        <Tab label="Parents" {...a11yProps(1)} />
                        <Tab label="Community" {...a11yProps(2)} />
                        <Tab label="Students" {...a11yProps(3)} />
                        <Tab label="Retirees" {...a11yProps(4)} />
                        <Tab label="Expectations" {...a11yProps(5)} />
                        <Tab label="Submit Threat Information" {...a11yProps(6)} />
                        <Tab label="Sponsorships" {...a11yProps(7)} />
                        <Tab label="REVIEW VIDEO" {...a11yProps(8)} />
                    </Tabs>
                </Box>
                <StyledTabPanel value={value} index={0}>
                    <h2>We asked a group of students that are protected by School Safety Net to describe, in their own words, how this system works. Here is what they had to say:</h2>
                    <p>"The students in Parkland Florida were failed by EVERYBODY responsible for keeping them safe. The school district, the police, even the FBI failed them.</p>


                    <p>We have School Safety Net, nobody fails us at our school. Here’s how it works. We have a special, online safety council just for keeping us safe at school. Our safety council is not connected to the school in any way; the people in the community who care about us, along with our parents, completely run and control our safety council. Our safety council only requires a few minutes of our parents’ time each week, and they are completely up to date.</p>


                    <p>If we know of a threat or a bully, we don’t report it to the school anymore; instead, we go online and report it through School Safety Net. School Safety Net sends the report to both the principal and our safety council.</p>


                    <p>If we don’t want anybody to know who filed the report, all we have to do is tell any adult we trust and they file the report for us. This way nobody knows who filed the report, not even our principal.</p>


                    <p>Some call this system The Periscope because it literally lets our parents and the community look over the walls of our school and see everything that is going on with bullying and threats; and, to take action if necessary.</p>


                    <p>We love the Periscope because it is “for real” anonymous; nobody has any idea who made the report. When we report someone, the school immediately gets to the bottom of it and shuts down the bully or person making the threat. If the school doesn’t shut down the bully or threat, our safety council steps in and shuts it down, and they have the power to do so. Nobody bullies or threatens us at school.</p>


                    <p>The Periscope would have taken down Nikolas Cruz long before he attacked. It would have also stopped anyone who was bullying him.</p>


                    <p>Every community should make sure their students have the Periscope. All of us are much safer with the Periscope, no matter what school we go to."</p>


                    <p>Parents, learn how to activate School Safety Net for your school by clicking on the SPC HANDBOOK link at the top of the home page.</p>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={1}>
                    <h2>Parents</h2>
                    <p>With School Safety Net, the students, parents and community control shutting down bullying and threats against their school. All parents should step up, join together and provide this protection for their children and students. Parents, learn how to activate School Safety Net for your school by clicking on the SPC HANDBOOK link at the top of the home page.</p>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={2}>
                    <h2>Community</h2>
                    <p>School Safety Net allows the parents and community to control and have authority over shutting down bullying and threats against their school.</p>

                    <p>Every threat and all abuse is properly addressed and shut down under the direction of the Student Protection Council.</p>

                    <p>EVERY responsible parent and community member should join their school’s Student Protection Council. All SPC’s should have large memberships of adults who are stepping forward to end these threats against their children and set new standards for conduct and safety in the school.</p>

                    <p>Parents, learn how to activate School Safety Net for your school by clicking on the SPC HANDBOOK link at the top of the home page.</p>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={3}>
                    <h2>Student</h2>
                    <p>If you are a student and you get bullied, you see a classmate getting bullied, or you become aware of a threat against your school, with School Safety Net all you have to do is tell any adult that you trust.</p>

                    <p>It can be a relative 10 states away, it doesn’t matter. Telling a trusted adult is all you do, and the bullying/threat is immediately addressed and shut down.</p>

                    <p>The trusted adult submits the report to the Student Protection Council who documents it and then forwards it to school.</p>

                    <p>The reporting student is 100% anonymous and their trusted adult never reveals their identity to anyone.</p>

                    <p>Every bullying and threat report is thoroughly addressed and quickly shut down under the direction of the Student Protection Council.</p>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={4}>
                    <h2>Retirees</h2>
                    <p>If you are retired and looking for a way to help children where your wisdom and experience will make a real difference, please join The Student Protection Council for your school. Your participation will absolutely make a difference in the lives of every child in the school, and everything is done right from your computer. Please step up and help.</p>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={5}>
                    <h2>Expectations</h2>
                    <p>If properly activated, here are reasonable expectations for each type of threat:</p>
                    <h3>School Shooters / Threats against the school</h3>
                    <p>School shooters always leave a trail of evidence as they plan the attack; Nikolas Cruz for example. Students and citizens will report this evidence through School Safety Net without hesitation. The very first time Cruz was reported as a threat, the Student Protection Council would have immediately communicated with school administration and law enforcement and then put the investigation of Cruz under a microscope until he was no longer a threat, whether cleared or incarcerated. ( see SPC Handbook link for details )</p>
                    <p>Always remember, the ONLY way to completely protect students from harm is by shutting down a shooter BEFORE they attack. Once the shooter enters the property with a weapon, our children and students have lost.</p>
                    <p>School Safety Net shuts down a threat against the school as soon as it is reported.</p>
                    <p>Parents, learn how to activate School Safety Net for your school by clicking on the SPC HANDBOOK link at the top of the home page.</p>
                    <h3>Bullying</h3>
                    <p>Numerous factors effect bullying and there are many different types of bullying. Here are results that every school should see:</p>
                    <ul>
                        <li>Habitual Bullying - Over 160,000 students skip school every day because they are being habitually bullied. Students know which classmates are being persecuted by constant bullying and they will watch them and report any incident of bullying against these victims. The bully/bullies will realize that abusing their victims will bring swift consequences from the Student Protection Council. Habitual bullying, the most harmful and dangerous type of bullying, will quickly cease.</li>
                        <li>Bullycides – As explained above, this system quickly shuts down habitual bullies, and by doing so it immediately stops the pressure and stress of the abuse on their victims. For a child who is reaching the breaking point from bullying, this is a lifesaving change. Instead of continuing to break down, the pressure immediately begins to diffuse and the victim feels a sense of excitement over their “new school experience” where they are no longer abused. Implementation of the School Safety Net system has a profound effect on any student that is reaching the breaking point from bullying.</li>
                        <li>Bullying handicapped students – Sadly, handicapped students are bullied at the highest rate of all students. Students will closely watch their handicapped friends once the net is cast and report anyone who bullies them. The bully/bullies will realize that abusing handicapped students will bring swift consequences from the Student Protection Council. The abuse will quickly cease.</li>
                        <li>Repeat bullies – Some bullies constantly and randomly attack or degrade other students. Every student knows who these incessant bullies are and they will be reported every time they strike. Repeat bullies will realize that abusing their victims will bring swift consequences from the Student Protection Council. The abuse will quickly cease.</li>
                        <li>General bullying- The overall number of bullying incidents will quickly decline once the School Safety Net is implemented. Students will quickly realize that any bullying will be reported and seriously addressed.</li>
                        <li>Cyberbullying – Studies have shown that when school bullying is significantly decreased students begin to develop a new, very negative attitude towards bullying of any kind. Cyberbullying is reduced as a result.</li>
                        <li>Attendance – Every day, 2 pro football stadiums filled with students (over 160,000) stay home from school to take a break from the abuse. There are different students each day coming from an overall pool of an estimated 2 million students total who skip school to skip the abuse. Many of these students will eventually drop out of school. Every future school shooter is sitting in one of those seats. Once bullies are brought under control, these students will no longer skip school because of the abuse. The School Safety Net improves attendance and graduation rates.
                            Parents, learn how to activate School Safety Net for your school by clicking on the SPC HANDBOOK link at the top of the home page.</li>
                    </ul>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={6}>
                    <h2>Submit Threat Information</h2>
                    <p>In order to submit information into The Threat Alert System you must first confirm that this system has been made operational in your county. Click here to proceed.</p>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={7}>
                    <h2>Buy Sponsorships</h2>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={8}>
                    <h2>REVIEW VIDEO</h2>
                    <p>If you are a school or law enforcement official that has received a report through The Threat Alert System and you would like to review the video that the individual or trustee has uploaded for you, simply enter their username into the search box below and you will be carried directly to their video.</p>
                </StyledTabPanel>
            </Box>

            <Box sx={{ width: '100%' }}>
                <h2 style={{ textAlign: 'center' }}>Send us your feedback</h2>
                <h3 style={{ textAlign: 'center' }}>See what people say about us</h3>
            </Box>
        </div>
    );
}

export default Home;