import Link from 'next/link'

import Logo from './Icons/Logo'
import Bounded from './Bounded'
import SearchBar from './ui/Search'
import ThemeSwitcher from './ui/ThemeSwitcher'
import { NavBar } from './NavBar'

export default async function Header() {
  return (
    <Bounded>
      <div className="header">
        <Link href="/">
          <Logo />
        </Link>
        <NavBar />
        <SearchBar />
        <ThemeSwitcher />
      </div>
    </Bounded>
  )
}
