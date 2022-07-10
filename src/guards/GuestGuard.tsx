import { ReactElement } from "react"

function GuestGuard(props: { children: ReactElement }) {
  const { children } = props
  return children
}

export default GuestGuard
