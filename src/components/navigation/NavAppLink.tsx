import { Nav } from 'react-bootstrap'
import {
  NavLink,
  type NavLinkProps,
  type NavLinkRenderProps,
} from 'react-router'

function defaultNavClassName(state: NavLinkRenderProps) {
  return ['nav-link', state.isActive && 'active'].filter(Boolean).join(' ')
}

type NavAppLinkProps = NavLinkProps

export function NavAppLink({ className, ...props }: NavAppLinkProps) {
  return (
    <Nav.Item>
      <NavLink
        {...props}
        className={(state) => {
          const base = defaultNavClassName(state)
          if (className == null) {
            return base
          }
          if (typeof className === 'function') {
            return [base, className(state)].filter(Boolean).join(' ')
          }
          return [base, className].filter(Boolean).join(' ')
        }}
      />
    </Nav.Item>
  )
}
