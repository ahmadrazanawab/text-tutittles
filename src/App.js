//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (type, massege) => {
        setAlert({
            msg: massege,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'gray';
            showAlert("success", "Dark mode has been enabled");
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("success", "Light mode has been enabled");
        }
    }
    return (
        <>
            <Navbar title="TextUtils" showAlert={showAlert} aboutText="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-4">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </div>
        </>
    );
}

export default App;
