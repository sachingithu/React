export function Datagrid(props){
    return(
        // <table className="table table-hover caption-top">
        //     <caption>{props.caption}</caption>
        //     <thead>
        //         <tr>
        //             {
        //                 Object.keys(props.data[0]).map(key=>
        //                     <th key={key}>{key}</th>
        //                 )
        //             }
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             props.data.map(item=>
        //                 <tr key={item}>
        //                     {
        //                         Object.values(item).map(value=>
        //                             <td key={value}>{value}</td>
        //                         )
        //                     }
        //                 </tr>
        //             )
        //         }
        //     </tbody>
        // </table>

        <table className={`table table-hover caption-top ${props.theme} ${props.width}`}>
               <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=>
                            <th key={key}>{key}
                            <div className="dropdown  d-inline mx-1">
                                <button data-bs-toggle="dropdown" className="btn btn-dark dropdown-toggle"></button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"><span className="bi bi-sort-alpha-down">Sort Ascending</span></li>
                                    <li className="dropdown-item"><span className="bi bi-sort-alpha-up">Sort Descending</span></li>
                                    <li className="dropdown-item"><span className="bi bi-funnel">Filter</span></li>
                                </ul>
                            </div>
                            </th>
                        )
                    }
                     <th>Actions</th>
                </tr>             
            </thead>
            <tbody>
                {
                    props.data.map(item=>
                        <tr key={item}>
                            {
                                Object.values(item).map(value=>
                                    <td key={value}>{value}</td>
                                )
                            }
                            <td>
                                <button className="bi bi-pen-fill btn btn-warning"></button>
                                <button className="bi bi-trash-fill btn btn-danger mx-3"></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}