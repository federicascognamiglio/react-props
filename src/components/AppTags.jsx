import posts from "../data/posts";

function AppTags() {
    const tags = [];
    posts.forEach(curPost => {
        const curTags = curPost.tags;
        curTags.forEach(curTag => {
            if (!tags.includes(curTag)) {
                tags.push(curTag)
            }
        })
    })
    return (tags.map(curTag => <span className={`${style.tag} ${style[curTag]}`}></span>))
}

export default AppTags;