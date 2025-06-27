class ValidationError extends Error {
  constructor(message) {
    super(message); //super classe, faz error se mexer (herdar mecânica)
    this.statusCode = 400;
  }
}

function salvarUsuario(input) {
  if (!input) {
    throw new ReferenceError("É necessário enviar o `input`.");
  }

  if (!input.name) {
    throw new ValidationError("Preencha o seu nome completo.");
  }

  if (!input.username) {
    throw new ValidationError("Preencha o seu apelido.");
  }

  if (!input.age) {
    throw new ValidationError("Preencha com sua idade.");
  }

  user.save(input);

  try {
    salvarUsuario({});
  } catch (error) {
    if (error instanceof ReferenceError) {
      throw error;
    }

    if (error instanceof ValidationError) {
      console.log(error.statusCode);
      return; //response.status(error.statuscode).json(error);
    }

    console.log("Erro desconhecido");
    console.log(error.stack);
  }
}

salvarUsuario({});
