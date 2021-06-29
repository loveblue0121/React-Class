import React from 'react';
import PropTypes from 'prop-types';
function Child(props) {
  console.log(props);
  //解構賦值使用在物件or陣列
  const { text, myColor, count } = props;
  return (
    <>
      <div style={{ color: myColor }}>
        {text}
        {count}
      </div>
    </>
  );
}
//設定預設值
Child.defaultProps = {
  text: '預設屬性',
  myColor: 'red',
};
//限制
Child.propTypes = {
  text: PropTypes.string.isRequired,
  myColor: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
export default Child;
