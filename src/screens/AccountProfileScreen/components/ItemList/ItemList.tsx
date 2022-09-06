import ListItem from 'components/ListItem'
import React, { ReactNode } from 'react'

export type ItemListTypeProps = React.HTMLAttributes<HTMLDivElement> & {
  right: ReactNode
  left: ReactNode
}
export default function ItemList({ left, right, ...props }: ItemListTypeProps) {
  return (
    <div {...props}>
      <ListItem />
      <div className="flex-1 self-center">{left}</div>
      <div className="flex-1 self-center">{right}</div>
    </div>
  )
}
