import { Layout } from "antd";
import styled from "styled-components";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import LeftMenu from "./components/layouts/LeftMenu";
import Main from "./components/layouts/Main";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("theme1");
  return (
    <LayoutStyled>
      <Header theme={theme} onChangeTheme={setTheme} />
      <Layout>
        <LeftMenu theme={theme} />
        <Main theme={theme} />
      </Layout>
      <Footer theme={theme} />
    </LayoutStyled>
  );
}

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

export default App;
