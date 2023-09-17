import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar";
import { Spinner } from "../Loader";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </Container>
    </>
  );
};
