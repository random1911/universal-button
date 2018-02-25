import React  from 'react';
import './Demo.css';
import Button from '../Button';
import Code from '../Code';

class Demo extends React.Component {

  sampleLog = text => {
    const message = text || "Button clicked";
    console.log(message)
  };

  render() {
    return (
      <div className="demo">
        <header className="demo-header">
          <h1 className="demo-caption">Универсальная кнопка</h1>
        </header>
        <div className="demo-content">
          <p>
            <Button tip="Просто кнопка" text="Press me" action={this.sampleLog} arguments="God damn" />
          </p>
          <Code markup={`Button tip="Просто кнопка" text="Press me" action={this.sampleLog} arguments="God damn"`} />
          <p>
            <Button text="Disabled" disabled action={this.sampleLog} />
          </p>
          <p>
            <Button tip="Развернуть" preIcon="expand" />
          </p>
          <p>
            <Button tip="Свернуь" preIcon="collapse" />
          </p>
          <p>
            <Button tip="Collapse" url="#bye" type="link" preIcon="collapse" postIcon="expand" />
          </p>
          <p>
            <Button  url="#hi" type="link" preIcon="collapse" text="Hello" postIcon="expand" />
          </p>
          <p>
            <Button preIcon="warning" text="Нет атрибута action" />
          </p>
          <p>
            <Button text="Модификаторы ['green', 'small']" modifier={['green', 'small']} />
          </p>
          <p>
            <Button text="Модификатор 'green'" modifier="green" />
          </p>
          <p>
            <Button text="Модификаторы 'green, large'" modifier="green, large" />
          </p>
        </div>
      </div>
    );
  }
}

export default Demo;
