import db from "../infra/db.js";

class GamesDAO {
  static listar() {
    const query = "SELECT * FROM conteudos";
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      });
    });
  }

  static inserir(conteudo) {
    const query =
      "INSERT INTO conteudos (titulo, descricao, genero, empresa, lancamento) VALUES (?, ?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [
          conteudo.titulo,
          conteudo.descricao,
          conteudo.genero,
          conteudo.empresa,
          conteudo.lancamento,
        ],
        function (err) {
          if (err) {
            reject({
              mensagem: "Erro ao inserir o jogo",
              erro: err,
            });
          }

          resolve({
            mensagem: "Jogo adicionado com sucesso",
            contentId: this.lastID,
          });
        }
      );
    });
  }

  static deletar(id) {
    const query = "DELETE FROM conteudos WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(query, [id], (err) => {
        if (err) {
          reject({
            mensagem: "Erro ao deletar o jogo",
            erro: err,
          });
        }

        resolve({ mensagem: "Jogo deletado com sucesso" });
      });
    });
  }

  static atualizar(id, conteudo) {
    const query =
      "UPDATE conteudos SET titulo = ?, descricao = ?, genero = ? , empresa = ?, lancamento = ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [
          conteudo.titulo,
          conteudo.descricao,
          conteudo.genero,
          conteudo.empresa,
          conteudo.lancamento,
          id,
        ],
        (err) => {
          if (err) {
            reject({
              mensagem: "Erro ao atualizar o jogo",
              erro: err,
            });
          }

          resolve({ mensagem: "Jogo atualizado com sucesso" });
        }
      );
    });
  }
}

export default GamesDAO;
