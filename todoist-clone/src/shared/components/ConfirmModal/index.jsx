import React, { useRef } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import Modal from "../Modal";
import styled from "styled-components";
import Button from "../Button";
const ConfirmModalWrapper = styled(Modal)`
    min-width: 300px !important;
    max-width: 400px !important;
`;
const ConfirmSection = styled.section`
    padding: 20px 24px;
`;
const ConfirmHeader = styled.div`
    padding-bottom: 25px;
    font-weight: 700;
`;
const ConfirmText = styled.span`
    font-size: 13px;
    padding-bottom: 25px;
`;
const ConfirmAction = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #ddd;
    padding: 12px 24px;

    Button span {
        font-size: 13px !important;
        font-weight: 700;
        line-height: 17px;
        margin: 0px;
        text-align: center;
    }

    Button {
        margin-left: 10px;
        min-width: 60px;
        padding: 6px 12px 7px;
    }
`;
const CancelButton = styled(Button)`
    color: #202020;
    border: 1px solid #ddd;
    background: #f3f3f3;
`;
const ConfirmButton = styled(Button)`
    background-color: #db4c3f;
    color: #fff !important;
    :hover {
        background-color: #db4c3f !important;
    }
`;
const defaultsData = {
    title: "Info",
    text: "",
    confirmText: "OK",
    cancelText: "Cancel",
};

function ConfirmModal({
    data: dataProps,
    onConfirm = () => {},
    onCancel = () => {},
    ...ModalProps
}) {
    const $modal = useRef();
    const data = Object.assign({}, defaultsData, dataProps);
    return (
        <ConfirmModalWrapper
            {...ModalProps}
            hasCloseButton={false}
            ref={$modal}
        >
            <ConfirmSection>
                <ConfirmHeader>{data.title}</ConfirmHeader>
                <ConfirmText
                    dangerouslySetInnerHTML={{ __html: data.text }}
                ></ConfirmText>
            </ConfirmSection>
            <ConfirmAction>
                <CancelButton
                    onClick={() => {
                        onCancel();
                        console.log($modal);
                        $modal.current.close();
                    }}
                >
                    {data.cancelText}
                </CancelButton>
                <ConfirmButton
                    onClick={() => {
                        onConfirm();
                        $modal.current.close();
                    }}
                >
                    {data.confirmText}
                </ConfirmButton>
            </ConfirmAction>
        </ConfirmModalWrapper>
    );
}

export const openConfirmModal = (props) => {
    let divTarget = document.createElement("div");
    document.getElementById("root").appendChild(divTarget);
    render(<ConfirmModal isOpen={true} {...props} />, divTarget);
};

ConfirmModal.propTypes = {};

export default ConfirmModal;
