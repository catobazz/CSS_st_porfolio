import React from 'react';
import styled from 'styled-components';

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
                <Name>@ivan ivanow</Name>
            </Slide>
            <Pagination>
                <span/>
                <span/>
                <span/>
            </Pagination>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
border: 1px solid red;
`
const Slide = styled.div`
  max-width: 500px;
  text-align: center;
`
const Text = styled.p`

`
const Name = styled.span`

`
const Pagination = styled.span`

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 5px;
    background-color: #8d46a4;
  }
`

