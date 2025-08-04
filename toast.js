let toastbox=document.getElementById("toastbox");
let successmeg = '<i class="fa-solid fa-circle-check"></i> successfully submitted ';
let errormeg = ' <i class="fa-solid fa-skull"></i> please fix the error ';
let invalidmeg = '<i class="fa-solid fa-circle-exclamation"></i> invalid occurrence ';
function showtoast(meg){
  let toast=document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML=meg;
  toastbox.appendChild(toast)
  if(meg.includes('error'))
  {
    toast.classList.add('error');
  }
  if(meg.includes('invalid')){
    toast.classList.add('invalid');
  }
  setTimeout(()=>{
    toast.remove();
  },5000)
}