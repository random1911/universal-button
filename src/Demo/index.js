import React  from 'react';
import './Demo.css';
import Button from '../Button';
import Code from '../Code';

class Demo extends React.Component {

  sampleLog = text => {
    const message = text || "Нажата кнопка";
    console.log(message)
  };

  render() {
    return (
      <div className="demo">
        <header className="demo-header">
          <h1 className="demo-caption">Универсальная кнопка</h1>
        </header>
        <div className="demo-content">
          <table className="demo-table">
            <colgroup>
              <col className="demo-table__first-col" />
              <col/>
              <col/>
            </colgroup>
            <thead className="demo-table__header">
              <tr>
                <th className="demo-table__th" >
                  Описание
                </th>
                <th className="demo-table__th" >
                  Результат
                </th>
                <th className="demo-table__th" >
                  Разметка
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="demo-table__th"  colSpan="3">
                  Базовые примеры
                </th>
              </tr>
              <tr>
                <td className="demo-table__td">
                  Базовый вариант с console.log
                </td>
                <td className="demo-table__td">
                  <Button
                    tip="Просто кнопка"
                    text="Нажми меня"
                    action={this.sampleLog}
                    arguments="Меня нажали"
                  />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button tip="Просто кнопка" text="Нажми меня" action={this.sampleLog} arguments="Меня нажали"`} />
                </td>
              </tr>
              <tr>
                <td className="demo-table__td">
                  Недоступная кнопка
                </td>
                <td className="demo-table__td">
                  <Button
                    text="Недоступно"
                    disabled
                    action={this.sampleLog}
                  />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button text="Недоступно" disabled action={this.sampleLog}`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td" rowSpan="2">Кнопки с иконками</td>
                <td className="demo-table__td">
                  <Button tip="Развернуть" icon="expand" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button tip="Развернуть" icon="expand"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">
                  <Button tip="Свернуь" icon="collapse" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button tip="Свернуь" icon="collapse"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">Ссылка с иконкой и пост-иконкой, которая будет проигнорирована</td>
                <td className="demo-table__td">
                  <Button type="link" url="#somePlace" tip="Collapse" icon="collapse" postIcon="expand" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button type="link" url="#somePlace" tip="Collapse" icon="collapse" postIcon="expand"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">Ссылка с двумя иконками</td>
                <td className="demo-table__td">
                  <Button type="link" url="#hi"  icon="collapse" text="Привет" postIcon="expand" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button type="link" url="#hi" icon="collapse" text="Привет" postIcon="expand"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">Иконка из псевдоэлементов, чтобы оправдать использование настоящей ноды</td>
                <td className="demo-table__td">
                  <Button icon="warning" text="Внимание!" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button icon="warning" text="Внимание!"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td" rowSpan="3">Модификаторы массивом и строкой</td>
                <td className="demo-table__td">
                  <Button text="['green','small']" modifier={['green','small']} />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button text="['green','small']" modifier={['green','small']}`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">
                  <Button text="'green'" modifier="green" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button text="'green'" modifier="green"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">
                  <Button text="'green, large'" modifier="green, large" />
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button text="'green, large'" modifier="green, large"`} />
                </td>
              </tr>

              <tr>
                <td className="demo-table__td">Пример с лейблом в симуляции drag&drop зоны</td>
                <td className="demo-table__td">
                  <div className="drop-area-simulator">
                    <input
                      type="file"
                      id="file"
                      className="visually-hidden"
                    />
                    <Button
                      type="label"
                      inputId="file"
                      text="Прикрепить файл"
                    />
                  </div>
                </td>
                <td className="demo-table__td">
                  <Code markup={`Button type="label" inputId="file" text="Прикрепить файл"`} />
                </td>
              </tr>


              <tr>
                <th className="demo-table__th"  colSpan="3">
                  Примеры в контексте диалогового окна
                </th>
              </tr>
              <tr>
                <th className="demo-table__th"  colSpan="3">
                  Примеры кейса "очень творческий дизайнер"
                </th>
              </tr>
            </tbody>
          </table>

          <p>
            TODO: пример с Label
          </p>
        </div>
      </div>
    );
  }
}

export default Demo;
