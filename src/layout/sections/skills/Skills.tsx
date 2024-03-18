import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (

        <StyledSkills>
            <SectionTitle> My Skills </SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill
                    id={"codeSvg"}
                    skillTitle={"html5"}
                    skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
                        "                incididunt ut labore et dolore magna aliqua Ut enim"
                    }/>
                <Skill
                    id={"cssSvg"}
                    skillTitle={"css3"}
                    skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
                        "                incididunt ut labore et dolore magna aliqua Ut enim"
                    }/>
                <Skill
                    id={"reactSvg"}
                    skillTitle={"React"}
                    skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
                        "                incididunt ut labore et dolore magna aliqua Ut enim"
                    }/>
                <Skill
                    id={"figmaSvg"}
                    skillTitle={"WEB DESIgN  "}
                    skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
                        "                incididunt ut labore et dolore magna aliqua Ut enim"
                    }/>
                <Skill
                    id={"styledSvg"}
                    skillTitle={"styled components"}
                    skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
                        "                incididunt ut labore et dolore magna aliqua Ut enim"
                    }/>
                <Skill
                    id={"typescriptSvg"}
                    skillTitle={"typescript"}
                    skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n" +
                        "                incididunt ut labore et dolore magna aliqua Ut enim"
                    }/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #e17e7e;
  min-height: 100vh;
`