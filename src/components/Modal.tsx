import React, { FunctionComponent } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface GenericModalProps {
    open: boolean;
}

const GenericModal: FunctionComponent<GenericModalProps> = (props: GenericModalProps) => {
    const handleClose = () => {};

    return (
        <SweetAlert
            error
            title="Error"
            onConfirm={handleClose}
        >
            School not found!
        </SweetAlert>
    );
}

export default GenericModal;