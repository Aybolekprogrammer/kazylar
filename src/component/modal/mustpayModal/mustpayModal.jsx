import React, {useEffect, useState} from "react";
import "../modal.scss";
import person from '../../../images/login.png';
import { Get } from "../../../api/services/api_helpers";

const child = [
    { id: 1, name: "Jeren Amanowa", pdf: "Giňişleýin" },
    { id: 2, name: "Myrat Amanow", pdf: "Giňişleýin" },
    { id: 3, name: "Jemal Amanowa", pdf: "Giňişleýin" },
]

const MustpayModal = ({ activeModal, setActiveModal, id }) => {
    const [modal, setmodal] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            Get(`mustpayconfigbyid/${id}`)
            .then(function(res) {
                setmodal(res)
            } )     
        }         
        fetchData()
    }, [id])

    return (
        <div className="modall">
            <div className={activeModal ? "modalOut active" : "modalOut"} onClick={() => setActiveModal(false)}>
                <div className="blur"></div>
                <div className="modalBox" onClick={e => e.stopPropagation()}>
                        <div className="modalContainer" key={id}>
                            <div className="top">
                                <h3>Bergidar barada umumy maglumat</h3>
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
                                {/* <div className="flexBox">
                                    <div className="head">Aýalynyň ady:</div>
                                    <div className="text">{m.wife}</div>
                                    <div className="right">
                                        <button><a href={require("../../images/file.pdf")}>{m.pdf}</a></button>
                                    </div>
                                </div> */}
                                {/* <div className="flexBox2">
                                    <div className="leftHead">Çagalary:</div>
                                    <div className="rightName">
                                    {child.map((c) => (
                                        <div className="child" key={c.id}>
                                            <div className="text2">
                                                <span>{c.name}</span>
                                            </div>
                                            <div className="right2">
                                                <button><a href={require("../../images/file.pdf")}>{c.pdf}</a></button>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div> */}
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
                                <div className="flexBox">
                                    <div className="head">Işleýän ýeri:</div>
                                    <div className="text">{modal.job_status}</div>
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

export default MustpayModal;

