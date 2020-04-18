import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';

const Container = styled.div`

    margin: 400px;
`;

const JobSummary = styled.div`

    width: 100%;
`;

const TitleContainer = styled.hgroup`

    width: inherit;
    padding: 0 16px;
    padding-top: 50px;
`;

const Title = styled.h1`

    color: ${ Constants.TEXT_COLOR };
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 64px;
    font-weight: 100;
    line-height: 1;
`;

const JobHeader = styled.div`

    text-align: center;
    width: 525px;
    margin: auto;
    margin-top: 50px;
`;

const CompanyName = styled.h2`

    color: ${ Constants.TEXT_COLOR };
    margin: 16px 0 16px;
    font-style: normal;
    letter-spacing: 0.125em;
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.5;
`;

const JobTitle =styled.h3`

    font-weight: 400;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 15px;
    letter-spacing: 0.125em;
    color: rgba(219,232,212,0.5);
    font-family: "Josefin Sans", sans-serif;
`;

const TimeFrame = styled.p`

    color: ${ Constants.TEXT_COLOR };
    font-style: normal;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
`;

const BodyContent = styled.div`

    font-family: 'Titillium Web', sans-serif;
    color: ${ Constants.TEXT_COLOR };
    width: 450px;
    margin: auto;
    padding: 36px;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const Work = () => {

    return (

        <Container id='Work'>
            
            <JobSummary>
                <TitleContainer>
                    <Title>{ Constants.WORK_EXPERIENCE }</Title>
                </TitleContainer>

                <JobHeader>
                    <CompanyName>{ Constants.KINAXIS }</CompanyName>
                    <JobTitle>{ Constants.KINAXIS_JOB_TITLE }</JobTitle>
                    <TimeFrame>{ Constants.KINAXIS_TIME_FRAME }</TimeFrame>
                </JobHeader>

                <BodyContent>
                    { Constants.KINAXIS_CONTENT.split('\n').map((line, key) => {
                        return <div key={ key }>
                            <p>{ line }</p>
                        </div>
                    })}
                </BodyContent>


                <JobHeader>
                    <CompanyName>{ Constants.BANK_OF_CANADA }</CompanyName>
                    <JobTitle>{ Constants.BANK_OF_CANADA_JOB_TITLE }</JobTitle>
                    <TimeFrame>{ Constants.BANK_OF_CANADA_TIME_FRAME }</TimeFrame>
                </JobHeader>

                <BodyContent>
                    { Constants.BANK_OF_CANADA_CONTENT.split('\n').map((line, key) => {
                        return <div key={ key }>
                            <p>{ line }</p>
                        </div>
                    })}
                </BodyContent>

                <JobHeader>
                    <CompanyName>{ Constants.GREAT_PEOPLE_INSIDE }</CompanyName>
                    <JobTitle>{ Constants.GREAT_PEOPLE_INSIDE_JOB_TITLE }</JobTitle>
                    <TimeFrame>{ Constants.GREAT_PEOPLE_INSIDE_TIME_FRAME }</TimeFrame>
                </JobHeader>

                <BodyContent>
                    { Constants.GREAT_PEOPLE_INSIDE_CONTENT.split('\n').map((line, key) => {
                        return <div key={ key }>
                            <p>{ line }</p>
                        </div>
                    })}
                </BodyContent>

                <JobHeader>
                    <CompanyName>{ Constants.RA_CENTRE }</CompanyName>
                    <JobTitle>{ Constants.RA_CENTRE_JOB_TITLE }</JobTitle>
                    <TimeFrame>{ Constants.RA_CENTRE_TIME_FRAME }</TimeFrame>
                </JobHeader>

                <BodyContent>
                    { Constants.RA_CENTRE_CONTENT.split('\n').map((line, key) => {
                        return <div key={ key }>
                            <p>{ line }</p>
                        </div>
                    })}
                </BodyContent>
            </JobSummary>

        </Container>
    );
}

export default Work;