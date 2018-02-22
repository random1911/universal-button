import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

/*
* Атрибуты для props:
*
* type: string: 'button' ||'link' || 'label'
* Тип кнопки, определяет ёё тэг. По умолчанию button
*
* disabled: flag
* Атрибут disabled для button
*
* action: function
* Функция, которая будет вызвана на onClick на button
*
* arguments: any
* Аргумент, который будет передан в action
*
* url: string
* Значение href для ссылки
*
* baseClass: string
* Имя css класса, который получит кнопка, как БЭМ блок, и с которого будут начинаться классы её элементов
* По умолчанию button
*
* text: string
* Текст на кнопке
*
* preIcon: string
* Модификатор для иконки, которая будет до текста, или единственным элементом внутри кнопки
*
* postIcon: string
* Модификатор для иконки, которая будет после текста. Будет проигнорировано, если текст отсутствует.
*
* */

const Button = props => {
  /*
    * Кнопка может играть несколько ролей.
    * Во-первых, она может быть просто кнопкой (button), на которую будет повешен onClick
    * Во-вторых, она может быть ссылкой, и тогда на ней нужен url для перехода.
    * Если проекте используется react router, вместо тега a должен быть Link
    * В-третьих, если нужно повесить эту кнопку куда-нибудь вроде области для дропа файлов,
    * кнопка может быть лейблом (label), с ассоциируемым с ним ID инпута, тоесть htmlFor.
    *
    * В зависимости от типа, будет определена оболочка, в которую будет завернута общая внутренняя часть.
    * */
  let template;

  // если действие по кнопке не задано, выполняем пустую функцию, что бы не вызывать ошибок
  const action = props.action || function () {};

  // определяем имя CSS класса, или используем значение по умолчанию
  const baseClass = props.baseClass || 'button';

  const renderIcon = (name) => {
    const iconClass = `${baseClass}__icon`;
    return (
      <span className={`${iconClass} ${iconClass}_${name}`} />
    )
  };

  // создаем шаблон содержимого
  const inner = (
    <span className={`${baseClass}__inner`}>
        {/* если есть иконка вначале, выводим её */}
      { props.preIcon && (
        renderIcon(props.preIcon)
      ) }
      {/* если есть текст, выводим его */}
      {
        props.text && (
          <span className={`${baseClass}__text`}>{props.text}</span>
        )
      }
      {/*
        иконку в конце показываем только если есть текст, если нужна кнопка из одной иконки,
        нужно использовать preIcon. Кнопка из двух иконок без текста - это было бы странно
        */}
      {
        props.text && props.postIcon && (
          renderIcon(props.postIcon)
        )
      }
      </span>
  );

  // выбираем обертку в зависимости от типа
  switch (props.type) {
    case 'link':
      template = (
        <a className={baseClass}
           href={props.url}>
          {inner}
        </a>
      );
      break;
    case 'label':
      template = (
        <label className={baseClass}
               htmlFor={props.inputId}>
          {inner}
        </label>
      );
      break;
    default: {
      template = (
        <button
          className={baseClass}
          disabled={props.disabled}
          onClick={() => action(props.arguments)}
        >
          {inner}
        </button>
      )
    }
  }

  return template;
};


Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func,
  arguments: PropTypes.any,
  url: PropTypes.string,
  inputId: PropTypes.string,
  baseClass: PropTypes.string,
  text: PropTypes.string,
  preIcon: PropTypes.string,
  postIcon: PropTypes.string
};

export default Button;