import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import Octocat from './octocat.png'

const Container = styled.div`
    
    margin-bottom: 300px;
`;
    
const Title = styled.h3`

    text-align: center;
    font-size: 36px;
    margin: 0;
    letter-spacing: 0.125em;
    color: ${ Constants.TEXT_COLOR };
    padding: 50px 0;
    text-transform: uppercase;
`;

const Row = styled.div`

    display: flex;
    margin: 32px;
    min-height: 400px;
    padding-bottom: 20px;
    text-align: center;
    justify-content: center;
`;

const Project = styled.div`

    height: inherit;
    margin: 15px;
    width: 450px;
    line-height: 2;
    font-size: 16px;
    border: solid 1px ${ Constants.TEXT_COLOR };
    color: ${ Constants.TEXT_COLOR };
    border-radius: 10px;
    
    :hover {
        box-shadow: 0 7px 20px 0 ${ Constants.PROJECT_BOX_SHADOW_COLOR }, 0 4px 10px 0 ${ Constants.PROJECT_BOX_SHADOW_COLOR };
    }
`;

const ProjectTitle = styled.h2`

    text-align: center;
    font-size: 24px;
    letter-spacing: 0.125em;
    color: ${ Constants.TEXT_COLOR };
    margin: 0;
`;

const OctocatIcon = styled.img`

    display: block;
    margin: auto;
    
    :hover {
        cursor: pointer;
    }
`;

const ProjectBody = styled.div`

    margin: auto;
    height: 80%;
    width: 97%;
    color: ${ Constants.TEXT_COLOR };
    font-family: 'Titillium Web', sans-serif;
    font-size: 18px;
    letter-spacing: 0.125em;
    padding-bottom: 20px;
`;

const Projects = () => {

    return (

        <Container id='Projects'>

                <Title>{ Constants.PROJECTS }</Title>
                
                <Row>

                    <Project>
                        <ProjectTitle>{ Constants.PUB_SUB_SYSTEM }</ProjectTitle>
                        <ProjectBody>{ Constants.PUB_SUB_SYSTEM_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.PUB_SUB_SYSTEM_REPO } rel="noopener noreferrer" target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                    <Project>
                        <ProjectTitle>{ Constants.TURN_BASED_STRATEGY_GAME }</ProjectTitle>
                        <ProjectBody>{ Constants.TURN_BASED_STRATEGY_GAME_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.TURN_BASED_STRATEGY_GAME_REPO } rel="noopener noreferrer" target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                    <Project>
                        <ProjectTitle>{ Constants.EFFICIENT_FRONTIER }</ProjectTitle>
                        <ProjectBody>{ Constants.EFFICIENT_FRONTIER_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.EFFICIENT_FRONTIER_REPO } rel="noopener noreferrer" target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                </Row>

                <Row>
                    
                    <Project>
                        <ProjectTitle>{ Constants.AI_PACMAN }</ProjectTitle>
                        <ProjectBody>{ Constants.AI_PACMAN_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.AI_PACMAN_REPO } rel="noopener noreferrer" target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                    <Project>
                        <ProjectTitle>{ Constants.TIC_TAC_TOE }</ProjectTitle>
                        <ProjectBody>{ Constants.TIC_TAC_TOE_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.TIC_TAC_TOE_REPO } rel="noopener noreferrer" target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                    <Project>
                        <ProjectTitle>{ Constants.ALGORITHMIC_TRADING_BOT }</ProjectTitle>
                        <ProjectBody>{ Constants.ALGORITHMIC_TRADING_BOT_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.ALGORITHMIC_TRADING_BOT_REPO } rel="noopener noreferrer" target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                </Row>
            
        </Container>
    );
}

export default Projects;