import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
    AddProjectModalWrapper,
    Title,
    InputTitle,
    ControlWrapper,
    ConfirmAction,
    CancelButton,
    ConfirmButton,
} from "./Styles";
import Modal from "shared/components/Modal";
import { projectColors } from "shared/utils/styles";
import ColorSelect from "./ColorSelect";
import { addProject } from "slices/projectsSlice";

function AddProjectModal({ isOpen, onClose }) {
    const [name, setName] = useState("");
    const [color, setColor] = useState(undefined);
    const dispatch = useDispatch();
    const $modal = useRef();

    const onCancel = () => {
        setName("");
        setColor(undefined);
    };
    const onConfirm = () => {
        dispatch(addProject({ name: name, color: color }));
    };

    return (
        <Modal isOpen={isOpen} ref={$modal} onClose={onClose}>
            <AddProjectModalWrapper>
                <Title>Add Project</Title>
                <InputTitle>Name</InputTitle>
                <ControlWrapper>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </ControlWrapper>
                <InputTitle>Color</InputTitle>
                <ControlWrapper>
                    <ColorSelect
                        value={color}
                        onChange={setColor}
                    ></ColorSelect>
                </ControlWrapper>
                <ConfirmAction>
                    <CancelButton
                        onClick={() => {
                            onCancel();
                            $modal.current.close();
                        }}
                    >
                        Cancel
                    </CancelButton>
                    <ConfirmButton
                        onClick={() => {
                            onConfirm();
                            $modal.current.close();
                        }}
                    >
                        Add
                    </ConfirmButton>
                </ConfirmAction>
            </AddProjectModalWrapper>
        </Modal>
    );
}

AddProjectModal.propTypes = {};

export default AddProjectModal;
