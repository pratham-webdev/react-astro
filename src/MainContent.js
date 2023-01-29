import Astrosigns from "./Astrosigns"

import Card from "./Card"

export default function MainContent(props){

    return(
        <div id="MainContent" className="p-3">
            <h2 className="py-3">🌞 Daily Horoscopes 🌚</h2>
            {props.array.map((item, index) => (
            <Card id={item.id} key={index} name={item.title} text={item.thumbnail.alt_text} size="" />
        ))}
        </div>
    )
}