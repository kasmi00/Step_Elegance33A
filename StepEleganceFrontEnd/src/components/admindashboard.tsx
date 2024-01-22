import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    ShopOutlined,
    UserOutlined,
    DropboxOutlined,
    SolutionOutlined,
    LineChartOutlined ,
    SettingOutlined,
    PlusOutlined,
    EditOutlined,
} from '@ant-design/icons';
import './admindashboard.css';
import Usertableadd from './usertableadd';
import Usertableupdate from './usertableupdate';
import ProductAddForm from './productaddtable';

const { Header, Content, Sider } = Layout;

enum ProductType {
    SHOE = "SHOE",
    ACCESSORIES = "ACCESSORIES"
}
enum ProductCategory {
    MEN = "MEN",
    WOMEN = "WOMEN",
    KIDS = "KIDS"
}

interface ProductData {
    productName: string;
    productImage: File | Blob;
    description: string;
    price: number;
    quantity: number;
    size: number;
    type: ProductType;
    category: ProductCategory;
}

const App: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
    const [productData, setProductData] = useState<ProductData[]>([]); // State to hold product data

    const handleMenuClick = (key: string) => {
        setActiveMenuItem(key);
    };

    const handleAddProduct = (product: ProductData) => {
        setProductData((prevData) => [...prevData, product]);
    };

    // Placeholder userData
    const userData = [
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo">Admin Dashboard</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => handleMenuClick(e.key as string)}
                >
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.SubMenu key="2" icon={<UserOutlined />} title="Users">
                        <Menu.Item key="2.1" icon={<PlusOutlined />}>
                            Add User
                        </Menu.Item>
                        <Menu.Item key="2.2" icon={<EditOutlined />}>
                            Update User
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="3" icon={<ShopOutlined />} title="Products">
                        <Menu.Item key="3.1" icon={<PlusOutlined />}>
                            Add Product
                        </Menu.Item>
                        <Menu.Item key="3.2" icon={<EditOutlined />}>
                            Update Product
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="4" icon={<DropboxOutlined />} title="Orders">
                        <Menu.Item key="4.1" icon={<SolutionOutlined />}>
                           Track Order
                        </Menu.Item>
                        <Menu.Item key="4.2" icon={<EditOutlined />}>
                            Update Order
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="5" icon={<LineChartOutlined  />}>
                        Chart
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" />
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background">
                        {activeMenuItem === '2.1' && <Usertableadd data={userData} />}
                        {activeMenuItem === '2.2' && <Usertableupdate data={userData} />}

                        {activeMenuItem === '3.1' && (
                            <ProductAddForm onAddProduct={handleAddProduct} productData={productData} />
                        )}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
