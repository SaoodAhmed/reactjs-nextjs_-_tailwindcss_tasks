
import FlexSelf from "./components/flexSelf";
import GridCard from "./components/gridCard";
import GridHeaderFooter from "./components/gridHeaderFooter";
import GridHorizentalForm from "./components/gridHorizentalForm";
import GridLogos from "./components/gridLogos";
import GridMenu from "./components/gridMenu";
import GridResponsiveSection from "./components/gridResponsiveSection";
import GridSectionText from "./components/gridSectionText";
import GridShippingCart from "./components/gridShippingCart";
import GridSideNav from "./components/gridSideNav";
import GridStartEndSpan from "./components/gridStartEnd&Span";
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
    <GridHorizentalForm/>
    <GridStartEndSpan/>
    <GridResponsiveSection/>
    <GridSectionText/>






    {/* Reactjs or Nextjs + Typescript */}


    {/* <PropExample/> */}

    {/* <AlertButtonUseState/> */}
    </>
  );
}
