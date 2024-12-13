// DATA
import AppCard from "./AppCard";
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

const printEmptyState = () => (<p>No published posts</p>)


function AppMain() {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    {posts.length > 0 ? printCard(posts) : printEmptyState()}
                </div>
            </div>
        </main>
    )
}

export default AppMain;