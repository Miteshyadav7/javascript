const { createElement } = require("react");

function form(){
   let main = getElementbyid("main");
   let cont = createElement("div");
   cont.setAttribute("");
   cont.setAttribute();
}
function addData() {
    const dataInput = document.getElementById('dataInput');
    const data = dataInput.value;
//     const rollno = document.getElementById('rollno');
//     const roll = rollno.value;
//  const dname = document.getElementById('name');
//     const name = name.value;
//     const dbranch = document.getElementById('branch');
//     const branch = branch.value;
//     const dyoa = document.getElementById('rollno');
//     const yoa = rollno.value;
    
    
       
    if (data) {
      saveData(data);
      renderDataList();
      dataInput.value = '';
    }
  }

  function saveData(data) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(data);
    localStorage.setItem('items', JSON.stringify(items));
  }

  function getData() {
    return JSON.parse(localStorage.getItem('items')) || [];
  }

  function deleteData(index) {
    let items = getData();
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    renderDataList();
  }

  function editData(index, newData) {
     let items = getData();
        items[index] = newData;
        localStorage.setItem('items', JSON.stringify(items));
        renderDataList();
  }

  function renderDataList() {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = '';
    const items = getData();

    items.forEach((item, index) => {
      const listItem = document.createElement('div');

      const textSpan = document.createElement('span');
      textSpan.textContent = item;
      listItem.appendChild(textSpan);

      const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.setAttribute('data-index', index);
        editButton.onclick = function() {
            const newText = prompt("Edit the text:", item);
            if (newText !== null) {
                editData(index, newText);
            }
        };
        listItem.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('data-index', index);
        deleteButton.onclick = function() {
            deleteData(index);
        };
        listItem.appendChild(deleteButton);

      dataList.appendChild(listItem);
    });
  }
  renderDataList();
 
