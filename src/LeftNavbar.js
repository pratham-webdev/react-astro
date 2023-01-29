import Astrosigns from "./Astrosigns"

import NavAnchor from "./NavAnchor"

export default function LeftNavbar(props) {
    return (
        <div id="LeftNavbar" className="ps-3 py-3 collapse show">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>
                        Browse by Name
                        </h6>
                        {window.innerWidth < 1024 ? <button type="button" class="btn btn-sm btn-close" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#LeftNavbar"></button> : ''}
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