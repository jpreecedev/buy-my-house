import * as React from 'react';
import css from './Features.module.css';

const Features = () => (
    <>
        <h2>Features</h2>
        <ul className={css.wrapper}>
            <li className={css.hot}>Webpack 4</li>
            <li className={css.hot}>Babel 7</li>
            <li className={css.hot}>ESLint 5</li>
            <li className={css.hot}>Flow Type</li>
            <li className={css.react}>React 16.6</li>
            <li>React Router 4</li>
            <li>React Helmet</li>
            <li>Express Webserver + Server Side Prerendering</li>
            <li>CSS Modules</li>
            <li>HMR (buggy, see Readme)</li>
        </ul>
    </>
);

export default Features;
