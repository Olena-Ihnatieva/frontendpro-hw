const myTable = document.createElement('table');
myTable.classList.add('testTable');
document.body.appendChild(myTable);
myTable.style.borderCollapse = "collapse";
myTable.style.margin = "0 auto";

for (let i = 0; i < 10; i++) {
    const myTr = document.createElement('tr');
    myTr.classList.add('someTr');
    myTable.appendChild(myTr);
    for (let j = 0; j < 10; j++) {
        const myTd = document.createElement('td');
        myTd.classList.add('someTd');
        myTr.appendChild(myTd);
        myTd.style.border = "1px solid black";
        myTd.style.padding = "5px";
        myTd.style.textAlign = "center";
        myTd.style.width = "30px";
        myTd.style.height = "30px";
        myTd.textContent = Math.floor(Math.random() * 100 + 1).toString();
    }
}