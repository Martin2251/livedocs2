import React from 'react'
import { Button } from './ui/button'

const AddDocumentBtn = ({userId, email }:AddDocumentBtnProps) => {
    const addDocumentHandler = async () = >{

    }
  return (
  <Button type="submit" onClick={addDocumentHandler} className='gradient-blue flex gap-1 shadow-md'>
    <p className='hidden sm:block'>Start a blank document</p>
  </Button>
  )
}

export default AddDocumentBtn
