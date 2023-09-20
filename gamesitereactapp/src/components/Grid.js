import Button from "./Button";

export default function Grid(props) {
  return (
    <div style={GridStyle}>
      <Button name="reactions" />
      <Button name="memory" />
      <Button name="logic" />
      <Button name="attention to detail" />
      <Button name="ingenuity" />
    </div>
  );
}

const GridStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid red",
  height: "50%",
  width: "50%",
  minWidth: "318px",
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto auto",
  placeItems: "center",
};
