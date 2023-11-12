let rows = document.getElementById("i1");
let cols = document.getElementById("i2");
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  let body = document.body;
  let table = document.createElement("table");
  for(var i = 0; i < +rows.value; i++){
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j = 0; j < +cols.value; j++){
      let td = document.createElement("td");
      tr.appendChild(td);
      let txt = document.createTextNode("Item Nb :"+((i*(+cols.value))+j+1));
      td.appendChild(txt);
    }
  }
  body.appendChild(table);
})