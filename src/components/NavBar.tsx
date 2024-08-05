'use client'

import { createClient } from '../prismicio'
import { PrismicNextLink } from '@prismicio/next'
import { styled } from 'styled-components'

const NavItem = styled.li`
  color: #3b3c4a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  list-style: none;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`

export async function NavBar() {
  const client = createClient()
  const headerData = await client.getSingle('header').catch()

  return (
    <nav>
      <ul className="nav">
        {headerData.data.nav_item.map((item, index) => (
          <NavItem key={index}>
            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
