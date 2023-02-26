import { useContext } from "react";
import { FoodContext } from "../../context/foodContext";
import { Card, Popconfirm, message, Space } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { Meta } = Card;
const FoodIndex = () => {
    const { foodsData, removeFood } = useContext(FoodContext);
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '20px', justifyContent: 'space-around' }}>
            {foodsData.map((e) => {

                return (
                    <>
                        <Card
                            style={{ width: '300px', cursor: "auto" }}
                            cover={
                                <img
                                    alt="example"
                                    src={e.image} />
                            }
                            actions={[
                                <Space direction="horizontal"  >
                                    <Popconfirm style={{ cursor: "none" }}
                                        title="Delete the Item"
                                        description="Are you sure to delete this Item?"
                                        onConfirm={() =>
                                            removeFood(e.name)}
                                        onCancel={() => message.error('Item Delete Canceled.')}
                                    >
                                        <DeleteOutlined/>
                                    </Popconfirm>
                                    <EditOutlined />
                                </Space>

                            ]}
                        >
                            <Meta
                                title={e.name}
                                description={`${e.description}${e.contain}`}
                            />
                        </Card>
                    </>
                )
            })
            }
        </div>

    )
}
export default FoodIndex;

