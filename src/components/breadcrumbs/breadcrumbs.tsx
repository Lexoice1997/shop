import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
// @ts-ignore
import { withRouter } from "react-router-dom";


const BreadcrumbsCom = (props: any) => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter((x: any) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push("/")}>Home</Link>
      ) : (
        <Typography> Home </Typography>
      )}
      {pathnames.map((name: any, index: any) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(BreadcrumbsCom);
