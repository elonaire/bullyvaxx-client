import React, { FunctionComponent, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from "draft-js";
import Form, { InputField, SelectOption } from "../components/Form";
import { FormFieldWrapper } from "./Home";
import Axios from 'axios';
import Backdrop from "@mui/material/Backdrop";
import Loader from "react-loader-spinner";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Utils from '../utilities/Utils';
// import auth from '../utilities/Auth';
// import Loader from 'react-loader-spinner';

interface AdminProps {
    // history?: any;
}

const Admin: FunctionComponent<AdminProps> = (props: AdminProps) => {
    const [editorState, setEditorState] = React.useState();
    const [content, setContent] = React.useState();
    const [selectedPage, setSelectedPage] = React.useState('');

    const handleEditorStateChange = (editorState: any) => {
        setEditorState(editorState);
        setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    const handleSelectionChange = (pageInfo: SelectOption) => {
        setSelectedPage(pageInfo.value);
    }

    const [response, setResponse] = React.useState({} as any);
    const [loading, setLoading] = React.useState(false);

    let url: string;

    if (process.env.NODE_ENV === 'development') {
        url = `${process.env.REACT_APP_DEV_BACKEND}`;
    } else if (process.env.NODE_ENV === 'production') {
        url = `${process.env.REACT_APP_PRODUCTION}`;
    }

    let addContent = async (reqBody: any) => {
        console.log(reqBody);
        reqBody.content = content;

        setLoading(true);
        try {
            let res = await Axios({
                method: 'post',
                url: `${url + '/content/create'}`,
                data: reqBody,
            });

            setResponse(res.data);

            setLoading(false);
        } catch (error: any) {
            setResponse(error.response);
            setLoading(false);
        }
    };

    let fetchContent = async (q: {page?: string; tab?: string;}) => {
        setLoading(true);
        try {
            let res = await Axios({
                method: 'get',
                url: `${url + '/content'}?page=${q.page}&tab=${q.tab}`,
            });

            setResponse(res.data);

            setLoading(false);
        } catch (error: any) {
            console.log(response);
            setResponse(error.response);
            setLoading(false);
        }
    };

    useEffect(() => {
        let abortController = new AbortController();
        fetchContent({page: selectedPage, tab: ''});
        return () => { abortController.abort(); };
        // eslint-disable-next-line
    }, [selectedPage]);

    return (
        <div style={{ width: '100%', marginTop: '10%', padding: '2%' }}>
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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">Edit website content</Typography>
                    <div style={{ width: '20%' }}>
                        <Form initialValues={{ page: '', tab: '' }} buttonText="save" buttonSize="medium" submit={addContent}>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} isSelect={true} name="page" selectionChange={handleSelectionChange} selectOptions={[{label: 'Home', value: 'Home'}, {label: 'About', value: 'About'}, {label: 'Faq', value: 'Faq'}, {label: 'Sponsors', value: 'Sponsors'}]} variant="outlined" label="Select page" />
                            </FormFieldWrapper>
                            {selectedPage === 'Home' && <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} isSelect={true} name="tab" selectOptions={[{label: 'BullyVaxx works', value: '0'}, {label: 'Is your school protected?', value: '1'}, {label: 'Report a bully or threat', value: '2'}, {label: 'Message to moms', value: '3'}, {label: 'Message to bullies', value: '4'}, {label: 'Principals/school administrators', value: '5'}, {label: 'BullyVaxx Database', value: '7'}]} variant="outlined" label="Select tab" />
                            </FormFieldWrapper>}
                        </Form>
                    </div>
                    <Editor
                        editorState={editorState}
                        // toolbarClassName="toolbarClassName"
                        // wrapperClassName="wrapperClassName"
                        // editorClassName="editorClassName"
                        editorStyle={{ border: '1px solid gray', minHeight: '400px' }}
                        onEditorStateChange={(e: any) => handleEditorStateChange(e)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;