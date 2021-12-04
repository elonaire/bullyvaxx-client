import React, { FunctionComponent } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface GenericModalProps {
    children?: React.ReactNode;
}

const GenericModal: FunctionComponent<GenericModalProps> = (props: GenericModalProps) => {
    const handleClose = () => {};

    return (
        <SweetAlert
            error
            title="Error"
            onConfirm={handleClose}
        >
            {props.children}
        </SweetAlert>
    );
}

export default GenericModal;