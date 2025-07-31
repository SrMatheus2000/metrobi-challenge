import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FlexLayout from './FlexLayout.tsx'
import ZenoParadoxAnimation from './Zeno.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlexLayout />
    <ZenoParadoxAnimation />
  </StrictMode>,
)
