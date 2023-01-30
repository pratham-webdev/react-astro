import Card from "./Card"

let date = new Date();

export default function MainContent(props){

    return(
        <div id="MainContent" className="p-3">
            <h2 className="py-3">🌞 Daily Horoscopes - {date.toDateString()} 🌚</h2>
            <p className="text-muted small fst-italic">Data crawled from <a className="link-info" href="https://nypost.com/horoscopes/">NYPost</a></p>
            {props.array.map((item, index) => (
            <Card id={item.id} key={index} name={item.name} date={item.date} text={item.desc} size="" />
        ))}
        {window.innerWidth < 1024 ? <button id="FindButton" type="button" className="btn btn-sm btn-primary" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#LeftNavbar">Find my horoscope</button> : ''}
        </div>
    )
}