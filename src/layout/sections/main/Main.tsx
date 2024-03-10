import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/my-proj-ph2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>

            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span> Hi there </span>
                    <Name> I am Artem Rybin </Name>
                    <MainTitle> FrontEnd Developer. </MainTitle>
                </div>
                <Photo src={photo} alt=''/>
            </FlexWrapper>

        </StyledMain>

    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #b6ab76;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
 
`
const Name = styled.h2`
 
`