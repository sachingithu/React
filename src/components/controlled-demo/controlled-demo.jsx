import { useState } from "react";
import { Navbar } from "../../controlled-components/Navbar";
import { Datagrid } from "../../controlled-components/datagrid";
export function ControlledDemo(){
    const [employee] = useState([{FirstName:'Sachin',LastName:'Jadhav',Designation:'Manager',Salary:70000},
                                              {FirstName:'Rakesh',LastName:'Mohite',Designation:'Engineer',Salary:40000}])
    const [products]=useState([{Name:"Tv",price:30000},{Name:"Mobile",price:20000},{Name:"Watch",price:5000}])
    return(
        <div className="container-fluid">
            {/* <Navbar theme='bg-dark text-white' orientation='landscape' brandLogo='bi bi-amazon' brandTitle='Amazon India' menuItems={['Home','Fashion','Electronics','Offers','Contact','Partner']}/>
            <Navbar theme='bg-primary text-white' brandLogo='bi bi-facebook' brandTitle='Facebook' menuItems={['Home','Profile','Developers','Services']}/> */}
            <Datagrid width='w-50' theme='table-dark' caption='Employee Details' data={employee}/>
            <hr />
            <Datagrid width='w-50' theme='table-danger' caption='Product Details' data={products}/>
        </div>
    )
}