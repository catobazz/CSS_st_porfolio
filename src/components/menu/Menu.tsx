import React from 'react';
import styled from 'styled-components';

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((e, index)=> {
                    return <li key={index}><a href=""> {e} </a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`