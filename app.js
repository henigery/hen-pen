// Global var
const code = document.getElementById("code").contentWindow.document;
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
//For the output box
function compile() {
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
          html.value +
          "\n\n<!- This is the CSS portion ->\n" +
          "<style>\n" +
          css.value +
          "\n</style>" +
          "\n\n<!- This is the JS portion ->\n" +
          "<script>\n" +
          js.value +
          "\n</script>"
      );
      code.close();
      console.log(code.body.innerHTML);
    };
  }

  
 //For the download button
function download() {
  let filename = document.getElementById("input-fileName").value;
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/html;charset=utf-8,' + code.body.innerHTML);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
} 
compile();
  
//For implementing tab's
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            let s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s + "\t".length;
        }
    }
}

//dark mode
  function change()
  {
    var label = document.getElementById('label');
    var mlabel = document.getElementById('mlabel');
    var mode = document.getElementById('mode');
    var box = document.getElementById('box');
    if (box.checked) 
    {
      document.body.style.background="rgb(220, 220, 228)";
        label.style.color="#191F24"
        mode.style.color="#191F24"
        mlabel.innerHTML="Light";
        box.title="Please go back to dark mode!"
        
    } else {
      document.body.style.background="#191F24";
      label.style.color="rgb(239, 239, 240)"
      mode.style.color="rgb(239, 239, 240)"
      mlabel.innerHTML="Mode";
      box.title="Light mode is for crazy people!"
    }
  }

  const btnhtml = document.getElementById("btnhtml");
  const btncss = document.getElementById("btncss");
  const btnjs = document.getElementById("btnjs");
  const terminal = document.getElementById("terminals");
  // Minimize
  
  btnhtml.onclick = function(){
    if(html.style.display != "none"){
      html.style.display = "none";
      btnhtml.style.backgroundColor = "rgb(239, 239, 240)";
        //resizing
      if(screen.width < 650){
        if(html.style.display == "none" && css.style.display == "none"){
          terminal.style.gridTemplate = '"js" 40vh/ 100% ';
        }else if(html.style.display == "none" && js.style.display == "none"){
          terminal.style.gridTemplate = '"css" 40vh/ 100% ';
        }else{
          terminal.style.gridTemplate = '"css" 40vh "js" 40vh/ 100%';
        }
      }else{
        if(html.style.display == "none" && css.style.display == "none"){
          terminal.style.gridTemplate = '"js" 40vh/ 100% ';
        }else if(html.style.display == "none" && js.style.display == "none"){
          terminal.style.gridTemplate = '"css" 40vh/ 100% ';
        }else{
          terminal.style.gridTemplate = '"css js" 40vh/ 50% 50%';
        }
      }
      }else{
      html.style.display = 'block';
      btnhtml.style.backgroundColor = "rgb(239, 239, 240)";
        if(screen.width < 650){
          if(html.style.display != "none" && css.style.display != "none" && html.style.display != "none"){
            terminal.style.gridTemplate = '"html"30vh "css"30vh "js" 30vh/ 100% ';
          }else if(html.style.display != "none" && css.style.display != "none" && js.style.display == "none") {
            terminal.style.gridTemplate = '"html" 40vh "css" 40vh/ 100%';
          }else if(html.style.display != "none" && css.style.display == "none" && js.style.display != "none") {
            terminal.style.gridTemplate = '"html" 40vh "js" 40vh/ 100%';
          }else if(html.style.display != "none" && css.style.display == "none" && js.style.display == "none") {
            terminal.style.gridTemplate = '"html" 40vh/ 100%';
          }
        }else{
          if(html.style.display != "none" && css.style.display != "none" && html.style.display != "none"){
            terminal.style.gridTemplate = '"html css js" 30vh/ 32% 32% 32% ';
          }else if(html.style.display != "none" && css.style.display != "none" && js.style.display == "none") {
            terminal.style.gridTemplate = '"html css" 40vh/ 50% 50%';
          }else if(html.style.display != "none" && css.style.display == "none" && js.style.display != "none") {
            terminal.style.gridTemplate = '"html js" 40vh/ 50% 50%';
          }else if(html.style.display != "none" && css.style.display == "none" && js.style.display == "none") {
            terminal.style.gridTemplate = '"html" 40vh/ 100%';
          }
        }
    }
  }
  btncss.onclick = function(){
    if(css.style.display != "none"){
      css.style.display = "none";
      btncss.style.backgroundColor = "lightgray";
        //resizing
      if(screen.width < 650){
        if(html.style.display == "none" && css.style.display == "none"){
          terminal.style.gridTemplate = '"js" 40vh/ 100% ';
        }else if(css.style.display == "none" && js.style.display == "none"){
          terminal.style.gridTemplate = '"html" 40vh/ 100% ';
        }else{
          terminal.style.gridTemplate = '"html" 40vh "js" 40vh/ 100%';
        }
      }else{
        if(html.style.display == "none" && css.style.display == "none"){
          terminal.style.gridTemplate = '"js" 40vh/ 100% ';
        }else if(css.style.display == "none" && js.style.display == "none"){
          terminal.style.gridTemplate = '"html" 40vh/ 100% ';
        }else{
          terminal.style.gridTemplate = '"html js" 40vh/ 50% 50%';
        }
      }
    }else{
      css.style.display = 'block'
      btncss.style.backgroundColor = "rgb(239, 239, 240)";
      if(screen.width < 650){
        if(css.style.display != "none" && js.style.display != "none" && html.style.display != "none"){
          terminal.style.gridTemplate = '"html" 30vh "css" 30vh" "js" 30vh/ 100% ';
        }else if(css.style.display != "none" && js.style.display != "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"css" 40vh "js" 40vh/ 100%';
        }else if(css.style.display != "none" && js.style.display == "none" && html.style.display != "none") {
          terminal.style.gridTemplate = '"html" 40vh "css" 40vh/ 100%';
        }else if(css.style.display != "none" && js.style.display == "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"css" 40vh/ 100%';
        }
      }else{
        if(css.style.display != "none" && js.style.display != "none" && html.style.display != "none"){
          terminal.style.gridTemplate = '"html css js" 30vh/ 32% 32% 32% ';
        }else if(css.style.display != "none" && js.style.display != "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"css js" 40vh/ 50% 50%';
        }else if(css.style.display != "none" && js.style.display == "none" && html.style.display != "none") {
          terminal.style.gridTemplate = '"html css" 40vh/ 50% 50%';
        }else if(css.style.display != "none" && js.style.display == "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"css" 40vh/ 100%';
        }
      }
    }
  }
  btnjs.onclick = function(){
    if(js.style.display != "none"){
      js.style.display   = "none";
      btnjs.style.backgroundColor = "lightgray";
        //resizing
      if(screen.width < 650){
        if(js.style.display == "none" && css.style.display == "none"){
          terminal.style.gridTemplate = '"html" 40vh/ 100% ';
        }else if(html.style.display == "none" && js.style.display == "none"){
          terminal.style.gridTemplate = '"css" 40vh/ 100% ';
        }else{
          terminal.style.gridTemplate = '"html" 40vh "css" 40vh/ 100%';
        }
      }else{
        if(js.style.display == "none" && css.style.display == "none"){
          terminal.style.gridTemplate = '"html" 40vh/ 100% ';
        }else if(html.style.display == "none" && js.style.display == "none"){
          terminal.style.gridTemplate = '"css" 40vh/ 100% ';
        }else{
          terminal.style.gridTemplate = '"html css" 40vh/ 50% 50%';
        }
      }
    }else{
      js.style.display   = 'block';
      btnjs.style.backgroundColor = "rgb(239, 239, 240)";
      //mobile
      if(screen.width < 650){
        if(js.style.display != "none" && css.style.display != "none" && html.style.display != "none"){
          terminal.style.gridTemplate = '"html" 30vh "css" 30vh "js" 30vh/ 100% ';
        }else if(js.style.display != "none" && css.style.display != "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"css" 40vh "js" 40vh/ 100%';
        }else if(js.style.display != "none" && css.style.display == "none" && html.style.display != "none") {
          terminal.style.gridTemplate = '"html" 40vh "js" 40vh/ 100%';
        }else if(js.style.display != "none" && css.style.display == "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"js" 40vh/ 100%';
        }
      }else{
        if(js.style.display != "none" && css.style.display != "none" && html.style.display != "none"){
          terminal.style.gridTemplate = '"html css js" 30vh/ 32% 32% 32% ';
        }else if(js.style.display != "none" && css.style.display != "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"css js" 40vh/ 50% 50%';
        }else if(js.style.display != "none" && css.style.display == "none" && html.style.display != "none") {
          terminal.style.gridTemplate = '"html js" 40vh/ 50% 50%';
        }else if(js.style.display != "none" && css.style.display == "none" && html.style.display == "none") {
          terminal.style.gridTemplate = '"js" 40vh/ 100%';
        }
      }
    }
  }


