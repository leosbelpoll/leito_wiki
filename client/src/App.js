import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        contents: []
    }

    componentDidMount() {
        this.getContents();
    }

    getContents = () => {
        fetch('/api/v1/contents')
            .then(res => res.json())
            .then(({contents}) => this.setState({contents}));
    }

    render() {
        const { contents } = this.state;

        return (
            <div>
                <h1>Hello Leito Wiki</h1>
                {contents.map((content, index) => (
                    <h2 key={index}>{content.title}</h2>
                ))}
            </div>
        );
    }
}

export default App;
