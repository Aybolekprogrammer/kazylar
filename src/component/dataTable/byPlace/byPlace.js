import React, { useState} from "react";
import "../dataTable.scss";
import TableFooter from "../tableFooter";
import useTable from "../useTable";

const Byplace = ({data, rowsPerPage}) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage); 

    return (
        <>
      <table className='table'>
        <thead className='tableRowHeader'>
          <tr>
            <th className='tableHeader'>T/b</th>
            <th className='tableHeader'>Bergidaryň ady/familaýasy</th>
            <th className='tableHeader'>Algydaryň ady/familaýasy</th>
            <th className='tableHeader'>Alimenti töläp başlan wagty</th>
            <th className='tableHeader'>Işiň döredilen senesi</th>
            <th className='tableHeader'>Karary çykaran</th>
            <th className='tableHeader'>Bölüm</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el, id) => (
            <tr className='tableRowItems' key={el.id}>
              <td className='tableCell'>{id}</td>
                <td 
                  className='tableCell'
                  style={{cursor: 'pointer'}}
                               
                 >
                {el.must_pay}
              </td>
              <td className='tableCell' >{el.recipient}</td>
              <td className='tableCell'>{el.began_paying}</td>
              <td className='tableCell'>{el.created_at}</td>
              <td className='tableCell'>{el.ruling}</td>
              <td className='tableCell'>{el.Category}</td>              
            </tr>
          ))}
        
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      {/* <RecipientModal activeModal={recipientModal} setActiveModal={setRecipientModal} id='1'/>
      <MustpayModal  activeModal={mustpayModal} setActiveModal={setMustpayModal} id='2'/> */}
    </>
    )
}

export default Byplace;