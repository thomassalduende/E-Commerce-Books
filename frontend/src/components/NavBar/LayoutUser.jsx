import { Footer } from "./Footer";
import { HeaderUser } from "./HeaderUser";

export function LayoutUser ({ children }) {
  return (
    <>
      <HeaderUser/>
        {children}
      <Footer/>
    </> 
  )
}