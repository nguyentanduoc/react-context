import { Card } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const { Meta } = Card;

interface ItemProps {}

//#0099DD
//#7A7067
const Item = ({}: ItemProps) => {
  const { theme } = useContext(ThemeContext);
  const border = theme === "theme1" ? "#7A7067" : "#0099DD";
  return (
    <Card
      hoverable
      style={{ width: 240, border: `1px solid ${border}`, marginBottom: 10 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default Item;
