// import pour mdbreact
import { SessionProvider } from "next-auth/react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps:{ session, ...pageProps }, }){
  return(
    <SessionProvider session={session}>
       <Component {...pageProps} />
    </SessionProvider>
  ) 
}

export default MyApp
