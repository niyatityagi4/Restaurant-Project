import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import PermissionButton from "../../structure/PermissionButton";

const { Sider } = Layout;

export default function AdminPage() {
  return (
    <PermissionButton allowedPermissions={['admin']}>
    <Layout>
      <Sider trigger={null}  >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ paddingTop: "96px" ,position : 'fixed' , width : '200px' , height : '100%'}}
        >
          <Menu.Item key="1">
            <Link to="/adminMenu">Menu</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/orders">Orders</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/seatings">Seatings</Link>
          </Menu.Item>
          {/* <Menu.Item key="4">
            <Link to="/user">User</Link>
          </Menu.Item> */}
          <Menu.Item key="5">
            <Link to="/table">Table</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
    </PermissionButton>
  );
}
