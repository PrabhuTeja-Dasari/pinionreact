import { createStyles, Navbar, ScrollArea } from '@mantine/core'

import { ToggleButton } from '@/components/common'
import { navData } from '@/data/navData'

import LinksGroup from './NavLinkGroup'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`
  }
}))

export default function NavigationBar() {
  const { classes } = useStyles()
  const links = navData.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section>
        <div className="flex text-left md:hidden">
          <ToggleButton />
        </div>
      </Navbar.Section>
    </Navbar>
  )
}
