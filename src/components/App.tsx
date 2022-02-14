import { VFC, useState } from 'react';
import './App.css';
import { InputLogin } from './InputLogin';
import { ReposView } from './ReposView';

const App: VFC = () => {
    const [enteredLogin, setEnteredLogin] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <InputLogin
                    onEnter={(value: string) => setEnteredLogin(value)}
                />
                <ReposView login={enteredLogin} />
            </header>
        </div>
    );
};

export default App;
