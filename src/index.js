import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';
import './index.css';

const rootElement = document.querySelector('#root');

function GoodsList(props) {
  return (
    <ul>
      <li>{props.data[0].name}</li>
      <li>{props.data[1].name}</li>
      <li>{props.data[2].name}</li>
    </ul>
  );
}

function App() {
  return (
    <section className={'main'}>
      <h1>Список товаров</h1>
      <GoodsList data={data}/>
    </section>
  );
}

ReactDOM.render(<App />, rootElement);
