import { useState } from "react";
import "./Modal.css";

function Modal() {
    const [modal, setModal] = useState(false);

    return (
        <div className="main">
            <button 
                className={`open ${modal ? "faded" : ""}`} 
                onClick={() => setModal(true)}
            >
                Open Modal
            </button>

            {/* Modal (conditionally rendered) */}
            {modal && (
                <div className="modal">
                    <h1>Modal Content</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ad, inventore odio magni laudantium ipsam repudiandae fuga 
                        consequatur asperiores voluptas.
                    </p>
                    <button onClick={() => setModal(false)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Modal;
