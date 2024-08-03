import Link from "next/link";

import Logo from "./Icons/Logo";
import Bounded from "./Bounded";
import SearchBar from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";
import {createClient} from "../prismicio";

export default async function Header() {
    const client = createClient();
    const navItems = await client.getSingle("header").catch(e => {});

    const navLinks = ['Home', 'Blog', 'Single Post', 'Pages', 'Contact']

    return (
        <Bounded>
            <div className = "header">
                <Link href="/">
                    <Logo/>
                </Link>
                <nav>
                    <ul className="nav">
                        {/*{navItems.data.nav_item.map((item) => (*/}
                        {/*    <li className="nav-item" key={item}>*/}
                        {/*        {item.label}*/}
                        {/*    </li>*/}
                        {/*))}*/}
                        {navLinks.map((item,index) => (
                            <li className="nav-item" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
                <SearchBar/>
                <ThemeSwitcher/>
            </div>
        </Bounded>
    );
}


