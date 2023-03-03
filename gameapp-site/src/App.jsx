import { Table, Container, Button } from 'react-bootstrap'
import ContentsApi from './api/ContentsApi'
import { useEffect, useState } from 'react'
import CreateContentModal from './components/CreateContentModal'
import UpdateContentModal from './components/UpdateContentModal'

function App() {
  const [contents, setContents] = useState()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState()

  const handleCloseCreateModal = () => setIsCreateModalOpen(false);
  const handleShowCreateModal = () => setIsCreateModalOpen(true);

  const handleCloseUpdateModal = () => setIsUpdateModalOpen(false);
  const handleShowUpdateModal = () => setIsUpdateModalOpen(true);

  useEffect(() => {
    async function getData() {
      await ContentsApi().getContents().then(data => {
        return data.json()
      })
        .then(data => {
          setContents(data)
        })
    }

    getData()
  }, [])

  async function deleteContent(contentId) {
    try {
      await ContentsApi().deleteContent(contentId)

      const formattedContents = contents.filter(cont => {
        if (cont.id !== contentId) {
          return cont
        }
      })

      setContents(formattedContents)
    } catch (err) {
      throw err
    }
  }

  async function createContent(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements

      await ContentsApi().createContent(
        req.titulo.value, req.descricao.value, req.genero.value, req.empresa.value, req.lancamento.value
      ).then(data => {
        return data.json()
      }).then(res => {
        setContents([...contents, {
          id: res.contentId,
          titulo: req.titulo.value,
          descricao: req.descricao.value,
          genero: req.genero.value,
          empresa: req.empresa.value,
          lancamento: req.lancamento.value
        }])

        setIsCreateModalOpen(false)
      })
    } catch (err) {
      throw err
    }
  }

  async function updateContent(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements

      await ContentsApi().updateContent(
        selectedContent.id, req.titulo.value, req.descricao.value, req.genero.value, req.empresa.value, req.lancamento.value
      )

      const formattedContents = contents.map(cont => {
        if (cont.id === selectedContent.id) {
          return {
            id: selectedContent.id,
            titulo: req.titulo.value,
            descricao: req.descricao.value,
            genero: req.genero.value,
            empresa: req.empresa.value,
            lancamento: req.lancamento.value
          }
        }

        return cont
      })

      setContents(formattedContents)

      setIsUpdateModalOpen(false)
    } catch (err) {
      throw err
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url(/public/fundo.png)",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          fontFamily: "Permanent Marker",
          backgroundColor: "white",
          color: "pink",
          padding: 10,
          textAlign: "center",
        }}
      >
        GameInto: Aplicativo responsável por criar listagens de jogos
      </h1>
      <br />
      <br />
      <Container
        className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
      >
        <Button
          className="mb-2"
          onClick={handleShowCreateModal}
          variant=''
          style={{
            backgroundColor: 'pink',
            color: 'grey'
          }}>
          Adicionar Jogo
        </Button>
        <Table striped bordered hover>
          <thead style={{backgroundColor: 'pink'}}>
            <tr style={{ fontFamily: "PT Sans Narrow", color: "grey" }}>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Gênero</th>
              <th>Empresa</th>
              <th>Lançamento</th>
            </tr>
          </thead>

          <tbody>
            {contents && contents.map(cont => (
              <tr key={cont.id}>
                <td>{cont.titulo}</td>
                <td>{cont.descricao}</td>
                <td>{cont.genero}</td>
                <td>{cont.empresa}</td>
                <td>{cont.lancamento}</td>
                <td>
                  <Button onClick={() => deleteContent(cont.id)} variant="" style={{
                        backgroundColor: "grey",
                        color: "white",
                      }} >
                    Excluir
                  </Button>
                  <Button
                    onClick={() => {
                      handleShowUpdateModal()
                      setSelectedContent(cont)
                    }}
                    variant=''
                    className='m-1'
                    style={{
                      backgroundColor: "pink",
                        color: "grey",
                    }}
                  >
                    Atualizar
                  </Button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <CreateContentModal isModalOpen={isCreateModalOpen} handleClose={handleCloseCreateModal} createContent={createContent} />
      {selectedContent && (
        <UpdateContentModal isModalOpen={isUpdateModalOpen} handleClose={handleCloseUpdateModal} updateContent={updateContent} content={selectedContent} />
      )}
    </div>
  )
}

export default App