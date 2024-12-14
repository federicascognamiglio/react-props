import style from "./AppTags.module.css";

function AppTags({tags}) {
    return (tags.map((curTag, index) => <span key={index} className={`${style.tag} ${style[curTag]}`}>{curTag}</span>))
}
export default AppTags;





// function AppFilteredTags() {
//     const tags = [];
//     posts.forEach(curPost => {
//         const curTags = curPost.tags;
//         curTags.forEach(curTag => {
//             if (!tags.includes(curTag)) {
//                 tags.push(curTag)
//             }
//         })
//     })
//     return (tags.map(curTag => <span className={`${style.tag} ${style[curTag]}`}></span>))
// }