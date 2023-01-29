import Astrosigns from "./Astrosigns"

import NavAnchor from "./NavAnchor"

export default function LeftNavbar(props) {
    return (
        <div id="LeftNavbar" className="ps-3 py-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>
                        Browse by Name
                        </h5>
                        <button type="button" class="btn btn-sm btn-close" aria-label="Close"></button>
                    </div>
                    <div className="pt-2">
                        {props.array.map((item, index) => (
                            <NavAnchor href={item.id} key={index} name={item.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}