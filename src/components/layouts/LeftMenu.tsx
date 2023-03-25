import { Layout } from "antd";
const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
};
// #00ABBD
// #729599
interface LeftMenuProps {
  theme: string;
}
const LeftMenu = ({ theme }: LeftMenuProps) => {
  const backgroundColor = theme === "theme1" ? "#729599" : "#00ABBD";
  return <Sider style={{ ...siderStyle, backgroundColor }}>LeftMenu</Sider>;
};

export default LeftMenu;
