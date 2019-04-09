import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  input[type="text"] {
    border: none;
    width: 70%
    font-size: .9em;
    padding: .3em;
    &:focus {
        outline: none;
    }
  }
`;

export default function SearchBar() {
  return (
    <SearchContainer>
        <FontAwesomeIcon icon="search" size="sm"/>
        <input
            type="text"
            placeholder="Search Medium"
        />
    </SearchContainer>
  )
}
