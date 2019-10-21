// let's go!
import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import './css/style.css'
import Router from "./components/Router";

render(<Router/>, document.querySelector("#main"))