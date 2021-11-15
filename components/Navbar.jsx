import React from "react";
import Image from "next/image";
import Link from "next/Link";
import LogoSmall from "../assets/logo-small.png";
import LogoBig from "../assets/logo-big.png";
import Search from "./Search/Index";

export default function Navbar() {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isOpenLang, setIsOpenLang ] = React.useState(false);
  const [ isOpenSearch, setSearchOpen ] = React.useState(false);

  const handleDropdown = (toOpen) => {
    if(toOpen === 'lang'){
      setIsOpenLang(state => !state);
      setIsOpen(state => false);
    } else {
      setIsOpen(state => !state);
      setIsOpenLang(state => false);
    }
  }

  const openSearch = () => {
    setSearchOpen(state => !state);
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link href="/">
        <div className="navbar-brand mb-2">
          <Image width="70" height="40" src={LogoSmall} alt="logo" />
          <Image width="60" height="40" src={LogoBig} alt="logo" />
        </div>
      </Link>
      <div className="d-md-none d-sm-block theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="linearicons-list4"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-md-0 mt-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href={null}
              onClick={handleDropdown}
            >
              <i className="linearicons-site-map"></i> Family Tree
            </a>
            { isOpen && (
              <div className="dropdown-menu show">
                <Link href={`${process.env.baseUrl}/trees/prophet`}>
                  <div className="dropdown-item">
                    <i className="linearicons-site-map"></i> Prophet Muhammad (saw)
                  </div>
                </Link>
                <Link href={`${process.env.baseUrl}/trees/ahlulbayt`}>
                  <div className="dropdown-item">
                    <i className="linearicons-site-map"></i> Ahlulbayt (as)
                  </div>
                </Link>
                <Link href={`${process.env.baseUrl}/trees/zuhair`}>
                  <div className="dropdown-item">
                    <i className="linearicons-site-map"></i> Abidi (Zuhair Abbas)
                  </div>
                </Link>
              </div>
              )
            }
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href={null}
              onClick={() => handleDropdown('lang')}
            >
              <i className="linearicons-earth"></i> English
            </a>
            { isOpenLang && (
              <div className="dropdown-menu show">
                <Link href={`${process.env.baseUrl}/trees/prophet`}>
                  <div className="dropdown-item">
                    <i className="linearicons-chevron-right"></i> Arabic
                  </div>
                </Link>
                <Link href={`${process.env.baseUrl}/trees/ahlulbayt`}>
                  <div className="dropdown-item">
                    <i className="linearicons-chevron-right"></i> Persian
                  </div>
                </Link>
                <Link href={`${process.env.baseUrl}/trees/zuhair`}>
                  <div className="dropdown-item">
                    <i className="linearicons-chevron-right"></i> Urdu
                  </div>
                </Link>
              </div>
              )
            }
          </li>
          <li className="nav-item">
            <Link href="contact">
               <div className="nav-link">
                Contact
               </div>
            </Link>
          </li>
        </ul>
        <form onClick={openSearch} className="d-none d-md-block search-box form-inline my-2 mr-auto">
          <span className="lnr lnr-magnifier my-2" type="submit"></span>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="d-md-block d-sm-none  mr-auto theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    </nav>
    {isOpenSearch && <Search isOpen={isOpenSearch} setOpen={setSearchOpen} />}
    </>
  );
}
