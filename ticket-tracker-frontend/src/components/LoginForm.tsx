import * as React from 'react';
import {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {LoginFormFields} from "../models";
import Form from "react-jsonschema-form";
import {JSONSchema6} from "json-schema";

interface Props {
    formTitle: string
    usernameTitle: string
    passwordTitle: string
    loginBtnTitle: string
    onFormSubmit: (loginForm:LoginFormFields) => void
}
const LoginForm:React.FunctionComponent<Props> = (props:Props) => {

    const [formData, setFormData] = useState<LoginFormFields>();

    const loginSchema:JSONSchema6 = {
        type: "object",
        title: props.formTitle,
        required: ["username", "password"],
        properties: {
            username: {
                title: props.usernameTitle,
                type: "string"
            },
            password: {
                title: props.passwordTitle,
                type: "string"
            }
        }
    }

    const loginUISchema = {
        password: {
            "ui:widget": "password"
        }
    }
    const handleFormSubmit = (e:any) => {
        props.onFormSubmit(formData!);
    }

    return <>
        <Card>
            <Card.Body>
                <Form schema={loginSchema} uiSchema={loginUISchema} formData={formData} onSubmit={handleFormSubmit}>
                    <Button type={"submit"}>{props.loginBtnTitle}</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
}

export default LoginForm;