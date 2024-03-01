import { Debuger } from "../components/debuger";
import { tokenService } from "../src/service/auth/tokenService";
import nookies from "nookies";

export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page SSR</h1>
      <Debuger values={props} />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(tokenService.get());
  const cookies = nookies.get(context);
  console.log("cookies ", cookies);

  return {
    props: {
      token: tokenService.get(context)
    }
  }
}
