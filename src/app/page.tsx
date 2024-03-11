
import GridHeaderFooter from "./components/gridHeaderFooter";
import GridLogos from "./components/gridLogos";
import GridMenu from "./components/gridMenu";
import GridSideNav from "./components/gridSideNav";
import QuoteCards from "./components/quoteCards";


export default function Home() {
  return (
    <>
    <QuoteCards/>
    <GridSideNav/>
    <GridMenu/>
    <GridHeaderFooter/>
    <GridLogos/>
    </>
  );
}
