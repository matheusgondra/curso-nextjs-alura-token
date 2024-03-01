export function Debuger({ values }) {
  return (
    <pre>
      {JSON.stringify(values, null, 2)}
    </pre>
  );
}
