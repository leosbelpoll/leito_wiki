import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const EditContentStyled = styled.div`
    width: 50%;
    overflow-y: auto;
    padding: 20px;
`;

const TextareaStyled = styled.textarea`
    display: flex;
    overflow: hidden;
    height: 100vh;
    position: relative;
    width: 100%;
    backface-visibility: hidden;
    will-change: overflow;
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
