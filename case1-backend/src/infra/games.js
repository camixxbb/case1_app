import db from "./db.js";


const CONTENTS_SCHEMA = `
  CREATE TABLE IF NOT EXISTS "conteudos" (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "titulo" text,
      "descricao" text,
      "genero" text,
      "empresa" text,
      "lancamento" text
    );`;

function createTableContents() {
  db.run(CONTENTS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de conteúdos");
  });
}

db.serialize(() => {
  createTableContents();
});
