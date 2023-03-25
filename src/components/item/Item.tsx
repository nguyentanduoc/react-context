import { Card } from "antd";
const { Meta } = Card;

interface ItemProps {}

const Item = ({}: ItemProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240, border: "1px solid #1e90ff" }}
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
