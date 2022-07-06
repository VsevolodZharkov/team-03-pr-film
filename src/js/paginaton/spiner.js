import { Spinner } from 'spin.js';
// ---------------------------------------------------------- //
const opt = {
  lines: 18, // The number of lines to draw
  length: 5, // The length of each line
  width: 2, // The line thickness
  radius: 8, // The radius of the inner circle
  scale: 2, // Scales overall size of the spinner
  corners: 0.6, // Corner roundness (0..1)
  speed: 0.9, // Rounds per second
  rotate: 22, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: -1, // 1: clockwise, -1: counterclockwise
  color: '#ff6b08', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spiner = new Spinner(opt);

export { spiner };

// lines=18&length=5&width=2&radius=8&scale=1.25&corners=0.6&
// speed = 0.9 & rotate=22 & animation=spinner - line - fade -default& direction=-1
// & color=% 23a23434 & fadeColor=transparent & top=50 & left=50 & shadow=0 % 200 % 201px % 20transparent & zIndex=2000000000 & className=spinner & position=absolute
