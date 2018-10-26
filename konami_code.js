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
function init() {
  document.body.addEventListener('keydown', function (e) {
  function onKeyDown(e){
  var key = e.key;
  if (key === codes[index]) {
    index ++;
  }
  if (index === codes.length - 1) {
    alert('Good Job, bucko.');
  }
  else {
    index = 0;
  
    }
  }
});
}