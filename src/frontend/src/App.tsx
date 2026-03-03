import { useState } from "react";
import GlobalBackground from "./components/GlobalBackground";
import Page1Welcome from "./components/Page1Welcome";
import Page2Together from "./components/Page2Together";
import Page3LoveQuestion from "./components/Page3LoveQuestion";
import Page4Gallery from "./components/Page4Gallery";
import Page5DatePicker from "./components/Page5DatePicker";
import Page6FinalMessage from "./components/Page6FinalMessage";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [marriageDate, setMarriageDate] = useState("");

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDateSubmit = (date: string) => {
    setMarriageDate(date);
    goToPage(6);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-body bg-deep-burgundy">
      <GlobalBackground />
      <div className="relative z-10">
        {currentPage === 1 && <Page1Welcome onNext={() => goToPage(2)} />}
        {currentPage === 2 && <Page2Together onNext={() => goToPage(3)} />}
        {currentPage === 3 && <Page3LoveQuestion onYes={() => goToPage(4)} />}
        {currentPage === 4 && <Page4Gallery onNext={() => goToPage(5)} />}
        {currentPage === 5 && <Page5DatePicker onSubmit={handleDateSubmit} />}
        {currentPage === 6 && <Page6FinalMessage date={marriageDate} />}
      </div>
    </div>
  );
}
