


Create new user:

    post http://localhost:5000/users {
	"nome": "user",
	"sobrenome": "user",
	"email": "user@email.com",
	"senha": "123456",	
	"confirmarSenha": "123456"
}

Login:
    post http://localhost:5000/login/ {
	"email": "joao&maria@email.com",
	"senha": "xxxxxxx"
}

Listar profissionais:
	GET http://localhost:5000/profissionals/all/

Detalhar profissional
	GET http://localhost:5000/profissionals/:id


