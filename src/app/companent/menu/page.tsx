import React from 'react';
import { Button, Flex } from 'antd';
import Link from 'next/link';
import "./menu.css";

const Menu = () => {
  return (
  
    <div className="menu">
          <div className="logo"><img src="/logo.png" alt="" /> </div>
          <div className='buttons'>
      <Flex gap="small" wrap>
        <Link href="/">
          <Button type="primary">Home</Button>
        </Link>
        <Link href="/blog">
          <Button>Blog</Button>
        </Link>
        <Link href="/transport">
          <Button type="dashed">Transport</Button>
        </Link>
      </Flex></div>
    </div>
  );
};

export default Menu;