import React from 'react';
import ReactDOM from 'react-dom';
// import Widget from '../components/widget';
import App from './App';
import '../vendor/cleanslate.css';

class EmbeddableWidget {
  constructor(companyId, websiteId) {
      this.companyId = companyId;
      this.websiteId = websiteId;
  }
  static el;

  static mount({ parentElement = null, ...props } = {}) {
    const component = <App {...props} />;

    if (EmbeddableWidget.el) {
      throw new Error('EmbeddableWidget is already mounted, unmount first');
    }
    const el = document.createElement('div');
    el.setAttribute('class', 'cleanslate');

    if (parentElement) {
      document.querySelector(parentElement).appendChild(el);
    } else {
      document.body.appendChild(el);
    }
    ReactDOM.render(
      component,
      el
    );
    EmbeddableWidget.el = el;
  }
}

export default EmbeddableWidget;
