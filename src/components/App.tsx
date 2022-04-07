import { VFC, useState } from 'react';
import './App.css';
import { InputLogin } from './InputLogin';
import { ReposView } from './ReposView';

const App: VFC = () => {
    const [enteredLogin, setEnteredLogin] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <InputLogin
                    onEnter={async (value: string) => {
                        setIsLoaded(false);
                        await setEnteredLogin(value);
                        setIsLoaded(true);
                    }}
                />
                {isLoaded && <ReposView login={enteredLogin} />}
            </header>
        </div>
    );
};

export default App;
