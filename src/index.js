// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { ToolProvider } from './core/context/ToolContext';

// Assets
import './assets/css/global.css';
import './assets/css/scrollbar.css';

// Layouts
import { Core as AuthCore } from './Core';
import { SSORqx } from './SSORqx';

const pageTheme = createTheme({
    palette: {
        background: {
            default: '#EBF2F0'
        },
		primary: {
			main: '#0070EF',
			dark: '#913007',
			light: '#e9ebee',
			lighter: '#f8f9fa',
		},
		secondary: {
			main: '#669ede',
			dark: '#7aa3a1',
			light: '#ffffff',
		},
		info: {
			main: '#7aa3a1',
			dark: '#506e6c',
			light: '#b8d4d2',
		},
		error: {
			main: '#f44336',
			light: '#f6685e',
			dark: '#d32f2f'
		},
		warning: {
			main: '#ff9800',
			dark: '#b26a00',
			light: '#ffac33'
		},
		success: {
			main: '#4caf50',
			dark: '#388e3c',
			light: '#81c784'
		},
		btnYellow:{
			light: '#ffcd87',
			main: '#ffb347',
			color: '#f2f5fa'
		},
    },
    typography: {
		button: {
			textTransform: 'none'
		},
		fontFamily: [
		  '-apple-system',
		  '"Poppins"',
		].join(','),
	},
});

const location = window.location.pathname
const Core = location === '/sso/account/auth' ? SSORqx : AuthCore

ReactDOM.render(<ThemeProvider theme= { pageTheme }><CssBaseline /><ToolProvider><Core /></ToolProvider></ThemeProvider>, document.getElementById('root'));