export default function Card(props) {
    return (
        <div className="card mb-3" id={props.id} key={props.key} tabIndex="0">
            <div className="card-body">
                <div className="card-title h5 pb-3 border-bottom">{props.name} 
                <span className="card-title-sm ms-2">{props.date}</span>
                </div>
                <div className="card-text pt-2">{props.text}</div>
            </div>
        </div>
    )
}