function status(request, response) {
  response.status(200).json({ chave: "acima da média" }); //.send não define charset (tipo teclado)
}

export default status;
