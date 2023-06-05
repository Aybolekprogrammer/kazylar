import React, { useEffect, useState } from 'react';
import './home.scss';
import { KeyboardArrowDown, SearchOutlined } from '@mui/icons-material';
import { GetAllAlimonies } from '../../api/Queries/get.js';
import AlimonyTable from '../../component/dataTable/alimonyData/alimony';
import { places } from './places';

const Home = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [isClick2, setIsClick2] = useState(false);
    const [aliments, setAliments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await GetAllAlimonies()
            console.log(res);
            setAliments(res)
        }
        fetchData()
    }, [])

    return (
        <div className="home">
            <div className="homeContainer">
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
                                    <div className='list'>
                                        <div className="input" onClick={(e) => setIsClick2(!isClick2)}>
                                            <p className="searchMainName">Ýeri boýunça</p>
                                            <KeyboardArrowDown />
                                        </div>
                                        {isClick2 &&
                                            <div className="output">
                                                {places.map((place, index) => (
                                                    <li key={index}>
                                                        <span className="listName">
                                                            <span className="listPlaceName">{place.title} <span><KeyboardArrowDown /></span></span>
                                                            {place.content.map((c, i) => (
                                                                <li key={i} className="li">{c.name}</li>
                                                            ))}
                                                        </span>
                                                    </li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div>Ikinji</div>
                                    <div>Uchunji</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="dataTableContainer">
                    <AlimonyTable data={aliments.results ?? []} rowsPerPage={10} />
                </div>
            </div>
        </div>
    )
}

export default Home;