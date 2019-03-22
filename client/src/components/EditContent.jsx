import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const EditContentStyled = styled.div`
    background: #33373A;
    width: 70%;
    overflow-y: auto;
    padding: 20px;
`;

const TextareaStyled = styled.textarea`
    width: 100%;
    height: 100vh;
    border: none;
    background: none;
    color: white;
    resize: none;
`;

export default class EditContent extends Component {
    render() {
        const { content, onEditComponentChange } = this.props;

        return (
            <EditContentStyled>
                <form>
                    <TextareaStyled onChange={(e) => onEditComponentChange(e.target.value)}>
                        {content.content.toString()}
                    </TextareaStyled>
                </form>
            </EditContentStyled>
        )
    }
}
