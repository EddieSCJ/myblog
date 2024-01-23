import useDropdown from "src/hooks/useDropdown"
import { useRouter } from "next/router"
import React, {useState} from "react"
import { MdExpandMore } from "react-icons/md"
import { DEFAULT_CATEGORY } from "src/constants"
import styled from "@emotion/styled"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"

type Props = {}

const Translator: React.FC<Props> = () => {
  const languages: Record<string, string> = {"pt": "🇧🇷 Portuguese","en":"🇺🇸 English", "fr": "🇫🇷 French", "es": "🇪🇸 Spanish", "de": "🇩🇪 German", "it": "🇮🇹 Italian", "ja": "🇯🇵 Japanese", "ko": "🇰🇷 Korean", "ru": "🇷🇺 Russian", "zh-CN": "🇨🇳 Chinese (Simplified)", "zh-TW": "🇨🇳 Chinese (Traditional)"}

  const [dropdownRef, opened, handleOpen] = useDropdown()
  const handleOptionClick = (targetLanguage: any) => {
    const baseURL = `https://blog-eddiescj-dev.translate.goog/${window.location.pathname}?_x_tr_sl=auto&_x_tr_tl=${targetLanguage}&_x_tr_pto=wapp&_x_tr_hist=true`
    window.open(baseURL, "_blank")
  }

  return (
    <StyledWrapper>
      <meta lang="pt-BR"/>
      <meta lang="pt"/>
      <meta lang="en"/>
      <meta lang="en-US"/>
      <meta lang="en-UK"/>
      <div ref={dropdownRef} className="wrapper" onClick={handleOpen}>
        {languages["pt"]} <MdExpandMore/>
      </div>
      {opened && (
        <div className="content">
          {Object.keys(languages).map((key, idx) => {
            return (
              <div
                className="item"
                key={idx}
                onClick={() => handleOptionClick(key)}
              >
                {languages[key]}
              </div>
            )
          })}
        </div>
      )}
    </StyledWrapper>
  )
}

export default Translator

const StyledWrapper = styled.div`
    position: relative;

    > .wrapper {
        display: flex;
        margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    cursor: pointer;
  }
  > .content {
    position: absolute;
    z-index: 40;
    padding: 0.25rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray10};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    > .item {
      padding: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
    }
  }
`
