import React from "react";
import styled from "styled-components";

const Input = styled.input`
    border-radius: 3px;
    border: none;
`;

export default function SearchInput() {
    return <Input placeholder="Search..."></Input>;
}
