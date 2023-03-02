import GamesDAO from "../DAO/GamesDAO.js";

class gameController {
  static rotas(app) {
    app.get("/conteudo", gameController.listar);
    app.post("/conteudo", gameController.inserir);
    app.delete("/conteudo/:id", gameController.deletar);
    app.put("/conteudo/:id", gameController.atualizar);
  }

  static async listar(req, res) {
    const conteudos = await GamesDAO.listar();

    res.send(conteudos);
  }

  static async inserir(req, res) {
    const conteudo = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      genero: req.body.genero,
      empresa: req.body.empresa,
      lancamento: req.body.lancamento,
    };

    const result = await GamesDAO.inserir(conteudo);

    if (result.erro) {
      res.status(500).send(result);
    }

    res.send(result);
  }

  static async deletar(req, res) {
    const conteudo = await GamesDAO.deletar(req.params.id);

    if (conteudo.erro) {
      res.status(500).send("Erro ao deletar o jogo");
    }

    res.send({ mensagem: "Jogo removido com sucesso!!!" });
  }

  static async atualizar(req, res) {
    const conteudo = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      genero: req.body.genero,
      empresa: req.body.empresa,
      lancamento: req.body.lancamento,
    };

    const result = await GamesDAO.atualizar(req.params.id, conteudo);

    if (result.erro) {
      res.status(500).send("Erro ao atualizar o jogo");
    }

    res.send({ mensagem: "Jogo alterado com sucesso!!!" });
  }
}

export default gameController;
