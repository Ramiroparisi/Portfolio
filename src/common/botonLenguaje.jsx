import React from "react";
import '../App.css';
import { useLanguage } from './lenguajes.jsx';
import { useTheme } from './themeContext.jsx';

function LanguageToggleButton() {
    const { language, toggleLanguage } = useLanguage();
    const { theme } = useTheme();

    return (
        <button
            style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: theme === 'light' ? "#222" : "#fff",
                color: theme === 'light' ? "#fff" : "#222",
                border: "1px solid #ccc",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s",
            }}
            onClick={toggleLanguage}
        >
            {language === "en" ? "English" : "Español"}
        </button>
    );
}

export default LanguageToggleButton;
