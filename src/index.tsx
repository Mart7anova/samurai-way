import React from 'react';
import './index.css';
import {rerenderTree} from './render';
import {state} from './redux/state';

rerenderTree(state)

