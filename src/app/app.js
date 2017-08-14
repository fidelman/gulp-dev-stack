// Static components
import init from './init';
import factory from './factory';

import cookieLaw from './components/cookie-law';
import suffix from './components/suffix';

// React Components
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';

import Timer from './components/Timer';
import PlusOne from './components/plus-one/PlusOne';

const app = (config) => {
    init(cookieLaw, document.getElementById('cookie-law'));
    init(suffix, document.querySelector('.js-suffix'));

    const store = configureStore(config);
    render(Timer, document.getElementById('timer'), { from: 100 });
    renderFactory(PlusOne, document.querySelectorAll('.plus-one'), {}, store);
};

app(window.config);
