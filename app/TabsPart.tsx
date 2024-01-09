import React from 'react'
import styled, {keyframes} from "styled-components";.
import Progress from 'components/progress'
import Timeline from 'Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `

        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return (
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""}
                                 onClick={() => this.setState({tab: "skills"})}>
                        Skills
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""}
                                 onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""}
                                 onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Progress value={100} text="Angular"/>
                        <Progress value={90} text="JavaScript"/>
                        <Progress value={90} text="TypeScript"/>
                        <Progress value={90} text="NestJS"/>
                        <Progress value={80} text="PostgresSQL"/>
                        <Progress value={70} text="Java"/>
                        <Progress value={70} text="C#"/>
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "experience" ? "block" : "none"
                    }}>
                        <Timeline data={{
                            "2016 - 2018": {
                                title: "Automation Developer",
                                institution: " Israeli Air Force (Integration Unit) ",
                                description: "Developed unique QA automation tools based on C# & Python in order to achieve new testing capabilities and improve existing once. "
                            },
                            "2018 - 2018": {
                                title: "Front End Developer ",
                                institution: "OFEK 324",
                                description: "Developed medium-scale, WEB application using Angular 6, Rxjs and several JavaScript libraries."
                            },
                            "2018 - 2020": {
                                title: "Full Stack Developer ",
                                institution: "OFEK 324",
                                description: "Developed medium-scale WEB application using Java, Angular 7+ & Rxjs 6\n\n" +
                                    "Developed restful apis using Dropwizard and Javalin\n\n"  +
                                    "Developed small-scale WEB applications using Ag-grid"
                            },
                            "2019 - Now": {
                                title: "Backend Architecture",
                                institution: "Startup",
                                description: "Plan and develop medium-to-large-scale back-end architecture, using microservices methodologies and mono repository methodology implemented with Nx by Nrwl, NestJS, Firebase, and PostgreSQL.\n\nManage time for the development and deployment process."
                            },
                            "2020 - Now": {
                                title: "Frontend Architecture",
                                institution: "OFEK 324",
                                description: "Plan and implement architectural and engineering infrastructure changes in real-time web system, towards first deployment\n\n" +
                                    "Mentor a developing division of 15, serve as an engineering and architecture consultant.\n\n"
                            }
                        }
                        }
                        />
                    </Tab>
                    <Tab style={{
                        display: this.state.tab === "education" ? "block" : "none"
                    }}>
                        <Timeline data={{
                            "2017 - 2018": {
                                title: "F15 Integrator",
                                institution: "Israeli Air Force (Integration Unit)  ",
                                description: ""
                            },
                            "2018": {
                                title: "Computer network administrator",
                                institution: "The IDF academy of Computer and Cyber Defense",
                                description: "Design and implement functional networks. " +
                                    "Configure, manage, and maintain essential network devices. " +
                                    "Use devices such as switches and routers to segment network traffic and create resilient networks. " +
                                    "Identify benefits and drawbacks of existing network configurations. " +
                                    "Implement network security, standards, and protocols. " +
                                    "Troubleshoot network problems. " +
                                    "Support the creation of virtualized networks."
                            },
                            "2018 ": {
                                title: "Qualified software tester ",
                                institution: "The IDF academy of Computer and Cyber Defense",
                                description: "Qualified software tester by the IDF academy of Computer and Cyber Defense standards."
                            },
                            "2018  ": {
                                title: "ISQTB Foundation Certification",
                                institution: "ISTQB - International Software Testing Qualifications Board ",
                                description: "ISTQB® Foundation Level, the certification includes subjects such as Waterfall, Agile, DevOps, Continuous Delivery and many more."
                            },
                            "2019": {
                                title: "CCNA - Cisco Certified Network Associate ",
                                institution: "Cisco",
                                description: ""
                            },
                            "2019 - Now": {
                                title: "B.Sc in Computer Science",
                                institution: "HIT - Holon Institute of Technology",
                                description: "GPA 95. Academic researcher in the subject of graph theory."
                            },

                        }
                        }
                        />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart