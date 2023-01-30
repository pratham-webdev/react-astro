import NavAnchor from "./NavAnchor"

export default function LeftNavbar(props) {
    return (
        <div id="LeftNavbar" className={`ps-3 py-3 collapse ${window.innerWidth > 1023 ? 'show' : ''}`}>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                        <h6 className="mb-0 text-muted">
                        Browse by Name
                        </h6>
                        {window.innerWidth < 1024 ? <button type="button" className="btn btn-sm btn-close btn-close-white" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#LeftNavbar"></button> : ''}
                    </div>
                    <div className="pt-2">
                        {props.array.map((item, index) => (
                            <NavAnchor href={item.id} key={index} name={item.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}