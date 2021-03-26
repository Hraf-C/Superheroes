import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data: heros, isPending, error } = useFetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
    return(
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Chargement...</div>}
            {heros && <BlogList heros={heros} title="Tous Les superhéros!"/>}
        </div>
    );
}

export default Home;