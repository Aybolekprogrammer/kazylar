import React, { useState, useEffect } from "react";
import './bergidarlar.scss';
import { SearchOutlined } from '@mui/icons-material';
import { GetMustpay } from "../../api/Queries/get";
import MustpayTable from "../../component/dataTable/mustpayData/mustpay";

const Bergidarlar = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [mustpay, setMustpay] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await GetMustpay()
            console.log(res);
            setMustpay(res)
        }
        fetchData()
    }, [])

    return (
        <div className="brgMain">
            <div className="brgMainContainer">
                <h2>Ähli bergidarlaryň sanawy</h2>
                <div className="topSearch">
                    <div className="header-search">
                        <div className="form">
                            <input type="search" name="Search" placeholder="Gözle..." required />
                            <button type="submit" className="btn-default" aria-label="Left Align">
                                <SearchOutlined className="searchIcon" />
                                Gözle
                            </button>
                        </div>
                    </div>
                    <div className="dataFilter">
                        <div className="filterBox">
                            <div className="filterTop" onClick={() => setIsActiveModal(!isActiveModal)}>
                                Filterle
                            </div>
                            {isActiveModal &&
                                <div className="filterList">
                                    <li>Birinji</li>
                                    <li>Ikinji</li>
                                    <li>Uchunji</li>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="dataTable">
                    <MustpayTable data={mustpay.results ?? []} rowsPerPage={10} />
                </div>
            </div>
        </div>
    )
}


export default Bergidarlar;