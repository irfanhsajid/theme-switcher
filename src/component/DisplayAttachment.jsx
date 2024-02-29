import { Chip } from '@mui/material'
import React from 'react'
import { polishStringData } from '../../utils/helperFunction'

const DisplayAttachment = ({ attachment }) => {
  return (
    <a target='_blank' href={attachment?.attachment_file}>
      <Chip variant="outlined" size="small" label={polishStringData(attachment?.attachment_file.split("/").pop())} />
    </a>
  )
}

export default DisplayAttachment