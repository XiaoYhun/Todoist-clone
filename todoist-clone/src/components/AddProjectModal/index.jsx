import React, { useState, useRef, useEffect } from "react";
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
import ColorSelect from "./ColorSelect";
import { addProject, updateProject } from "slices/projectsSlice";

function AddProjectModal({ isOpen, onClose, project }) {
    const [name, setName] = useState(project ? project.name : "");
    const [color, setColor] = useState(project ? project.color : undefined);
    const dispatch = useDispatch();
    const $modal = useRef();

    const onConfirm = () => {
        if (project) {
            dispatch(updateProject({ ...project, name: name, color: color }));
        } else {
            dispatch(addProject({ name: name, color: color }));
        }
    };
    useEffect(() => {
        setName(project ? project.name : "");
        setColor(project ? project.color : undefined);
    }, [project]);

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
                        {project ? "Save" : "Add"}
                    </ConfirmButton>
                </ConfirmAction>
            </AddProjectModalWrapper>
        </Modal>
    );
}

AddProjectModal.propTypes = {};

export default AddProjectModal;
