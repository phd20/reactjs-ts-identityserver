import * as React from "react";
import userManager from "../userManager";
import { Link } from "react-router-dom";
import { Button, Layout, Menu } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Item } = Menu;

interface NavProps {
  isConnected: boolean;
  path: string;
  children: any;
}

const Nav = (props: NavProps) => {
  const logout = (event: any) => {
    event.preventDefault();
    userManager.signoutRedirect();
    userManager.removeUser();
  };

  const login = () => {
    // pass the current path to redirect to the correct page after successfull login
    userManager.signinRedirect({
      data: { path: props.path }
    });
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Item>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </Item>
          <Item>
            <Link to="/counter" className="btn btn-link">
              Counter
            </Link>
          </Item>
          <Item>
            <Link to="/user" className="btn btn-link">
              User
            </Link>
          </Item>
          {props.isConnected ? (
            <Item>
              <Button type="default" onClick={event => logout(event)}>
                Logout
              </Button>
            </Item>
          ) : (
            <Item>
              <Button type="default" onClick={() => login()}>
                Login
              </Button>
            </Item>
          )}
        </Menu>
      </Header>
      <Layout>
        <Sider theme="light">Sider</Sider>
        <Content>{props.children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    // <header className="navbar">
    //   <section className="navbar-section">

    //   </section>
    //   <section className="navbar-center">
    //     <a href="#" className="navbar-brand mr-2">
    //       <b>react-ts-identityserver</b>
    //     </a>
    //   </section>
    //   <section className="navbar-section">
    //     <a href="https://github.com/ThunderDev1/reactjs-ts-identityserver"
    //       className="btn btn-link"
    //       rel="noopener noreferrer"
    //       target="_blank"
    //     >GitHub</a>
    //   </section>
    // </header>
  );
};

export default Nav;
