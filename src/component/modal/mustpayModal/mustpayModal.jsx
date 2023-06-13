import React, { useEffect, useState } from "react";
import "../modal.scss";
import person from '../../../images/login.png';
import { Get } from "../../../api/services/api_helpers";


const MustpayModal = ({ activeModal, setActiveModal, id }) => {

    const [modal, setmodal] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            Get(`mustpayconfigbyid/${id}`)
                .then(function (res) {
                    setmodal(res)
                })
        }
        fetchData()
    }, [id])

    const [pay, setPay] = useState([]);
    useEffect(() => {
        const fetchData2 = async () => {
            Get(`mustpayreceipts/${modal.id}`)
                .then(function (response) {
                    setPay(response)
                })
        }
        fetchData2()
    }, [modal.id])


    return (
        <div className="modall">
            <div className={activeModal ? "modalOut active" : "modalOut"} onClick={() => setActiveModal(false)}>
                <div className="blur"></div>
                <div className="modalBox" onClick={e => e.stopPropagation()}>
                    <div className="modalContainer" key={modal.id}>
                        <div className="top">
                            <h3>Bergidar barada umumy maglumat</h3>
                            <img src={person} alt="bergidar ady" />
                        </div>
                        <div className="flexBoxs">
                            <div className="flexBox">
                                <div className="head">Ady:</div>
                                <div className="text">{modal.name_and_lastname}</div>
                                <div className="right">
                                    <button><a href={require("../../../images/file.pdf")}></a>Giňişleýin</button>
                                </div>
                            </div>

                            <div className="flexBox2">
                                <div className="leftHead">Tölegleri:</div>
                                <div className="rightName">
                                    {pay.map((p) => (
                                        <div className="child" >
                                            <div className="text2">
                                                <span>{p.payment_date}</span>
                                            </div>
                                            <div className="right2">
                                                <button>Giňişleýin</button>
                                            </div>
                                        </div>
                                    ))}
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
                            <div className="flexBox">
                                <div className="head">Işleýän ýeri:</div>
                                <div className="text">{modal.job_status}</div>
                                <div className="right">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="out" onClick={() => setActiveModal(!activeModal)}>Çykmak</div>
                </div>
            </div>
        </div>
    )
}

export default MustpayModal;

