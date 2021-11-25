import React from 'react';
import './styles.css';
import MyComponent from './MyComponent';
import ReactDOM  from'react-dom';

export let AppConfig = {
    init: () => {
        ReactDOM.render(<MyComponent />, document.getElementById("root"));
    }
}

