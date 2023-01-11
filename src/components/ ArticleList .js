import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const postList = posts.map(post=>{
       return(
        <main key={post.id}>
            <Article post={post} />
        </main>
       )
    })
return(
    <>
    {postList}
    </>
)

}
export default ArticleList;
