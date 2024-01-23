import React from "react"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/hooks/usePostQuery"
type Props = {}

const PageDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null
  return (
    <StyledWrapper>
      <meta lang="pt-BR"/>
      <meta lang="pt"/>
      <meta lang="en"/>
      <meta lang="en-US"/>
      <meta lang="en-UK"/>
      <NotionRenderer recordMap={data.recordMap}/>
    </StyledWrapper>
  )
}

export default PageDetail

const StyledWrapper = styled.div`
    margin: 0 auto;
    max-width: 56rem;
`
