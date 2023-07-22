'use client'

import { useState } from "react"

export  function Counter(){
    const   [Count, SetCount] = useState(0)
    return(
        <div>
            <p>Count:{Count}</p>
            <button onClick={()=>SetCount(Count + 1)}>Increment</button>
        </div>
    )
}