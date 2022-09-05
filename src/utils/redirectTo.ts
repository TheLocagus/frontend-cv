import React from "react";

export const redirectTo = (value: string, isMenuOpen?: boolean, setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>) => {
  if(isMenuOpen && setIsMenuOpen !== undefined){
    setIsMenuOpen(false)
  }
  document.body.style.overflow = 'scroll'
  window.open(
    `${value}`,
    '_blank'
  )
}