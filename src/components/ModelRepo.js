import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Col, Collection, CollectionItem, Row } from 'react-materialize';
import "../index.css";

const customStyles = {
    contenido: {
        arriba: '50%',
        izquierda: '50%',
        derecha: 'auto',
        abajo: 'auto',
        marginRight: '-50%',
        transform: 'traducir(-50%, -50%)',
    },
};

export default function ModelRepo() {
    const [repo, setRepo] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    //consumir api
    const urlRepo = "https://api.github.com/repos/{owner}/{repo}/contents"

    const fetchApi = async () => {
        const res = await fetch(urlRepo);
        const resJson = await res.json();
        console.log(resJson);
        setRepo(resJson);
    }

    useEffect(() => {
        fetchApi();
    }, [])


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Repostorios:
                </h2>
                <button onClick={closeModal}>close</button>
                <Row>
                    <Col m={6} s={12} >
                        <Collection header="First Names">
                            <CollectionItem>
                                Alvin
                            </CollectionItem>
                            <CollectionItem>
                                Alvin
                            </CollectionItem>
                            <CollectionItem>
                                Alvin
                            </CollectionItem>
                            <CollectionItem>
                                Alvin
                            </CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

const Overlay =