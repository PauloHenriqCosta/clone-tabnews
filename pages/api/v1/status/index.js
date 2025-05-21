import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 2 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "acima da média" }); //.send não define charset (tipo teclado)
}

export default status;
