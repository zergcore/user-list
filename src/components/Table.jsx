import React from 'react'
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'

function Table({data}) {
  return (
    <BaseTable data={data} width={600} height={400}/>
  )
}

export default Table