// DATA
import AppCard from "./AppCard";
import posts from "../data/posts";

// Functions
const printCard = (dataArray) =>
    dataArray.map(curData =>
    (curData.published && <AppCard
        id={curData.id}
        title={curData.title}
        image={curData.image}
        content={curData.content}
        tags={curData.tags}
    />))

const printEmptyState = () => (<p>No published posts</p>)


function AppMain() {
    return (
        <main className="main">
            <div className="container">
                {posts.length > 0 ? printCard(posts) : printEmptyState()}
            </div>
        </main>
    )
}

export default AppMain;