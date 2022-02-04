import { Modal } from "react-bootstrap";

const SideModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contain-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="mobile-menu">
                    Modal heading
                </Modal.Title>
            </Modal.Header>

        </Modal>
    );
}

export default SideModal;