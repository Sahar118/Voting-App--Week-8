const Modal = ({ closeModal, message }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Error!</h2>
                <h3> {`${message.join(', ')}`}.</h3>
                <button className="btn close-modal-btn" onClick={closeModal}>
                    ok
                </button>
            </div>
        </div>
    );
}