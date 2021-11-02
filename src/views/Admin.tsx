import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from "draft-js";
import Form, { InputField } from "../components/Form";
import { FormFieldWrapper } from "./Home";
import Axios from 'axios';
// import Utils from '../utilities/Utils';
// import auth from '../utilities/Auth';
// import Loader from 'react-loader-spinner';

interface AdminProps {
    // history?: any;
}

const Admin: FunctionComponent<AdminProps> = (props: AdminProps) => {
    const [editorState, setEditorState] = React.useState();
    const [content, setContent] = React.useState();

    const handleEditorStateChange = (editorState: any) => {
        setEditorState(editorState);
        setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
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

            console.log('res.data', res.data, response, loading);

            setResponse(res.data);
            
            setLoading(false);
        } catch (error: any) {
            console.log(error.response);
            setResponse(error.response);
            setLoading(false);
        }
    };
    return (
        <div style={{ width: '100%', marginTop: '10%', padding: '2%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">Edit tabs content</Typography>
                    <div style={{ width: '20%' }}>
                        <Form initialValues={{ tab: '' }} buttonText="save" buttonSize="medium" submit={addContent}>
                            <FormFieldWrapper>
                                <InputField size="small" color="secondary" fullWidth={true} isSelect={true} name="tab" selectOptions={['1', '2', '3', '4']} variant="outlined" label="Select tab" />
                            </FormFieldWrapper>
                        </Form>
                    </div>
                    <Editor
                        editorState={editorState}
                        // toolbarClassName="toolbarClassName"
                        // wrapperClassName="wrapperClassName"
                        // editorClassName="editorClassName"
                        editorStyle={{border: '1px solid gray', minHeight: '400px'}}
                        onEditorStateChange={(e: any) => handleEditorStateChange(e)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;