import { Layout } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
};
// #00ABBD
// #729599
interface LeftMenuProps {}
const LeftMenu = ({}: LeftMenuProps) => {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === "theme1" ? "#729599" : "#00ABBD";
  return <Sider style={{ ...siderStyle, backgroundColor }}>LeftMenu</Sider>;
};

export default LeftMenu;
