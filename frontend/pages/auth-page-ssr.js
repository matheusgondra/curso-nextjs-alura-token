import { Debuger } from "../components/debuger";

export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page SSR</h1>
      <Debuger values={props} />
    </div>
  );
}
