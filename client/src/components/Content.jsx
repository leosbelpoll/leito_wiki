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

const inlineCode = props => <strong>{props.value}</strong>
const code = props => <pre><code>{props.value}</code></pre>
const tableRow = props => <tr className="foo">{props.children}</tr>

export default class Content extends Component {
    render() {
        const { content } = this.props;

        return (
            <ContentStyled>
                {content ? (
                    <Fragment>
                        <h1>{content.title}</h1>
                        <br/>
                        <ReactMarkdown source={content.content} renderers={{code, inlineCode, tableRow}} />
                    </Fragment>
                ) : (
                    <h2>No content selected</h2>
                )}
            </ContentStyled>
        )
    }
}
