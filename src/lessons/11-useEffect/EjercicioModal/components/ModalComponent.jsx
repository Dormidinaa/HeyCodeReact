import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalComponent = ({
  handleClose,
  show,
  handleChange,
  user,
  addUserList,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Formulario de Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <label htmlFor="">Nombre: </label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={user.name}
          name="name"
        />
        <label htmlFor="">Apellido: </label>
        <input
          type="text"
          placeholder="Enter Surname"
          onChange={handleChange}
          value={user.lastname}
          name="lastname"
        />
        <label htmlFor="">Email: </label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={handleChange}
          value={user.email}
          name="email"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          onChange={handleChange}
          value={user.password}
          name="password"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={addUserList}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
