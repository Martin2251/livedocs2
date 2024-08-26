import { useOthers } from '@liveblocks/react/suspense'
import React from 'react'

const ActiveCollaborators = () => {
    const others = useOthers()
    const collaborators = others.map((other) => other.info)
  return (
    <div>
      <ul className='collaborators-list'>
        {collaborators.map(({id,avatar,name,color}) =>(
            <li key={id}>

            </li>
        ))}

      </ul>
    </div>
  )
}

export default ActiveCollaborators
