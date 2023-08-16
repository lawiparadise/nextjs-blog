'use client'

import { createContext, useReducer, useState } from 'react'

export const Cont = createContext({pList:[]})

export default function ContextProvider({children}:{children:React.ReactNode}) {
  const [pList, setPList] = useState([]);

  return (
    <Cont.Provider value={{pList}}>
      {children}
    </Cont.Provider>
  )
}