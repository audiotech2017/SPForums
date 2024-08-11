import _ from 'lodash';
import './style.css';  // load css

function component() {
    var element = document.createElement('div');

    // lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());