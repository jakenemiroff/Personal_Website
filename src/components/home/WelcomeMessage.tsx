import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledText = styled.h3`
    
    padding-top: 20px;
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
            <div>
                {text.split("\n").map((line, key) => {
                return <>
                    <div key={ key }>
                        
                        <StyledText> { line } </StyledText>
                    
                    </div>
                </>
                })}
            </div>
        );
}
  
export default WelcomeMessage