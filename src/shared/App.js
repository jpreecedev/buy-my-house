import * as React from 'react';
import Helmet from 'react-helmet';
import Features from './components/Features';
import css from './App.module.css';

class App extends React.PureComponent {
    render() {
        return (
            <div className={css.wrapper}>
                <Helmet defaultTitle="React SSR Starter" titleTemplate="%s – React SSR Starter" />

                <h1>React + Express – SSR</h1>

                <Features />

                <h2>Hello</h2>
                <p>
                    <button onClick={() => alert('clicked!')}>Balls me</button>
                </p>
            </div>
        );
    }
}

export default App;
