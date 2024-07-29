import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetStyle } from "plasmo"
import cssText from "data-text:~style.css"

const INJECTED_ELEMENT_ID = "#secondary.style-scope.ytd-watch-flexy"

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"]
}


export const getStyle: PlasmoGetStyle = () => {
  // const baseFontSize = 12
  // const updatedCssText = cssText.replaceAll(":root", ":host(plasmo-csui)")
  // const remRegex = /([\d.]+)rem/g
  // updatedCssText = updatedCssText.replace(remRegex, (match, remValue) => {
  //   const pixels = parseFloat(remValue) * baseFontSize
  //   return `${pixels}px`
  // })
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(INJECTED_ELEMENT_ID),
  insertPosition: "afterbegin"
})

export const getShadowHostId = () => "plasmo-inline"

function Main() {
  return (
    <div className=" bg-white w-full ">extension 1</div>
  )
}

export default Main