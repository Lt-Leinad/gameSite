export default function Button(props) {
  return <button style={ButtonStyle}>{props.name}</button>;
}

const ButtonStyle = {
  height: "calc(50vh / 3)",
  width: "calc(50vw / 3)",
  minWidth: "106px",
  border: "1px solid black",
  backgroundColor: "#ffffff",
};
