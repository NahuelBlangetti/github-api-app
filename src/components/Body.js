import React, { useEffect, useState } from "react";
import Paginator from "./Paginator";
import Modal from 'react-modal';
import { Button, Col, Collection, CollectionItem, Row } from 'react-materialize';
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

export default function Body() {

    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resposPerPage, setResposPerPage] = useState(10);
    const cantRepos = repos.length / resposPerPage;

    const [modalIsOpen, setIsOpen] = useState(false);
    const [repositorio, setRepositorio] = useState([]);
    const [nameRepo, setNameRepo] = useState([]);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    //consumir ruta repositorio cotent
    const fetchApiRepo = async (repoSelect) => {
        setNameRepo(repoSelect.name);
        const url = `https://api.github.com/repos/${repoSelect.owner.login}/${repoSelect.name}/contents`;
        const res = await fetch(url);
        const resJson = await res.json();
        setRepositorio(resJson)
        openModal()
    }

    //consumir ruta repositorios all
    const fetchApi = async () => {
        const res = await fetch("https://api.github.com/repositories");
        const resJson = await res.json();
        console.log(resJson);
        setRepos(resJson);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    const listItemsRepositorio = repositorio.map((repositorio) =>
        <CollectionItem>
            <p class="fst-normal">
                {repositorio.name} - <a href={repositorio._links.html} class="indigo-text darken-4 font-small">View Folder <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                </svg> </a>
            </p>
        </CollectionItem>
    );


    const listItems = repos.slice((currentPage - 1) * resposPerPage, (currentPage - 1) * resposPerPage + resposPerPage).map((repos) => {
        const repoSelect = repos;
        return (
            <li key={repos.id} className="row collection-item">
                <div class="col2">
                    <h5 class="fst-normal mayus">
                        {repos.name}
                    </h5>
                    <p class="fst-italic">
                        {repos.description}
                    </p>
                </div>
                <div class="col1">
                    <a class="secondary-content btn-floating btn-small waves-effect waves-light indigo darken-4" onClick={() => fetchApiRepo(repoSelect)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </a>
                </div>
            </li>
        )
    }
    );

    return (
        <div class="m-5 conteiner">
            <div>
                <ul className="collection with-header stripedstriped">
                    {listItems}
                </ul>
            </div>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="modal-overlay"
                className="modal-content">
                <Button className="secondary-content button indigo darken-4" onClick={closeModal}>X</Button>
                <h5>Repostorio By: <a className="mayus indigo-text darken-4">{nameRepo}</a></h5>
                <hr />
                <Row>
                    <Col s={12}>
                        <Collection>
                            {listItemsRepositorio}
                        </Collection>
                    </Col>
                </Row>
            </Modal>
            <Paginator
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                cantRepos={cantRepos}
            />
        </div>
    )
}