import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/manrope";
import "@fontsource/nunito-sans";
import MainPage from './pages/MainPage';


const theme = extendTheme({
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(255, 255, 255, 0.25)",
        borderRadius: "30px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "rgba(255, 255, 255, 0.4)",
      },
      /* For Firefox */
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0,0,0,0.3) transparent",
      },
    },
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Nunito Sans', sans-serif`,
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router basename="/dr-panchuk">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace/>} />
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </ChakraProvider>

  );
}
