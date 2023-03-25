import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
};
//#A1C7E0
//#BCC5CE
interface FooterProps {
  theme: string;
}
const Footer = ({ theme }: FooterProps) => {
  const backgroundColor = theme === "theme1" ? "#BCC5CE" : "#A1C7E0";
  return (
    <AntFooter style={{ ...footerStyle, backgroundColor }}>Footer</AntFooter>
  );
};

export default Footer;
