import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FlexLayout from './questions/3_FlexLayout.tsx'
import Zeno from './questions/5_Zeno.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlexLayout />
    <Zeno />
  </StrictMode>,
)
