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

const LinkStyled = styled.a`
    padding: 20px;
    color: white;
`

export default class Content extends Component {
    render() {
        const { content, contents, onMenuItemClick } = this.props;
        const children = contents.filter(c => content && c.parent === content.id);

        return (
            <ContentStyled>
                {content ? (
                    <Fragment>
                        <h1>{content.title}</h1>
                        <br/>
                        {children.map((content, index) => (
                            <p key={index}>
                                <LinkStyled
                                    href="#"
                                    onClick={() => onMenuItemClick(content)}>{content.title}</LinkStyled>
                            </p>
                        ))}
                        <ReactMarkdown source={content.content} />
                    </Fragment>
                ) : (
                    <h2>No content selected</h2>
                )}
            </ContentStyled>
        )
    }
}
