import React from "react";
import "./Demo.css";
import Button from "../Button";
import Code from "../Code";

const Demo = () => {
  const sampleLog = () => {
    console.log("the button was clicked");
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
            <col />
            <col />
          </colgroup>
          <thead className="demo-table__header">
            <tr>
              <th className="demo-table__th">Description</th>
              <th className="demo-table__th">Result</th>
              <th className="demo-table__th">Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="demo-table__th" colSpan="3">
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
                <Code
                  markup={`Button title="Just button" text="Click me" onClick={sampleLog}`}
                />
              </td>
            </tr>
            <tr>
              <td className="demo-table__td">Unavailable button</td>
              <td className="demo-table__td">
                <Button text="Unavailable" disabled onClick={sampleLog} />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button text="Unavailable" disabled onClick={sampleLog}`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td" rowSpan="2">
                Buttons with icons
              </td>
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
              <td className="demo-table__td">
                Link with incorrect icons usage (an additional icon will be
                avoided)
              </td>
              <td className="demo-table__td">
                <Button
                  type="link"
                  url="#somePlace"
                  title="Collapse"
                  icon="collapse"
                  postIcon="expand"
                />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button type="link" url="#somePlace" title="Collapse" icon="collapse" postIcon="expand"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">Link with two icons</td>
              <td className="demo-table__td">
                <Button
                  type="link"
                  url="#hi"
                  icon="collapse"
                  text="Howdy"
                  postIcon="expand"
                />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button type="link" url="#hi" icon="collapse" text="Howdy" postIcon="expand"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                The icon is drawn by pseudo-elements, what makes sense to make
                icons real element
              </td>
              <td className="demo-table__td">
                <Button icon="warning" text="Warning!" />
              </td>
              <td className="demo-table__td">
                <Code markup={`Button icon="warning" text="Warning!"`} />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td" rowSpan="3">
                BEM-modifiers via strings or array
              </td>
              <td className="demo-table__td">
                <Button
                  text="['green','small']"
                  modifier={["green", "small"]}
                />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button text="['green','small']" modifier={['green','small']}`}
                />
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
                <Code
                  markup={`Button text="'green, large'" modifier="green, large"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                Label usage example in a simulation of drag&drop zone
              </td>
              <td className="demo-table__td">
                <div className="drop-area-simulator">
                  <input type="file" id="file" className="visually-hidden" />
                  <Button type="label" inputId="file" text="Attach file" />
                </div>
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button type="label" inputId="file" text="Attach file"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                Button type submit (beware of reload!)
              </td>
              <td className="demo-table__td">
                <form>
                  <Button type="submit" text="Submit!" />
                </form>
              </td>
              <td className="demo-table__td">
                <Code markup={`Button type="submit" text="Submit!"`} />
              </td>
            </tr>

            <tr>
              <th className="demo-table__th" colSpan="3">
                Examples in modal window context
              </th>
            </tr>

            <tr>
              <td className="demo-table__td">Cross button</td>
              <td className="demo-table__td" rowSpan="3">
                <div className="dialog-simulator">
                  <header className="dialog-simulator-header">
                    <div className="dialog-simulator-header__caption">
                      Some question
                    </div>
                    <Button baseClass="dialog-close" title="Close dialog" />
                  </header>
                  <div className="dialog-simulator-body">Apply changes?</div>
                  <div className="dialog-simulator-buttons">
                    <Button
                      baseClass="dialog-button"
                      modifier="ok"
                      text="Apply"
                    />
                    <Button baseClass="dialog-button" text="Cancel" />
                  </div>
                </div>
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="dialog-close" title="Close dialog"`}
                />
              </td>
            </tr>
            <tr>
              <td className="demo-table__td">Main button in footer</td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="dialog-button" modifier="ok" text="Apply"`}
                />
              </td>
            </tr>
            <tr>
              <td className="demo-table__td">Basic button in footer</td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="dialog-button" text="Cancel"`}
                />
              </td>
            </tr>

            <tr>
              <th className="demo-table__th" colSpan="3">
                What are that "extremely creative designer" means<br />
                All examples from one page, with original texts
              </th>
            </tr>

            <tr>
              <td className="demo-table__td">
                In this case, text must be a bit lower relative to center. The
                reason is possible text ("Добавить акцию" / "Заменить акцию")
                have no letters with fragments below baseline like p, y, q. So I
                also made a proposal to W3C to made new CSS property{" "}
                <code>align-items: a-bit-lower</code>
              </td>
              <td className="demo-table__td ccmp-bg">
                <Button
                  baseClass="products-button"
                  text="Заменить акцию"
                  icon="change"
                />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="products-button" text="Заменить акцию" icon="change"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                This button is a bit different and text should have center align
              </td>
              <td className="demo-table__td ccmp-bg">
                <Button
                  baseClass="service-restrict-button"
                  text="Запретить по фроду"
                  icon="disable"
                />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="service-restrict-button" text="Запретить по фроду" icon="disable"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                Kinda same to the first example, but with center vertical
                alignment
              </td>
              <td className="demo-table__td ccmp-emphasis-bg">
                <Button baseClass="service-share-button" text="Отправить SMS" />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="service-share-button" text="Отправить SMS"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                Maybe we can use previous example with modifier... But maybe we
                can just don't draw additional buttons and existing ones
              </td>
              <td className="demo-table__td ccmp-emphasis-bg">
                <Button baseClass="service-action-button" text="Применить" />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="service-action-button" text="Применить"`}
                />
              </td>
            </tr>

            <tr>
              <td className="demo-table__td">
                Why to spend life to draw hover and focus state if you can just
                draw new stateless buttons
              </td>
              <td className="demo-table__td ccmp-warning-bg">
                <Button
                  baseClass="change-tp-cancel"
                  text="Отказаться от смены ТП"
                />
              </td>
              <td className="demo-table__td">
                <Code
                  markup={`Button baseClass="change-tp-cancel" text="Отказаться от смены ТП"`}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Demo;
