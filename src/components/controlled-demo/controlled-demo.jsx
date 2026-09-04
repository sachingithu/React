import { Navbar } from "../../controlled-components/Navbar";

export function ControlledDemo(){
    return(
        <div className="container-fluid">
            <Navbar brandLogo='bi bi-amazon' brandTitle='Amazon India' menuItems={['Home','Fashion','Electronics','Offers','Contact','Partner']}/>
            <Navbar brandLogo='bi bi-facebook' brandTitle='Facebook' menuItems={['Home','Profile','Developers','Services']}/>
        </div>
    )
}