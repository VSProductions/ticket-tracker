import * as React from 'react';
import {useState} from 'react';
import {Card} from "react-bootstrap";
import {ComplaintFormFields} from "../models";
import Form from "react-jsonschema-form";
import {JSONSchema6} from "json-schema";

interface Props {
    onFormSubmit: (complaintForm:ComplaintFormFields) => void
}
const ComplaintForm:React.FunctionComponent<Props> = (props:Props) => {

    const [complaintFormFields, setComplainFormFields] = useState<ComplaintFormFields>();
    const handleFormSubmit = (complaintForm:any) => {
        props.onFormSubmit(complaintForm.formData);
    }

    const complaintFormSchema:JSONSchema6 = {
        type: "object",
        required: ["title", "machineId", "description", "severity"],
        properties: {
            title: {
                title: "Title",
                type: "string"
            },
            machineId: {
                title: "Faulty Machine",
                type: "string",
                oneOf: [
                    {enum: ["X_RAY_ID"], title: "X-RAY"},
                    {enum: ["MONITOR_ID"], title: "Monitor"},
                    {enum: ["COMPUTER_ID"], title: "Computer"},
                    {enum: ["PUMP_ID"], title: "Pump"},
                ],
            },
            description: {
                title: "Description",
                type: "string"
            },
            severity: {
                title: "Severity",
                type: "string",
                oneOf: [
                    {enum: ["LOW"], title: "Low"},
                    {enum: ["MEDIUM"], title: "Medium"},
                    {enum: ["HIGH"], title: "High"},
                ]
            }
        }
    }
    const complaintFormUISchema = {
        title: {
            "ui:placeholder": "Write a summary of the problem..."
        },
        machineId: {
            "ui:widget": "select",
            "ui:placeholder": "Choose Faulty Machine..."
        },
        description: {
            "ui:widget": "textarea",
            "ui:placeholder": "Explain the problem in as much detail as possible. This will help the technician to debug quickly..."
        },
        severity: {
            "ui:widget": "select",
            "ui:placeholder": "Choose Severity..."
        }
    }

    return <>
        <Card>
            <Card.Header>
                <h3>File New Complaint</h3>
            </Card.Header>
            <Card.Body>
                <Form schema={complaintFormSchema}
                      uiSchema={complaintFormUISchema}
                      formData={complaintFormFields}
                      onSubmit={handleFormSubmit}>
                </Form>
            </Card.Body>
        </Card>
    </>
}

export default ComplaintForm;