document.querySelector("#selector").addEventListener("click", validation);

function validation(){
  let checkbox = document.querySelector("#checkbox");
  if(checkbox.checked == true){
    checkbox.checked = false;
  }else{
    checkbox.checked = true;
  }
}
