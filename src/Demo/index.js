import React  from 'react';
import './Demo.css';
import Button from '../Button';

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
            <Button text="Press me" action={this.sampleLog} arguments="God damn" />
          </p>
          <p>
            <Button text="Disabled" disabled action={this.sampleLog} />
          </p>
          <p>
            <Button preIcon="expand" />
          </p>
          <p>
            <Button url="#hello" type="link" preIcon="collapse" postIcon="expand" />
          </p>
          <p>
            <Button  url="#hi" type="link" preIcon="collapse" text="Hello" postIcon="expand" />
          </p>
          <p>
            <Button preIcon="warning" text="Нет атрибута action" />
          </p>
        </div>
      </div>
    );
  }
}

export default Demo;
