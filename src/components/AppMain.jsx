// DATA
import AppCard from "./AppCard";
import AppTags from "./AppTags";
import posts from "../data/posts";

// Functions
/**
 * Funzione che stampa le card partendo da un array di dati
 * @param {array} dataArray // array di dati da stampare
 */
const printCard = (dataArray) =>
    dataArray.map(curData =>
    (curData.published && (<div key={curData.id} className="col">
        <AppCard
            title={curData.title}
            image={curData.image}
            content={curData.content}
            tags={curData.tags}
        />
    </div>)))

/**
 * Funzione che stampa tags senza ripetizioni
 * @param {array} dataArray // array di oggeti da cui prendere i tag
 * @returns {*}
 */
const printFilteredTags = (dataArray) => {
    const tags = [];
    dataArray.map(curData => {
        const curTags = curData.tags;
        curTags.map(curTag => !tags.includes(curTag) && tags.push(curTag));
    })
    return <AppTags tags={tags} />;
}

const printEmptyState = () => (<p>No published posts</p>)

// OUTPUT
function AppMain() {
    return (
        <main className="main">
            <div className="container">
                <section className="tag-section">
                    {printFilteredTags(posts)}
                </section>
                <section className="cardsection">
                    <div className="row">
                        {posts.length > 0 ? printCard(posts) : printEmptyState()}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AppMain;