import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const [show, setShow] = useState(false);
const PushNotificationModal = () => {

  return (
    <div className="text-center">
        hola
      <Button variant="primary" onClick={() => setShow(true)}>
        Mostrar Notificación
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body>
          ¡Tienes una nueva notificación! 🎉
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PushNotificationModal;
