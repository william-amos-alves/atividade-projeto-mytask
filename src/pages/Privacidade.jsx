import { Container, Accordion, AccordionItem, AccordionHeader, AccordionBody } from "react-bootstrap";

function Privacidade(){
    return(
        <main className="priva">
            <Container>
                <h1>Política de Privacidade</h1>
                <Accordion defaultActiveKey="0">
        <Accordion.Item eventkly="0">
            <Accordion.Header> CONTEXTUALIZAÇÃO: </Accordion.Header>
            <Accordion.Body>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aliquid fugit fuga cum inventore quo. Quis nobis natus odio sunt maxime iusto omnis totam, a asperiores explicabo nihil dignissimos, praesentium excepturi nemo saepe tenetur distinctio optio expedita, fugit officiis tempore temporibus voluptas laboriosam? Aspernatur eius earum asperiores molestiae atque odit, accusantium distinctio ipsum suscipit consequatur ex quia enim deleniti assumenda rerum? Nihil ipsa molestias quos magni deserunt, neque hic quisquam eaque ea est natus veniam aperiam cupiditate consequatur quidem! Vitae enim ad autem itaque officia recusandae quia, sapiente delectus soluta, quaerat asperiores tempora alias, voluptatibus debitis doloremque possimus ratione quo.</p>
            </Accordion.Body>
          </Accordion.Item>
                </Accordion>
            </Container>
        </main>
    );
}

export default Privacidade;