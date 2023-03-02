import React from "react";
import CardsPage from "./pages/CardsPage1/CardsPage.jsx";
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CardsPage />
        </ThemeProvider>
    )
}

export default App;