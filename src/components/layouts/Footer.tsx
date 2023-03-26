import { Layout } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const { Footer: AntFooter } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
};
//#A1C7E0
//#BCC5CE
interface FooterProps {}
const Footer = ({}: FooterProps) => {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === "theme1" ? "#BCC5CE" : "#A1C7E0";
  return (
    <AntFooter style={{ ...footerStyle, backgroundColor }}>Footer</AntFooter>
  );
};

export default Footer;
