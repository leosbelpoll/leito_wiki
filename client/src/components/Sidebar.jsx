import React, { Component } from 'react'
import styled from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';

const SidebarStyled = styled.div`
    background: #24282A;
    width: 350px;
    overflow-y: auto;
`;

const MenuItem = styled.a`
    padding: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover{
        background: #212526;
    }

    &:active, &:focus{
        background: #1F2224;
    }
`;

export default class Sidebar extends Component {
    render() {
        const { contents, onMenuItemClick, activeContent } = this.props;

        const firstParents = contents.filter(content => !content.parent);

        return (
            <SidebarStyled>
                {firstParents.map((content, index) => (
                    <MenuItem
                        href="#"
                        key={index}
                        onClick={() => onMenuItemClick(content)}>{content === activeContent ? <FaFolderOpen /> : <FaFolder />}&nbsp;&nbsp;{content.title}</MenuItem>
                ))}
            </SidebarStyled>
        )
    }
}
