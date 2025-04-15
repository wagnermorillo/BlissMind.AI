import React, { useState, useMemo, useEffect, lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  FileSearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CommentOutlined,
  ContactsOutlined,
  CarryOutOutlined,
  StarOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import '../styles/styles.css';
const { Header, Sider, Content } = Layout;
const DropDown = lazy(() => import("../pages/dashboard/dropdown"));

const items = [
  {
    key: "grp",
    label: "General",
    type: "group",
    children: [
      {
        key: "1",
        label: "Dashboard",
        icon: <DashboardOutlined />,
        path: "/dashboard-patient",
      },
      {
        key: "2",
        label: "Profesionales",
        icon: <ContactsOutlined />,
        path: "/Profesionales",
      },
      {
        key: "3",
        label: "Actividades",
        icon: <FileSearchOutlined />,
        path: "/Actividades",
      },
      {
        key: "4",
        label: "Chat",
        icon: <CommentOutlined />,
        path: "/Chat",
      },
      {
        key: "5",
        label: "Calendario",
        icon: <CarryOutOutlined />,
        path: "/calendar",
      },
      {
        key: "6",
        label: "Chat con AI",
        icon: <StarOutlined />,
        path: "/chat-ai",
      },
    ],
  },
  {
    key: "grp2",
    label: "Recursos y Soporte",
    type: "group",
    children: [
      {
        key: "7",
        label: "Recursos",
        icon: <ReadOutlined />,
        path: "/Recursos",
      },
      {
        key: "8",
        label: "Soporte / Help",
        icon: <QuestionCircleOutlined />,
        path: "/Soporte",
      },
    ],
  },
];

const DefaultLayoutPatient = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //useMemo sirve para guardar un valor calculado y evitar que se vuelva a calcular si sus dependencias no han cambiado
  // crear un mapa de ruta -> key para búsqueda eficiente
  const pathToKeyMap = useMemo(() => {
    const map = new Map();

    items.forEach((group) => {
      if (group.children) {
        group.children.forEach((item) => {
          if (item.path) {
            map.set(item.path, item.key);
          }
        });
      }
    });

    // el valor por defecto
    map.set("default", "1");

    return map;
  }, []);

  // crear un mapa de key -> ruta para búsqueda eficiente
  const keyToPathMap = useMemo(() => {
    const map = new Map();

    items.forEach((group) => {
      if (group.children) {
        group.children.forEach((item) => {
          if (item.key && item.path) {
            map.set(item.key, item.path);
          }
        });
      }
    });

    // el valor por defecto
    map.set("default", "/dashboard");

    return map;
  }, []);

  // para actualizar la selección basada en la ruta actual
  useEffect(() => {
    const key =
      pathToKeyMap.get(location.pathname) || pathToKeyMap.get("default");
    setSelectedKey(key);
  }, [location.pathname, pathToKeyMap]);

  // función para manejar el click en los ítems del menú
  const handleMenuClick = ({ key }) => {
    const path = keyToPathMap.get(key) || keyToPathMap.get("default");
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => {
          setCollapsed(collapsed);
        }}
        breakpoint="sm"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
          background: "#fff",
        }}
      >
        <div
          style={{
            textAlign: collapsed ? "center" : "left",
            padding: collapsed ? "20px 0px" : "16px",
            borderRight: "1px solid #f0f0f0"
          }}
        >
          <h1
            style={{
              fontSize: collapsed ? "18px" : "24px",
              fontWeight: "bolder",
              color: "#14279B",
              transition: "all 0.3s ease-in-out",
              display: "inline-block",
              whiteSpace: "nowrap",
              margin: 0
            }}
            className="outfit-bold"
          >
            {collapsed ? "BM.AI" : "BlissMind.AI"}
          </h1>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          style={{ height: "100%", fontWeight: 600 }}
          className="menu"
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            position: "fixed",
            top: 0,
            left: collapsed ? 80 : 200,
            right: 0,
            zIndex: 101,
            height: 64,
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "15px",
            borderBottom: "1px solid #f0f0f0"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <DropDown />
        </Header>
        <Content
          style={{
            marginTop: 38,
            padding: "24px 0px 8px",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            background: colorBgContainer,
            borderRadius: 0
          }}
        >
          {children}
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayoutPatient;
