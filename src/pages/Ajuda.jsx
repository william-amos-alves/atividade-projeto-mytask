import {
  Container,
  Accordion,
  Button,
  AccordionBody,
  AccordionHeader,
  Alert,
  AccordionItem,
} from "react-bootstrap";

function Ajuda() {
  return (
    <main className="mt-4 ajuda">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventkly="0">
            <Accordion.Header> Sobre o nosso sistema </Accordion.Header>
            <Accordion.Body>
              Mytask é um sistema para gerenciamento de tarefas pessoais. Nesta
              aplicação você pode gerenciar todos os seus afazeres.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" />
          <Accordion.Header>Sobre a Empresa</Accordion.Header>
          <Accordion.Body>
            Essa empresa envolve soluções focadas em produtividade e bem-estar.
          </Accordion.Body>
        </Accordion>
        <Button className="mt-1 me-1">Entre em contato</Button>
        <Button className="mt-1 me-1" variant="outline-dange">
          Denunciar
        </Button>
        <Alert className="m1-1" variant="warning">
          Atenção! Estamos em manutenção
        </Alert>
      </Container>
    </main>
  );
}

export default Ajuda;
