const ContentsApi = () => {
    const url = 'http://localhost:3000'
  
    return {
        getContents () {
            return fetch(`${url}/conteudo`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        deleteContent (contentId) {
          return fetch(`${url}/conteudo/${contentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
         })
        },
        createContent (titulo, descricao, genero,empresa,lancamento) {
          return fetch(`${url}/conteudo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                titulo: titulo,
                descricao: descricao,
                genero: genero,
                empresa: empresa,
                lancamento: lancamento
              }
            )
         })
        },
        updateContent(contentId, titulo, descricao, genero,empresa,lancamento) {
          return fetch(`${url}/conteudo/${contentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                titulo: titulo,
                descricao: descricao,
                genero: genero,
                empresa: empresa,
                lancamento: lancamento
              }
            )
         })
        },
    }
  }
  
  export default ContentsApi