import { FormControl, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const EmailForm: React.FC = () => {
    return (
        <FormControl>
            <Input placeholder='Ditt namn' isRequired/>
            <Input placeholder='Din e-post' isRequired/>
            <Textarea placeholder="Meddelande" isRequired/>
        </FormControl>
        
    )
}

export default EmailForm;