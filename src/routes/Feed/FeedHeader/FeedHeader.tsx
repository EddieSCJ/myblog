import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"
import Translator from "./../../Common/Translator";

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <CategorySelect />
      <Translator />
      <OrderButtons />
    </StyledWrapper>
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
