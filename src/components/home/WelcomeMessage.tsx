import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import * as Constants from '../../Constants';

const TextContainer= styled.div`

    padding-top: 20px;
`;

const StyledText = styled.h3`
    
    color: ${Constants.ORANGE};
    line-height: 2;
    font-size: 32px;
    margin: 0;
`;

interface MessageProps {
    message: string
  }

const WelcomeMessage = ({ message }: MessageProps) => {
    
    const [text, setText] = useState('')
    const [speed, setSpeed] = useState(50)

    const fullText: string = message
  
    const handleTyping = () => {
        
        setText(fullText.substring(0, text.length + 1))
  
        setSpeed(50)
  
        if (text === fullText) {
            setTimeout(500)
        } 
    }
  
    useEffect(() => {
        const timer = setTimeout(() => {
            handleTyping()
        }, speed)

        return () => clearTimeout(timer)
    })

        return (
            <TextContainer>
                {text.split("\n").map((line, key) => {
                return <>
                    <div key={ key }>
                        
                        <StyledText> { line } </StyledText>
                    
                    </div>
                </>
                })}
            </TextContainer>
        );
}
  
export default WelcomeMessage