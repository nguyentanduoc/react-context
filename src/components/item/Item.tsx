import { Card } from "antd";
const { Meta } = Card;

interface ItemProps {
  theme: string;
}

//#0099DD
//#7A7067
const Item = ({ theme }: ItemProps) => {
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
