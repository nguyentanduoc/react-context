import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
interface FooterProps {}
const Footer = ({}: FooterProps) => {
  return <AntFooter style={footerStyle}>Footer</AntFooter>;
};

export default Footer;
