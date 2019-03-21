import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

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
        activeContent: null
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
        this.setState({activeContent: content});
    }

    render() {
        const { activeContent, contents } = this.state;

        return (
            <Layout>
                <Sidebar contents={contents} onMenuItemClick={this.onMenuItemClick} />
                <Content content={activeContent}/>
            </Layout>
        );
    }
}

export default App;
