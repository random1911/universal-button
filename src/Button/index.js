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
* modifier: string || array
* Модификаторы для корневого БЭМ блока кнопки
*
* text: string
* Текст на кнопке
*
* tip: string
* Текст для title
*
* icon: string
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

  // вернет строку с модификаторами
  function getModifiers(modifier) {
    if(modifier){
      let modifiers;
      if(typeof modifier === 'string'){
        modifiers = modifier.split(',')
      }else if(Array.isArray(modifier)){
        modifiers = [...modifier]
      }
      let result = [];
      for(let i=0; i < modifiers.length; i++){
        result.push(baseClass + '_' + modifiers[i].trim());
      }
      return ` ${result.join(' ')}`;
    }else{
      return '';
    }
  }

  // определяем финальный набор классов на корневом элементе
  const combinedClass = `${baseClass}${getModifiers(props.modifier)}`;

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
      { props.icon && (
        renderIcon(props.icon)
      ) }
      {/* если есть текст, выводим его */}
      { props.text && (
        <span className={`${baseClass}__text`}>{props.text}</span>
      )}
      {/*
        иконку в конце показываем только если есть текст, если нужна кнопка из одной иконки,
        нужно использовать icon. Кнопка из двух иконок без текста - это было бы странно
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
        <a className={combinedClass}
           title={props.tip}
           href={props.url}>
          {inner}
        </a>
      );
      break;
    case 'label':
      template = (
        <label className={combinedClass}
               title={props.tip}
               htmlFor={props.inputId}>
          {inner}
        </label>
      );
      break;
    default: {
      template = (
        <button
          className={combinedClass}
          title={props.tip}
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
  modifier: PropTypes.any,
  text: PropTypes.string,
  tip: PropTypes.string,
  icon: PropTypes.string,
  postIcon: PropTypes.string
};

export default Button;