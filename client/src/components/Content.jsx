import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

const ContentStyled = styled.div`
    background: #33373A;
    width: 100%;
    overflow-y: auto;
    padding: 20px;
    color: white;
`;

export default class Content extends Component {
    render() {
        const { content } = this.props;

        return (
            <ContentStyled>
                {content ? (
                    <Fragment>
                        <h1>{content.title}</h1>
                        <p>{content.content}</p>
                    </Fragment>
                ) : (
                    <h2>No content selected</h2>
                )}
            </ContentStyled>
        )
    }
}
