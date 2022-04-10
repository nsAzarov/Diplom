import React, { createContext, useState, useEffect } from 'react'

export const StyleContext = createContext()

export const StyleContextProvider = ({ children }) => {
  const [colors, setColors] = useState({
    mainColor: '#8C3091',
    secondaryColor: '#5B5A4D',
    textColor: '#fff',
  })
  const [language, setLanguage] = useState('RU')

  useEffect(() => {
    let lang = localStorage.getItem('language')
    if (!lang) {
      localStorage.setItem('language', 'RU')
      lang = 'RU'
    }
    setLanguage(lang)
  }, [])
  useEffect(() => {
    let mColor = localStorage.getItem('mainColor')
    if (!mColor) {
      localStorage.setItem('mainColor', '#8C3091')
      mColor = '#8C3091'
    }
    setColors((prev) => {
      let newColors = { ...prev }
      newColors.mainColor = mColor
      return newColors
    })
  }, [])

  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang)
    setLanguage(lang)
  }

  const changeColor = (color) => {
    localStorage.setItem('mainColor', color)
    setColors({ ...colors, mainColor: color })
  }

  return (
    <StyleContext.Provider
      value={{ colors, changeColor, language, changeLanguage }}
    >
      {children}
    </StyleContext.Provider>
  )
}
