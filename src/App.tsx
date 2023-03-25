import { Layout } from "antd";
import styled from "styled-components";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import LeftMenu from "./components/layouts/LeftMenu";
import Main from "./components/layouts/Main";

function App() {
  return (
    <LayoutStyled>
      <Header></Header>
      <Layout>
        <LeftMenu></LeftMenu>
        <Main></Main>
      </Layout>
      <Footer></Footer>
    </LayoutStyled>
  );
}

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

export default App;
