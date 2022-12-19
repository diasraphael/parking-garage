import React from 'react'

interface FieldProps {
  label: string
  value: number
}

const Field = (props: FieldProps) => {
  const { label, value } = props
  return (
    <div>
      <span className="text-lg">{label} : </span>
      <span className="text-lg font-medium">{value}</span>
    </div>
  )
}

export default Field
