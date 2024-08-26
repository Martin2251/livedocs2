import React from 'react'
import { Button } from './ui/button'

const AddDocumentBtn = ({userId, email }:AddDocumentBtnProps) => {
  return (
  <Button>
    <p className='hidden sm:block'>Start a blank document</p>
  </Button>
  )
}

export default AddDocumentBtn
