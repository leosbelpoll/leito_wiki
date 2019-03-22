import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import classNames from 'classnames';
import { FaCaretDown } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { FaPenSquare } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { ContextMenu, MenuItem as MenuContextItem, ContextMenuTrigger } from "react-contextmenu";

const SidebarStyled = styled.div`
    background: #24282A;
    width: 350px;
    overflow-y: auto;
`;

const FaCaretDownStyled = styled(FaCaretDown)`
    font-size: 1.2em;
`;

const FaCaretRightStyled = styled(FaCaretRight)`
    font-size: 1.2em;
`;

const FaCircleStyled = styled(FaCircle)`
    font-size: .25em;
    margin-left: 5px;
    margin-right: 5px;
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

    &.active, &:active, &:focus{
        background: #1F2224;
    }
`;

// FIXME: This way is veryyy wrong, but I was quickly, use same MenuItem with space recursive
const MenuSubItem1 = styled(MenuItem)`
    padding-left: 20px;
`;

const MenuSubItem2 = styled(MenuItem)`
    padding-left: 40px;
`;

export default class Sidebar extends Component {

    onClickMenu = (content) => {
        const { activeContent, onMenuItemClick } = this.props;
        if (!content.open || content === activeContent) {
            content.open = !content.open;
        }
        onMenuItemClick(content);
    }

    onRightClickMenu = (e, data) => {
        console.log(data.foo);
    }

    render() {
        const { contents, activeContent, onEditClick } = this.props;

        return (
            // FIXME: This way is veryyy wrong, but I was quickly, make recursive
            <SidebarStyled>
                <ContextMenuTrigger id="some_unique_identifier">
                    <ContextMenu id="some_unique_identifier">
                        <MenuContextItem data={{foo: 'bar'}} onClick={this.onRightClickMenu}>
                            <FaPlusSquare />&nbsp;&nbsp;Add page
                        </MenuContextItem>
                        <MenuContextItem onClick={onEditClick}>
                            <FaPenSquare />&nbsp;&nbsp;Edit content
                        </MenuContextItem>
                        {/* <MenuContextItem data={{foo: 'bar3'}} onClick={this.onRightClickMenu}>
                            <FaTrashAlt />&nbsp;&nbsp;Remove
                        </MenuContextItem> */}
                    </ContextMenu>
                    {contents.map((content, index) => (
                        <Fragment key={index}>
                            <MenuItem
                                href="#"
                                key={index}
                                className={classNames({
                                    'active': content === activeContent
                                })}
                                onClick={() => this.onClickMenu(content)}>
                                {content.children.length ? (
                                    <Fragment>
                                        {content.open ? <FaCaretDownStyled /> : <FaCaretRightStyled />}
                                    </Fragment>
                                    )
                                    : <FaCircleStyled />
                                }
                                    &nbsp;&nbsp;
                                {content.title}
                            </MenuItem>
                            {content.open && content.children.map((content, index) => (
                                <Fragment key={index}>
                                    <MenuSubItem1
                                        href="#"
                                        key={index}
                                        className={classNames({
                                            'active': content === activeContent
                                        })}
                                        onClick={() => this.onClickMenu(content)}>
                                            {content.children.length ? (
                                                <Fragment>
                                                    {content.open ? <FaCaretDownStyled /> : <FaCaretRightStyled />}
                                                </Fragment>
                                                )
                                                : <FaCircleStyled />
                                            }
                                            &nbsp;&nbsp;
                                        {content.title}
                                    </MenuSubItem1>
                                    {content.open && content.children.map((content, index) => (
                                        <MenuSubItem2
                                            href="#"
                                            key={index}
                                            className={classNames({
                                                'active': content === activeContent
                                            })}
                                            onClick={() => this.onClickMenu(content)}>
                                                {content.children.length ? (
                                                    <Fragment>
                                                        {content.open ? <FaCaretDownStyled /> : <FaCaretRightStyled />}
                                                    </Fragment>
                                                    )
                                                    : <FaCircleStyled />
                                                }
                                                &nbsp;&nbsp;
                                            {content.title}
                                        </MenuSubItem2>
                                    ))}
                                </Fragment>
                            ))}
                        </Fragment>
                    ))}
                </ContextMenuTrigger>
            </SidebarStyled>
        )
    }
}
