import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@chakra-ui/react";
import React from "react";

import {
    DialogWidthType,
    DialogPropTypes,
    OpenDialogType,
    EmptyFunctionType,
} from "../../utils/types";
import dialogContext from "./ConfirmContext";

interface StateTypes {
    value: DialogPropTypes;
    isOpen: boolean;
    title: string;
    okText?: string;
    cancelText?: string;
    width?: DialogWidthType;
    component: React.ReactNode;
    okCallback: EmptyFunctionType;
    cancelCallback?: EmptyFunctionType;
}

interface PropTypes {
    children: React.ReactNode;
}

class DialogProvider extends React.Component<PropTypes, StateTypes> {
    constructor(props: PropTypes) {
        super(props);

        this.state = {
            isOpen: false,
            title: "",
            okText: "Ok",
            cancelText: "Cancel",
            width: "md",
            component: null,
            okCallback: () => {
                console.log("Not implemented!");
            },
            cancelCallback: () => {
                console.log("Not implemented!");
            },
            value: {
                openDialog: this.open,
                closeDialog: this.close,
            },
        };
    }

    public open: OpenDialogType = ({
        component,
        title,
        okCallback,
        cancelCallback,
        width,
        okText,
        cancelText,
    }) => {
        this.setState({
            component,
            title,
            okCallback,
            cancelCallback,
            width,
            okText,
            cancelText,
            isOpen: true,
        });
    };

    public close = (): void => {
        this.setState({ isOpen: false });
    };

    public handleCloseClick = () => {
        if (this.state.cancelCallback) {
            this.state.cancelCallback();
        } else {
            this.close();
        }
    };

    render() {
        const { value, isOpen, width, title, okText, cancelText, component } =
            this.state;

        return (
            <dialogContext.Provider value={value}>
                <Modal
                    isOpen={isOpen}
                    onClose={this.handleCloseClick}
                    //   maxWidth={width}
                    //   fullWidth
                >
                    {title && <ModalHeader>{title}</ModalHeader>}
                    <ModalContent>{component}</ModalContent>
                    <ModalFooter>
                        <Button
                            onClick={this.handleCloseClick}
                            color="secondary"
                        >
                            {cancelText}
                        </Button>
                        <Button onClick={this.state.okCallback} color="primary">
                            {okText}
                        </Button>
                    </ModalFooter>
                </Modal>
                {this.props.children}
            </dialogContext.Provider>
        );
    }
}

export default DialogProvider;
