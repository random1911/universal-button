import React from 'react';
import PropTypes from 'prop-types';
import "./Code.css";

const Code = ({markup}) => {
  const template = /\s(?=([^"]*"[^"]*")*[^"]*$)/g, divider = '***';
  const dividedMarkup = markup.replace(template, divider);
  const [tag, ...attrs] = dividedMarkup.split(divider);

  const renderAttrLine = attr => {
    const [name, value] = attr.split('=');
    return (
      <span key={name}
            className="code__attr">
        <span className="code__attr-name">{name}</span>
        { value && (<span className="code__attr-value">={value}</span>) }
      </span>
    )
  };

  return (
    <code className="code">
      <span className="code__tag">&lt;{tag}</span>
      {attrs.map(renderAttrLine)}
      <span className="code__tag">/&gt;</span>
    </code>
  )

};

Code.propTypes = {
  markup: PropTypes.string.isRequired
};

export default Code;
