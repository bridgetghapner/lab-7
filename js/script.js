function init(){
//add your javascrip between these two lines of code
const btn = document.getElementById('entrybutton');
function modifyText() {
  const results = document.getElementsByTagName('h2')[1];
   if (document.getElementById('entryinput').value == null || document.getElementById('entryinput').value == '') {
    results.firstChild.nodeValue = "Show results here";
  } else {
    results.firstChild.nodeValue = document.getElementById('entryinput').value;
  }
}

btn.addEventListener('click', () => {
  window.alert(
    document.getElementsByTagName('h2')[0].innerText + ': ' +
    document.getElementById('entryinput').value);
});
btn.addEventListener('click', modifyText, false);

  




 







window.addEventListener('load', init);