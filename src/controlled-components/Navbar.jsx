
export function Navbar(props) {
    {

        if (props.orientation === "landscape") {
            return(
            <nav className="d-flex flex-row my-2 justify-content-between align-items-center p-2 border border-1 border-secondary">
                <div className="fw-b fs-4">
                    <span className={props.brandLogo}></span>
                    <span className={props.brandTitle}></span>
                </div>
                <div>
                    {
                        props.menuItems.map(item => <span key={item} className="mx-4">{item}</span>)
                    }
                </div>
                <div>
                    <span className="bi bi-person-fill"></span>
                    <span className="bi bi-heart mx-2"></span>
                    <span className="bi bi-cart4"></span>
                </div>
            </nav>
        }
        else {
            <nav className="d-flex flex-column my-2 justify-content-between align-items-center p-2 border border-1 border-secondary" style={{ width: '200px' }}>
                <div className="fw-b fs-4">
                    <span className={props.brandLogo}></span>
                    <span className={props.brandTitle}></span>
                </div>
                <div>
                    {
                        props.menuItems.map(item => <span key={item} className="mx-4">{item}</span>)
                    }
                </div>
                <div>
                    <span className="bi bi-person-fill"></span>
                    <span className="bi bi-heart mx-2"></span>
                    <span className="bi bi-cart4"></span>
                </div>
            </nav>
                )
        }
    
    }
}