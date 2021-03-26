import { Link } from "react-router-dom";

const BlogList = ({ heros, title}) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {heros.map((hero)=>(
                <div className="blog-preview" key={hero.id}>
                        <h2>{ hero.name }</h2>
                        <img src={hero.images.sm}/>
                        <h3>Pouvoir: </h3>
                        <ul>
                            <li>Intelligence :{ hero.powerstats.intelligence}</li>
                            <li>Pouvoir: { hero.powerstats.strength}</li>
                            <li>Vitesse: { hero.powerstats.speed}</li>
                            <li>Combat: { hero.powerstats.combat}</li>
                        </ul>
                        <h3>Apparance: </h3>
                        <ul>
                            <li>Genre: { hero.appearance.gender}</li>
                            <li>Race: { hero.appearance.race}</li>
                            <li>Yeux: { hero.appearance.eyeColor}</li>
                        </ul>
                </div>
            ))}
        </div>
    );
}

export default BlogList;