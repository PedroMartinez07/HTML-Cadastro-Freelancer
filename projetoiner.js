class usuario {
    constructor() {
        this.usuarios = localStorage.getItem('tbUsuario') === null
        ? [] : JSON.parse(localStorage.getItem('tbUsuario'))
    }

salva(usuario){
    this.usuarios.push(usuario) 
    localStorage.setItem('tbUsuario', JSON.stringify(this.usuarios))
    alert('Cadastrado com sucesso!')
}


listagem(){
    const lista= this.usuarios.map((usuario) => (
        `<tr>
        <td>${usuario.nome}</td>
        <td>${usuario.cep}</td>
        <td>${usuario.logradouro}</td>
        <td>${usuario.email}</td>
        <td>${usuario.telefone}</td>
        <td>${usuario.idade}</td>
        <td></td>
        </tr>
        `))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Usuários Cadastrados</caption>
        <thead>
            <th>Nome</th> 
            <th>CEP</th> 
            <th>Logradouro</th> 
            <th>Email</th> 
            <th>Telefone</th> 
            <th>idade</th>
        </thead>
        <tbody>${lista}</tbody>      
        </table>
        `)
}

atualiza(){
    document.getElementById('listagem').innerHTML = usuario.lista()
}


const cadastrado = new Usu()
document.getElementById('bot').onclick = function ()  {
    const registro = {
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        idade: document.getElementById('idade').value
    } 
    usuario.salva(registro)
}
window.onload = function(){
    usuario.atualiza()
}
