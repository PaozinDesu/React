import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png"
import 'animate.css'
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1
        }
    ]
    return (
        <section className="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>lorem ipsum</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab1</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">aaaaaa</Tab.Pane>
                                            <Tab.Pane eventKey="third">aaaaaaa</Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}