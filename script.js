var selectedRow = null;

function show(message,name){
    const div = document.createElement("div");
    div.name = `alert alert-$(name)`;
    div.appendChild(document.createTextNode(meaage));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);
}
