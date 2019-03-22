import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import Content from './components/Content';
import EditContent from './components/EditContent';
import './App.scss';

const Layout = styled.div`
    display: flex;
    overflow: hidden;
    height: 100vh;
    position: relative;
    width: 100%;
    backface-visibility: hidden;
    will-change: overflow;
`;

class App extends Component {
    state = {
        contents: [],
        activeContent: null,
        editing: false
    }

    componentDidMount() {
        this.getContents();
    }

    getContents = () => {
        fetch('/api/v1/contents')
            .then(res => res.json())
            .then(({contents}) => this.setState({contents}));
    }

    onMenuItemClick = (content) => {
        const { contents } = this.state;
        if (content.parent) {
            for (const c of contents) {
                if (c.id === content.parent) {
                    c.open = true;
                    break;
                }
                for (const child of c.children) {
                    if (child.id === content.parent) {
                        child.open = true;
                        break;
                    }
                }
            }
        }
        this.setState({
            activeContent: content,
            editing: false
        });
    }

    onEditClick = () => this.setState({editing: true});

    onEditComponentChange = (value) => this.setState((state) => ({
        activeContent: {...state.activeContent, content: value}
    }));

    render() {
        const { activeContent, contents, editing } = this.state;

        return (
            <Layout>
                <Sidebar contents={contents} activeContent={activeContent} onMenuItemClick={this.onMenuItemClick} onEditClick={this.onEditClick} />
                {editing && !!activeContent.content && <EditContent content={activeContent} onEditComponentChange={this.onEditComponentChange} />}
                <Content content={activeContent} contents={contents} onMenuItemClick={this.onMenuItemClick} />
            </Layout>
        );
    }
}

export default App;
