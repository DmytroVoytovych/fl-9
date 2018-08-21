let login = prompt('Input your login, please');
console.log(login);
if (login === '' || login === null) {
    alert('Canseled');
    console.log(login);
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
    console.log(login);
} else if (login === 'User') {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canseled');
    } else if (password === 'SuperUser') {
        alert(new Date().getHours() > 20 ? 'Good night!' : 'Good day!');
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}