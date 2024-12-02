import type { NavigationProps } from '@keystone-6/core/admin-ui/components'
import { NavigationContainer, ListNavItems, NavItem } from '@keystone-6/core/admin-ui/components'

export default function CustomNavigation({ lists, authenticatedItem }: NavigationProps) {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href="/">Dashboard</NavItem>
      <ListNavItems lists={lists} />
      <NavItem href="/custom-page">Custom Page</NavItem>
    </NavigationContainer>
  )
}
