import { LikeButton } from "./LikeButton"
import Link from "next/link"

//hace el post con el fetch
const fecthPost = () => {
    console.log('Fetching posts!!!!!')
   //incremental  static regeneration
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 10
        }
    }).then(res => res.json())
}
export async function ListOfPosts() {
    const posts = await fecthPost()
    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href='/posts/[id]' as= {`/posts/${post.id}`}>
            <h2 style={{ color: '#09f' }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
            </Link>
        </article>
    ))
}