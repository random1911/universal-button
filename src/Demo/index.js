import React  from 'react';
import './Demo.css';
import Button from '../Button';
import Code from '../Code';

const Demo = () => {

  const sampleLog = () => {
    console.log('the button was clicked')
  };
  return (
    <div className="demo">
      <header className="demo-header">
        <h1 className="demo-caption">Universal button</h1>
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
              Description
            </th>
            <th className="demo-table__th" >
              Result
            </th>
            <th className="demo-table__th" >
              Markup
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th className="demo-table__th"  colSpan="3">
              Base examples
            </th>
          </tr>
          <tr>
            <td className="demo-table__td">
              This button will make console.log()
            </td>
            <td className="demo-table__td">
              <Button
                title="Just button"
                text="Click me"
                onClick={sampleLog}
              />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button title="Just button" text="Click me" onClick={sampleLog}`} />
            </td>
          </tr>
          <tr>
            <td className="demo-table__td">
              Unavailable button
            </td>
            <td className="demo-table__td">
              <Button
                text="Unavailable"
                disabled
                onClick={sampleLog}
              />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button text="Unavailable" disabled onClick={sampleLog}`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td" rowSpan="2">Buttons with icons</td>
            <td className="demo-table__td">
              <Button title="Expand" icon="expand" />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button title="Expand" icon="expand"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">
              <Button title="Collapse" icon="collapse" />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button title="Collapse" icon="collapse"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">Link with incorrect icons usage (an additional icon will be avoided)</td>
            <td className="demo-table__td">
              <Button type="link" url="#somePlace" title="Collapse" icon="collapse" postIcon="expand" />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button type="link" url="#somePlace" title="Collapse" icon="collapse" postIcon="expand"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">Link with two icons</td>
            <td className="demo-table__td">
              <Button type="link" url="#hi"  icon="collapse" text="Howdy" postIcon="expand" />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button type="link" url="#hi" icon="collapse" text="Howdy" postIcon="expand"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">The icon is drawn by pseudo-elements, what makes sense to make icons real element</td>
            <td className="demo-table__td">
              <Button icon="warning" text="Warning!" />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button icon="warning" text="Warning!"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td" rowSpan="3">BEM-modifiers via strings or array</td>
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
            <td className="demo-table__td">Label usage example in a simulation of drag&drop zone</td>
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
                  text="Attach file"
                />
              </div>
            </td>
            <td className="demo-table__td">
              <Code markup={`Button type="label" inputId="file" text="Attach file"`} />
            </td>
          </tr>

          <tr>
            <th className="demo-table__th"  colSpan="3">
              Примеры в контексте диалогового окна
            </th>
          </tr>

          <tr>
            <td className="demo-table__td">
              Кнопка с крестом для закрытия диалогового окна
            </td>
            <td className="demo-table__td" rowSpan="3">

              <div className="dialog-simulator">
                <header className="dialog-simulator-header">
                  <div className="dialog-simulator-header__caption">
                    Вопрос
                  </div>
                  <Button baseClass="dialog-close" title="Закрыть диалог" />
                </header>
                <div className="dialog-simulator-body">
                  Применить изменения?
                </div>
                <div className="dialog-simulator-buttons">
                  <Button baseClass="dialog-button" modifier="ok" text="Применить" />
                  <Button baseClass="dialog-button" text="Отмена" />
                </div>
              </div>

            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="dialog-close" title="Закрыть диалог"`} />
            </td>
          </tr>
          <tr>
            <td className="demo-table__td">
              Главная кнопка в подвале диалога
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="dialog-button" modifier="ok" text="Применить"`} />
            </td>
          </tr>
          <tr>
            <td className="demo-table__td">
              Обычная кнока в подвале диалога
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="dialog-button" text="Отмена"`} />
            </td>
          </tr>

          <tr>
            <th className="demo-table__th"  colSpan="3">
              Примеры кейса "очень творческий дизайнер"
            </th>
          </tr>

          <tr>
            <td className="demo-table__td">
              Тут текст должен быть быть не по центру, а немного ниже. Потому что на этой кнопке возможен текст "Добавить акцию" или "Заменить акцию", а не что-нибудь с буквами "р" и "у".
              В W3C уже направлена петиция с требованием введения нового свойства align-items: nemnogo-nizhe.
            </td>
            <td className="demo-table__td ccmp-bg">
              <Button
                baseClass="products-button"
                text="Заменить акцию"
                icon="change"
              />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="products-button" text="Заменить акцию" icon="change"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">
              А в этой - так и быть, можно по центру
            </td>
            <td className="demo-table__td ccmp-bg">
              <Button
                baseClass="service-restrict-button"
                text="Запретить по фроду"
                icon="disable"
              />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="service-restrict-button" text="Запретить по фроду" icon="disable"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">
              А здесь текст все-таки по центру, поэтому шаблон из первой кнопки не очень подходит
            </td>
            <td className="demo-table__td ccmp-emphasis-bg">
              <Button
                baseClass="service-share-button"
                text="Отправить SMS"
              />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="service-share-button" text="Отправить SMS"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">
              Можно было бы использовать предыдущий вариант с модификатором, а можно было бы просто нарисовать кнопки одинаково. Да, все пять встречаются в одном разделе (но нигде больше).
            </td>
            <td className="demo-table__td ccmp-emphasis-bg">
              <Button
                baseClass="service-action-button"
                text="Применить"
              />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="service-action-button" text="Применить"`} />
            </td>
          </tr>

          <tr>
            <td className="demo-table__td">
              Рисовать foсus? hover? Зачем, когда можно рисовать новые варианты кнопок?
            </td>
            <td className="demo-table__td ccmp-warning-bg">
              <Button baseClass="change-tp-cancel" text="Отказаться от смены ТП" />
            </td>
            <td className="demo-table__td">
              <Code markup={`Button baseClass="change-tp-cancel" text="Отказаться от смены ТП"`} />
            </td>
          </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Demo;
