export default function Scroll({ children }) {
  return <div style={{ overflowY: "scroll", height: "800px" }}>{children}</div>;
}
