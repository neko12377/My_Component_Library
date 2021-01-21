import React from "react";
import styled from "styled-components";

const StyledPageContent = styled.div`
    display: flex;
    justify-content: center;
    width: 1770px;
    height: 644px;
    margin: 23px;
`;

interface PageContentPropsInterface {
    children: React.ReactNode;
}

export const PageContent = ({children}: PageContentPropsInterface) => {
    return (
        <StyledPageContent>
            {children}
        </StyledPageContent>
    )
}