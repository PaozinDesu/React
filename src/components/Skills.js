import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import { SkillItem } from "./SkillItem";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const skillList = [
        {
            percentage: 90,
            skill: "HTML",
            id: 1
        },
        {
            percentage: 85,
            skill: "CSS",
            id: 2
        },
        {
            percentage: 70,
            skill: "JS",
            id: 3
        },
        {
            percentage: 40,
            skill: "React",
            id: 4
        },
        {
            percentage: 90,
            skill: "UIUX",
            id: 5
        },
        {
            percentage: 100,
            skill: "Figma",
            id: 6
        }
    ]
    return (
        <section className="skill" id="skills" >
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" id="carousel">
                                {
                                    skillList.map(({ percentage, skill, id }) => (<SkillItem limitPercentage={percentage} skill={skill} key={id} />))
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}