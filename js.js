const add = document.getElementById("add");
const remove = document.getElementById("remove");
const result = document.getElementById("result");
let doList = [];

const borderStyles = [
    "2px solid #00000", 
];

add.onclick = function(){
    const list = document.getElementById("list");

    if(list.value.trim() != ""){
        doList.push(list.value);
        updateList();
        list.value = "";
    }
}

remove.onclick = function(){
    doList = [];
    updateList();
}

function updateList(){
    result.innerHTML = "";
    doList.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        li.style.border = borderStyles[Math.floor(Math.random() * borderStyles.length)];
        result.appendChild(li);
    });
}