export default function Card(props) {
    return (
        <div className="card mb-3" id={props.id} key={props.key} tabIndex="0">
            <div className="card-body">
                <div className="card-title h5">{props.name} 
                {/* <span className="card-title-sm small text-muted ms-2">{props.month}</span> */}
                </div>
                <div className="card-text">{props.text}</div>
            </div>
        </div>
    )
}