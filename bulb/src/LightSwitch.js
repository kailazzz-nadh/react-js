    import React from 'react';
    function LightSwitch( props ) {
  let buttonText;

  if (props.isOn) {
    buttonText = "Turn OFF";
  } else {
    buttonText = "Turn ON";
  }

  return (
    <button onClick={props.onToggle}>
      {buttonText}
    </button>
  );
}
export default LightSwitch;