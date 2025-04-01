import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space, Flex, Avatar, Typography } from 'antd';
const { Title, Text } = Typography;
const items = [
  {
    key: '1',
    label: "hola"
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: "hola",
    disabled: true,
  },
  {
    key: '3',
    label: "hola",
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
const DropDown = () => (
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        <Flex align="center" gap={5} style={{padding : "0"}}>
          <Avatar size="medium" icon={<UserOutlined />} />
          <Flex vertical>
            <Text strong className='font-days'>John Doe</Text>
            <Text className='font-days' type="secondary">johndoe@gmail.com</Text>
          </Flex>
        </Flex>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDown;