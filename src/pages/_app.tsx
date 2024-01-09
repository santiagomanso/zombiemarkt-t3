import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import AppContainer from "@/components/app-container";
import Navbar from "@/components/navbar/navbar";
import Container from "@/components/container";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppContainer>
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </AppContainer>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
