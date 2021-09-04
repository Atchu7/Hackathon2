import React from 'react';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import Header1 from './Header1';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useState } from 'react';
const Container = styled.div`
padding: 30px 20px;
`;
const QuestionTitleInput = styled.input`
background:none;
margin-top:23px;
border: 1px solid #777;
border-radius:3px;
display:block;
width:100%;
box-sizing: border-box;
padding:10px;
margin-bottom: 20px;
color:#fff;
`;
const QuestionBodyTextarea = styled.textarea`
background:none;
border: 1px solid #777;
border-radius:3px;
display:block;
width:100%;
box-sizing: border-box;
padding:10px;
min-height:200px;
color:#fff;
font-family:inherit;
`;

const PreviewArea = styled.div`
padding: 10px 20px;
background-color:#444;
border-radius:5px;
margin-bottom: 20px;

`;
function AskPage() {
     const[questionTitle,setQuestionTitle]= useState('');
     const [questionBody, setQuestionBody] =useState(" ");

    return (
        <>
            <Container>
                <Header1 style={{ marginBottom: '20px' }}>Ask a public question</Header1>
                < QuestionTitleInput type="text" value={''}  onChange={ e => setQuestionTitle(e.target.value)}placeholder="Title of your Question" />
                <QuestionBodyTextarea 
                onChange={e =>setQuestionBody(e.target.value)}
                placeholder="More info about your question. You can use markdown here" />
                <PreviewArea>
                <ReactMarkdown plugins={[gfm]} children={questionBody} />
                </PreviewArea>
                <BlueButton>Post question</BlueButton>
            </Container>
        </>
    );
}

export default AskPage;
