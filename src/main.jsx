import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './component/theme-provider.jsx';
import Layout from './layouts/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout> 
      <App />
      </Layout>
    
    </ThemeProvider>
  </React.StrictMode>
);
