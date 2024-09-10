import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider} from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <ClerkProvider {...pageProps}>
      <html lang="en">
        <body>
          <Component {...pageProps} />
        </body>
      </html>
      </ClerkProvider>      
    </div>
  );
};

export default api.withTRPC(MyApp);
