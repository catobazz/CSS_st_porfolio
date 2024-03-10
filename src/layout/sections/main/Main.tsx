import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/my-proj-ph2.webp'

export const Main = () => {
    return (
        <div>
            <div>
                <span> Hi there </span>
                <h2> I am Artem Rybin </h2>
                <h1> FrontEnd Developer </h1>
            </div>

            <Photo src={photo} alt='' />
        </div>

    );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`