import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link
        to="/talk"
        activeClassName="active"
        aria-label="View my speaking activities"
      >
        Talk
      </Link>
      <Link to="/about" activeClassName="active" aria-label="View about page">
        About
      </Link>
      {/*
      <Link to="#" activeClassName="active" aria-label="View blog page">
        Contact
      </Link>
      */}

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
