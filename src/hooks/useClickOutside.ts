import {useEffect, useCallback} from "react"

export const useClickOutside = (ref:React.RefObject<HTMLElement>, closeAction:(e:Event) => void) => {


useEffect(() => {
  const el = ref?.current
const handler = (e:Event) => {
  if(!el || el.contains(e.target as Node)) {
    return
  }

  closeAction(e)
}
  document.addEventListener('mousedown', handler)
  document.addEventListener('touchstart', handler)

  return () => {
   document.removeEventListener('mousedown', handler)
   document.removeEventListener('touchstart', handler)
  }
}, [ref])
}

export default useClickOutside