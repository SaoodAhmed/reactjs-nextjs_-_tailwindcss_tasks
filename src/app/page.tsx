
import FlexSelf from "./components/flexSelf";
import GridCard from "./components/gridCard";
import GridHeaderFooter from "./components/gridHeaderFooter";
import GridLogos from "./components/gridLogos";
import GridMenu from "./components/gridMenu";
import GridShippingCart from "./components/gridShippingCart";
import GridSideNav from "./components/gridSideNav";
import QuoteCards from "./components/quoteCards";
import AlertButtonUseState from "./reactCompnents/alertButtonUseState";
import PropExample from "./reactCompnents/propExample";


export default function Home() {
  return (
    <>
    {/* Nextjs + Tailwindcss */}


    <QuoteCards/>
    <GridSideNav/>
    <GridMenu/>
    <GridHeaderFooter/>
    <GridLogos/>
    <GridShippingCart/>
    <FlexSelf/>
    <GridCard/>






    {/* Reactjs or Nextjs + Typescript */}


    {/* <PropExample/> */}

    {/* <AlertButtonUseState/> */}
    </>
  );
}
