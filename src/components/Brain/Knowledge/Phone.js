export const Phone = (props) => {

  function checkNumber(number) {
    return true;
  }

  if (checkNumber(props.request)) {
    window.location.href='tel:' + props.request
  }

  return {
    answer: '',
    tone: '',
    speak: false
  }
};