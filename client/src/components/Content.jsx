import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const ContentStyled = styled.div`
    background: #33373A;
    width: 100%;
    overflow-y: auto;
    padding: 20px;
    color: white;
`;

export default class Content extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { content } = this.props;

        return content !== nextProps.content && !!nextProps.content.content;
    }

    render() {
        const { content } = this.props;
        return (
            <ContentStyled>
                {content ? (
                    <Fragment>
                        <h1>{content.title}</h1>
                        <br/>
                        <ReactMarkdown source={content.content} />
                    </Fragment>
                ) : (
                    <h2>No content selected</h2>
                )}
            </ContentStyled>
        )
    }
}
