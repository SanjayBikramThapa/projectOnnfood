

const plusclick=(id)=>{
  let selector = document.getElementById(id)
  selector.value = parseInt(selector.value)+1
}

const minusclick=(id)=>{
  let selector = document.getElementById(id)
  let data = parseInt(selector.value)-1
  if(data>=1){
    selector.value = data
  }
}












