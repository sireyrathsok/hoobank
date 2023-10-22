import Billing from "./components/Billing/billing";
import Business from "./components/Business/Business";
import CardDeal from "./components/CardDeal/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer";
import IntroPage from "./components/Introduction/IntroPage";
import Navigation from "./components/Navigation Bar/Navigation";
import State from "./components/states/state";
import Testimonials from "./components/Testimonials";
import "./index.css";

function App() {
  return (
    <div className=" bg-slate-950 pl-8 sm:pl-20 items-center">
      <Navigation />
      <IntroPage />
      <State />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
