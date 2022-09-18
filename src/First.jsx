import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
import FAQ from "./FAQ";
import Login from "./Login";
import Kolhan from "./Kolhan";
import Online from "./Online";
import Assigmant from "./pages/Assigmant";
import Compiler from "./pages/Compiler";
import Chats from "./pages/Chats";

const First = () => {
  const theme = {
    colors: {
      dark:"rgb(22,29,39)",
      leaf:"rgb(54,89,2)",
      hover:"rgb(8,217,213)",
      Header: "RGB(10,20,53)",
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(8,217,213)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/faq" element= {<FAQ/>}/>
          <Route path="/Kolhan" element= {<Kolhan />}/>
          <Route path="/login" element= {<Login />}/>
          <Route path="/online" element= {<Online/>}/>
          <Route path="/assignment" element= {<Assigmant/>}/>
          <Route path="/Compiler" element= {<Compiler/>}/>
          <Route path="/Chats" element= {<Chats/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default First;
