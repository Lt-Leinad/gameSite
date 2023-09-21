import Button from "./Button";

export default function Grid(props) {
  return (
    <div className="gridandtitle">
      <h1 className="Title">Intelligames</h1>
      <div className="grid">
        <Button name="reactions" />
        <Button name="memory" />
        <Button name="logic" />
        <Button name="a2d" />
        <Button name="ingenuity" />
        <Button name="a2d" />
      </div>
    </div>
  );
}
