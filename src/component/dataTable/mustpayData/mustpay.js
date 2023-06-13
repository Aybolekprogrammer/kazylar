import React, { useState } from "react";
import "../dataTable.scss";
import TableFooter from "../tableFooter";
import useTable from "../useTable";
import MustpayModal from "../../modal/mustpayModal/mustpayModal";

const MustpayTable = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const [mustpayModal, setMustpayModal] = useState(false);

    return (
        <>
            <table className='table'>
                <thead className='tableRowHeader'>
                    <tr>
                        <th className='tableHeader'>T/b</th>
                        <th className='tableHeader'>Bergidaryň ady/familaýasy</th>
                        <th className='tableHeader'>Doglan senesi</th>
                        <th className='tableHeader'>Telefon belgisi</th>
                        <th className='tableHeader'>Öý salgysy</th>
                        {/* <th className='tableHeader'>Passport nusgasy</th> */}
                        <th className='tableHeader'>Işleýän ýeri</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el,id) => (
                        <tr className='tableRowItems' key={el.id}>
                            <td className='tableCell'>{id+1}</td>
                            <td
                                className='tableCell'
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => {setMustpayModal(!mustpayModal)}}    
                            >
                                {el.name_and_lastname}
                            </td>
                            <td className='tableCell'>{el.birthday}</td>
                            <td className='tableCell'>{el.phone_number}</td>
                            <td className='tableCell'>{el.address}</td>
                            <td className='tableCell'>{el.job_status}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
            {/* <MustpayModal  activeModal={mustpayModal} setActiveModal={setMustpayModal} id='3'/> */}
        </>
    );
};

export default MustpayTable;