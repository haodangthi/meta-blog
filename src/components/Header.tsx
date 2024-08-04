import Link from "next/link";

import Logo from "./Icons/Logo";
import Bounded from "./Bounded";
import SearchBar from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";
import {createClient} from "../prismicio";
import {PrismicNextLink} from "@prismicio/next";

export default async function Header() {
    const client = createClient();
    const headerData = await client.getSingle("header").catch(e => {});

    return (
        <Bounded>
            <div className = "header">
                <Link href="/">
                    <Logo/>
                </Link>
                <nav>
                    <ul className="nav">
                        {headerData.data.nav_item.map((item,index) => (
                            <li className="nav-item" key={index}>
                                <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
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


