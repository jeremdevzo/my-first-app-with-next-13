

const fecthComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 5000))
    
   
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
          next: {
              revalidate: 60
         }
     }).then(res => res.json())
}


export default async function Post({ params }) {
    const { id } = params
    const comments = await fecthComments(id)

    return (
        <ul style={{ fontSize: '12px', background: '#444' }}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}