export default function NavAnchor(props){
    return(
        <a className="btn btn-sm btn-new d-flex mb-2 text-start" href={`#${props.href}`} key={props.key}>{props.name}</a>
    )
}