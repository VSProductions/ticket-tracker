import * as React from 'react';
import {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {LoginFormFields} from "../models";

interface Props {
    formTitle: string
    usernameTitle: string
    passwordTitle: string
    loginBtnTitle: string
    onFormSubmit: (loginForm:LoginFormFields) => void
}
const LoginForm:React.FunctionComponent<Props> = (props:Props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function resetForm() {
        setUsername("");
        setPassword("");
    }

    const handleFormSubmit = () => {
        props.onFormSubmit({username: username, password: password});
        resetForm();
    }

    return <>
        <Card>
            <Card.Header>
                <h3>{props.formTitle}</h3>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>{props.usernameTitle}</Form.Label>
                        <Form.Control value={username}
                                      onChange={(e) => setUsername(e.currentTarget.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{props.passwordTitle}</Form.Label>
                        <Form.Control value={password}
                                      type={"password"}
                                      onChange={(e) => setPassword(e.currentTarget.value)} />
                    </Form.Group>
                    <Button variant={"primary"} onClick={handleFormSubmit}>{props.loginBtnTitle}</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
}

export default LoginForm;