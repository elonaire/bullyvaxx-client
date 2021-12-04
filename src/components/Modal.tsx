import React, { FunctionComponent } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface GenericModalProps {
    children?: React.ReactNode;
    handleClose: () => void;
}

const GenericModal: FunctionComponent<GenericModalProps> = (props: GenericModalProps) => {
    const { children, handleClose } = props;
    // const handleClose = () => {};

    return (
        <SweetAlert
            info
            title="Info"
            onConfirm={() => handleClose()}
            confirmBtnBsStyle="primary"
            showCloseButton={true}
        >
            {children}
        </SweetAlert>
    );
}

export default GenericModal;