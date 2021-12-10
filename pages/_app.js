import '../styles/globals.css'
import { useHistory, useLocation} from "react-router-dom";


function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
