import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import Gears from './gears.png'
import Octocat from './octocat.png'

const Container = styled.div`
    
`;
    
const Title = styled.h3`

    text-align: center;
    font-size: 36px;
    margin: 0;
    letter-spacing: 0.125em;
    color: ${ Constants.TEXT_COLOR };
    padding: 50px 0;
`;

const Row = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    height: 400px;
    padding-bottom: 20px;
`;

const Project = styled.div`

    height: inherit;
    margin: 15px;
    width: 450px;
    line-height: 2;
    font-size: 20px;
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

const ComingSoonIcon = styled.img`

    height: 300px;
    width: 300px;
    display: block;
    margin: auto;
    padding-top: 20px;
`;

const ProjectBody = styled.div`

    margin: auto;
    height: 80%;
    width: 97%;
    color: ${ Constants.TEXT_COLOR };
    font-family: 'Titillium Web', sans-serif;
    font-size: 18px;
    letter-spacing: 0.125em;
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
                            <a href={ Constants.PUB_SUB_SYSTEM_REPO } target="_blank">
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
                            <a href={ Constants.TURN_BASED_STRATEGY_GAME_REPO } target="_blank">
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
                            <a href={ Constants.EFFICIENT_FRONTIER_REPO } target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                </Row>

                <Row>
                    
                <Project>
                        <ProjectTitle>{ Constants.ALGORITHMIC_TRADING_BOT }</ProjectTitle>
                        <ProjectBody>{ Constants.ALGORITHMIC_TRADING_BOT_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.ALGORITHMIC_TRADING_BOT_REPO } target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>
                    
                    <Project>
                        <ProjectTitle>{ Constants.TWEETS_TRACKER }</ProjectTitle>
                        <ProjectBody>{ Constants.TWEETS_TRACKER_BODY.split('\n').map((line, key) => {
                            return <div key={ key }>
                                <p>{ line }</p>
                            </div>
                            })}
                            <a href={ Constants.TWEETS_TRACKER_REPO } target="_blank">
                                <OctocatIcon src={ Octocat }  />
                            </a>
                        </ProjectBody>
                    </Project>

                    <Project>
                        <ProjectTitle>{ Constants.COMING_SOON_TEMPLATE }</ProjectTitle>
                        <ProjectBody>
                            <ComingSoonIcon src={ Gears } />
                        </ProjectBody>
                    </Project>

                </Row>
            

        </Container>
    );
}

export default Projects;