function populateUserTable() { 
    var tableBody = document.getElementById("userTableBody"); 
    tableBody.innerHTML = ""; // Очищаем содержимое таблицы 
    var users = JSON.parse(localStorage.getItem("users")) || []; 
 
    for (var i = 0; i < users.length; i++) { 
        (function (index) { 
            var user = users[index]; 
            var row = document.createElement("tr"); 
 
            var cell1 = document.createElement("td"); 
            cell1.textContent = user.name; 
            row.appendChild(cell1); 
 
            var cell2 = document.createElement("td"); 
            cell2.textContent = user.email; 
            row.appendChild(cell2); 
 
            var cell3 = document.createElement("td"); 
            var editButton = document.createElement("button"); 
            editButton.textContent = "Edit"; 
            editButton.classList.add("btn", "btn-primary", "btn-sm"); 
            editButton.onclick = function () { 
                editUser(index); 
            }; 
            cell3.appendChild(editButton); 
 
            var deleteButton = document.createElement("button"); 
            deleteButton.textContent = "Delete"; 
            deleteButton.classList.add("btn", "btn-danger", "btn-sm"); 
            deleteButton.onclick = function () { 
                deleteUser(index); 
            }; 
            cell3.appendChild(deleteButton); 
 
            row.appendChild(cell3); 
 
            tableBody.appendChild(row); 
        })(i); 
    } 
} 
 
  
// Функция для редактирования пользователя 
function editUser(index) { 
    var users = JSON.parse(localStorage.getItem("users")) || []; 
    var user = users[index]; 
 
    // Здесь можно открыть модальное окно с формой для редактирования данных пользователя 
    var newName = prompt("Enter new name:", user.name); 
    var newEmail = prompt("Enter new email:", user.email); 
 
    if (newName && newEmail) { 
        user.name = newName; 
        user.email = newEmail; 
        localStorage.setItem("users", JSON.stringify(users)); 
        populateUserTable(); // Обновляем таблицу, чтобы отразить изменения 
    } 
} 
 
// Функция для удаления пользователя 
function deleteUser(index) { 
    var users = JSON.parse(localStorage.getItem("users")) || []; 
    users.splice(index, 1); 
    localStorage.setItem("users", JSON.stringify(users)); 
    var tableBody = document.getElementById("userTableBody"); 
    tableBody.innerHTML = ""; // Очищаем содержимое таблицы 
    populateUserTable(); // Заново заполняем таблицу 
} 
 
 
  
// Вызываем функцию при загрузке страницы  
window.onload = populateUserTable;
