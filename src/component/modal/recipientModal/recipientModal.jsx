import React, {useEffect, useState} from "react";
import "../modal.scss";
import person from '../../../images/login.png';
import { Get } from "../../../api/services/api_helpers";

const RecipientModal= ({ activeModal, setActiveModal, id }) => {
    const [modal, setmodal] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            Get(`recipientconfigbyid/${id}`)
            .then(function(res) {
                setmodal(res)
            } )     
        }         
        fetchData()
    }, [])

    return (
        <div className="modall">
            <div className={activeModal ? "modalOut active" : "modalOut"} onClick={() => setActiveModal(false)}>
                <div className="blur"></div>
                <div className="modalBox" onClick={e => e.stopPropagation()}>
                        <div className="modalContainer" key={id}>
                            <div className="top">
                                <h3>Algydar barada umumy maglumat</h3>
                                <img src={person} alt="bergidar ady" />
                            </div>
                            <div className="flexBoxs">
                                <div className="flexBox">
                                    <div className="head">Ady:</div>
                                    <div className="text">{modal.name_and_lastname}</div>
                                    <div className="right">
                                        <button><a href={require("../../../images/file.pdf")}>pdf</a></button>
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Telefon nomeri:</div>
                                    <div className="text">{modal.phone_number}</div>
                                    <div className="right">
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Öý salgysy:</div>
                                    <div className="text">{modal.address}</div>
                                    <div className="right">
                                    </div>
                                </div>
                                <div className="flexBox">
                                    <div className="head">Doglan senesi:</div>
                                    <div className="text">{modal.birthday}</div>
                                    <div className="right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="out" onClick={() => setActiveModal(!activeModal)}>Chykmak</div>
                </div>
            </div>
        </div>
    )
}

export default RecipientModal;

