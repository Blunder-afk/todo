var id = 0;
function adicionar(){
    item = document.getElementById('text-insert').value;
    document.getElementById('text-insert').value = "";
    if (item.length == 0) {
        alert('Insira algum valor');
    } else {
        id++;
        var li = document.createElement('li');
        li.innerHTML = "<input type='checkbox' id='" + id + "'> <label class='strike' for='" + id + "'>" + item + " </label><button onclick='fechar("+id+")' class='close'><span aria-hidden='true'>&times;</span></button>";
        document.getElementById('todo').appendChild(li)
        li.setAttribute('class', "close"+id)
    }
   
}
function fechar(x){
    nome = 'close'+x;
    elementos = document.getElementsByClassName(nome);
    while (elementos.length > 0) {
        elementos[0].remove();
    }

}