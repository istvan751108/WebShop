import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { PageFooter } from "./footer";
import { PageHeader } from "./header";
import PageNavbar from "./navbar";

const Layout: FC = () => {

  return (
    <>
      <PageHeader />
      <section>
        <PageNavbar />
        <article><Outlet /></article>
      </section>
      <PageFooter />
    </>
  );
};

export default Layout;
