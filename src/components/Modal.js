import Button from "./UI/Button";
import Card from "./UI/Card";
import "./Modal.css";

function Modal(props) {
  const errorDescr = props.error;
  function checkClickOnOverlay(e) {
    if (e.target.classList.contains(`overlay`)) {
      props.onCloseModal();
    }
  }
  return (
    <div onClick={checkClickOnOverlay} className="overlay">
      <Card className="modal">
        <div className="modal__title">Invalid Input</div>
        <div className="modal__errorDescr">{errorDescr}</div>
        <Button onClick={props.onCloseModal}>Okay</Button>
      </Card>
    </div>
  );
}

export default Modal;
