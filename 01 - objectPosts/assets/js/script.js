const users = [];
let indexUser = -1;

function saveUser() {
    const name = document.getElementById('title').value;
    const surname = document.getElementById('resume').value;
    const age = document.getElementById('publisher').value;
    const eyesColor = document.getElementById('date').value;
    let problem = document.getElementById('vish');

    if (name && surname && age >= 0 && age <= 134 && eyesColor) {
        if (name.length < 2) {
            indexUser = 1;
            problem.innerHTML = "Nome inválido";
        } else if (surname.length < 2) {
            indexUser = 1;
            problem.innerHTML = "Sobrenome inválido";
        } else if (age < 0 || age > 134) {
            indexUser = 1;
            problem.innerHTML = "Idade inválida";
        } else if (indexUser === -1) {
            storeUser(name, surname, age, eyesColor);
            cleanFields();
            console.log(name, surname, age, eyesColor);
        } else {
            users[indexUser] = {
                name,
                surname,
                age,
                eyesColor
            };
            showusers();
            indexUser = -1;
            cleanFields();
        }
    } else {
        problem.innerHTML = "Preencha todos os campos corretamente";
    }
}


function storeUser(name, surname, age, eyesColor) {
    const User = {
        name,
        surname,
        age,
        eyesColor
    };
    users.push(User);
    showusers();
}

function showusers() {
    document.getElementById("list").classList.remove("hidden");

    let showContent = "";
    
    if (users.length === 0) {
        document.getElementById("list").classList.add("hidden");
    } else {
        users.forEach((User, index) => {
            showContent += `
            <div class="User">
                <h2>Usuário: ${User.name}</h2>
                <p><strong>Sobrenome do usuário:</strong> ${User.surname}</p>
                <p><strong>Idade:</strong> ${User.age}</p>
                <p><strong>Cor dos olhos:</strong> ${User.eyesColor}</p>

                <button onclick="editUser(${index})">Editar</button>
                <button onclick="removeUser(${index})">Excluir</button>
            </div>
            `;
        });
    }
    
    document.getElementById("list").innerHTML = showContent;
}

function cleanFields() {
    document.getElementById('title').value = "";
    document.getElementById('resume').value = "";
    document.getElementById('publisher').value = "";
    document.getElementById('date').value = "";
    document.getElementById('vish').innerHTML = "";
}

function removeUser(index) {
    users.splice(index, 1);
    showusers();
}

function editUser(index) {
    indexUser = index;
    const User = users[index];
    document.getElementById('title').value = User.name;
    document.getElementById('resume').value = User.surname;
    document.getElementById('publisher').value = User.age;
    document.getElementById('date').value = User.eyesColor;
}
