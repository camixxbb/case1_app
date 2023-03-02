import { Modal, Button, Form } from 'react-bootstrap'
function UpdateContentModal(props) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={props.isModalOpen}>
                <Form onSubmit={(event) => {
                    props.updateContent(event)
                }}>
                    <Modal.Header closeButton onClick={props.handleClose}>
                        <Modal.Title>Atualizar Conteúdo</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group controlId="titulo">
                            <Form.Label>
                                Titulo
                            </Form.Label>
                            <Form.Control defaultValue={props.content.titulo} type="text" />
                        </Form.Group>

                        <Form.Group controlId="descricao">
                            <Form.Label>
                                Descrição
                            </Form.Label>
                            <Form.Control defaultValue={props.content.descricao} type="text" />
                        </Form.Group>

                        <Form.Group controlId="genero">
                            <Form.Label>
                                Gênero
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="empresa">
                            <Form.Label>
                                Empresa
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group controlId="lancamento">
                            <Form.Label>
                                Lançamento
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                        <Button variant="" type="submit"  style={{
                                        backgroundColor: 'pink',
                                        color: 'grey'
                                    }}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </div>
    )
}

export default UpdateContentModal