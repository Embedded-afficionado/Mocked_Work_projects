//Coloca informações a respeito do estado da máquina em um .txt/pdf ainda a ser trabalhado
//Fazer injeção disso no servidor e criar "boxes para marcar" isso será feito para poder facilitar o preenchimento das informações

document.getElementById('editIcon').addEventListener('click', function() {
    var textBox = document.getElementById('textBox');
    textBox.style.display = textBox.style.display === 'none' ? 'block' : 'none';
});
