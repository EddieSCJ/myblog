import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"
import Translator from "./../../Common/Translator";

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <div>
      <StyledWrapper>
        <CategorySelect/>
        <Translator/>
        <OrderButtons/>
      </StyledWrapper>
      <StyledAlert>
        A lingua mãe dos posts é a Lingua Portuguesa Brasileira.
      </StyledAlert>
      <StyledAlert>
        As traduções podem não ser precisas, pois são feitas pelo google tradutor, logo, se houver algo estranho, procure mais fontes de tradução, ou me contate.
      </StyledAlert>
    </div>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
`

const StyledAlert = styled.div`
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    color: red;
    font-weight: bold;
`