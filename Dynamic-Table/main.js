document.querySelector("#add").addEventListener("click", function(){
    let serial = prompt("Enter Serial Number");
    let first = prompt("Enter First Name");
    let last = prompt("Enter Last Name");
    let handle = prompt("Enter Contact Number");

    let table = document.querySelector('.table');

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let sr = document.createTextNode(serial);
    let fname = document.createTextNode(first);
    let lname = document.createTextNode(last);
    let hand = document.createTextNode(handle);

    td1.appendChild(sr);
    td2.appendChild(fname);
    td3.appendChild(lname);
    td4.appendChild(hand);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
    
});


document.querySelector('#delete').addEventListener('click', function(){
    let target = document.querySelector(".table");
    let child = target.children[1];
    target.removeChild(child);
});




