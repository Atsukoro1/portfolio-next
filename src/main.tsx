import { render } from 'preact'
import { App } from './app.tsx'

import 'virtual:windi.css'
import './main.css'

render(
    <App />, 
    document.getElementById('app')!
);
