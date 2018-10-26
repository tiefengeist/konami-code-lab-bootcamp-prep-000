const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var index = 0;

function init() {
  document.body.addEventListener('keydown', function (e) {
    
  function onKeyDown(e) {
  var key = e.key;
  if (key === codes[index]) {
    index ++;
  
  if (index === codes.length - 1) {
    index = 0;
    alert('Good Job, bucko.');
   }
  } else {
    index = 0;
      }
    });
  }
}