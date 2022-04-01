import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import IntlMessages from 'helpers/IntlMessages';
import {
  setContainerClassnames,
  clickOnMobileMenu,
  logoutUser,
  changeLocale,
} from 'redux/actions';
import 'firebase/compat/auth';

import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive,
  buyUrl,
  adminRoot,
} from 'constants/defaultValues';

import { MobileMenuIcon, MenuIcon } from 'components/svg';
import { getDirection, setDirection } from 'helpers/Utils';
import profilelogo from 'assets/img/churchnoteslogoalt.png';
import logo from 'assets/img/ChurchNotesLogoBlue.png';
import { auth, db } from 'helpers/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const TopNav = ({
  intl,
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  locale,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  logoutUserAction,
  changeLocaleAction,
}) => {
  const [isInFullScreen, setIsInFullScreen] = useState(false);
  // const [searchKeyword, setSearchKeyword] = useState('');

  // const search = () => {
  //   history.push(`${searchPath}?key=${searchKeyword}`);
  //   setSearchKeyword('');
  // };

  const [user, loading] = useAuthState(auth);
  const [setDisplayName] = useState('');
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection('user')
        .where('uid', '==', user?.uid)
        .get();
      const data = await query.docs[0].data();
      setDisplayName(data.displayName);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);

  const handleChangeLocale = (_locale, direction) => {
    changeLocaleAction(_locale);

    const currentDirection = getDirection().direction;
    if (direction !== currentDirection) {
      setDirection(direction);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const isInFullScreenFn = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };

  // const handleSearchIconClick = (e) => {
  //   if (window.innerWidth < menuHiddenBreakpoint) {
  //     let elem = e.target;
  //     if (!e.target.classList.contains('search')) {
  //       if (e.target.parentElement.classList.contains('search')) {
  //         elem = e.target.parentElement;
  //       } else if (
  //         e.target.parentElement.parentElement.classList.contains('search')
  //       ) {
  //         elem = e.target.parentElement.parentElement;
  //       }
  //     }

  //     if (elem.classList.contains('mobile-view')) {
  //       search();
  //       elem.classList.remove('mobile-view');
  //       removeEventsSearch();
  //     } else {
  //       elem.classList.add('mobile-view');
  //       addEventsSearch();
  //     }
  //   } else {
  //     search();
  //   }
  //   e.stopPropagation();
  // };

  // const handleDocumentClickSearch = (e) => {
  //   let isSearchClick = false;
  //   if (
  //     e.target &&
  //     e.target.classList &&
  //     (e.target.classList.contains('navbar') ||
  //       e.target.classList.contains('simple-icon-magnifier'))
  //   ) {
  //     isSearchClick = true;
  //     if (e.target.classList.contains('simple-icon-magnifier')) {
  //       search();
  //     }
  //   } else if (
  //     e.target.parentElement &&
  //     e.target.parentElement.classList &&
  //     e.target.parentElement.classList.contains('search')
  //   ) {
  //     isSearchClick = true;
  //   }

  //   if (!isSearchClick) {
  //     const input = document.querySelector('.mobile-view');
  //     if (input && input.classList) input.classList.remove('mobile-view');
  //     removeEventsSearch();
  //     setSearchKeyword('');
  //   }
  // };

  // const removeEventsSearch = () => {
  //   document.removeEventListener('click', handleDocumentClickSearch, true);
  // };

  // const addEventsSearch = () => {
  //   document.addEventListener('click', handleDocumentClickSearch, true);
  // };

  // const handleSearchInputKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     search();
  //   }
  // };

  const toggleFullScreen = () => {
    const isFS = isInFullScreenFn();

    const docElm = document.documentElement;
    if (!isFS) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsInFullScreen(!isFS);
  };

  const handleLogout = () => {
    logoutUserAction(history);
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  const { messages } = intl;
  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>

        <div className="welcomeName">
          <h2
            style={{ paddingTop: '10px', fontWeight: 'bold', color: '#3A4759' }}
          >
            Welcome {localStorage.getItem('name')?.split(' ')?.[0] || ''}
          </h2>
        </div>
      </div>
      <NavLink className="navbar-logo" to={adminRoot}>
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink>
      {/* <NavLink to={adminRoot}>
        <img alt="ChurchNotes" style={{ width: "200px", }} src={logo} />
      </NavLink> */}

      <div className="navbar-right">
        <div className="header-icons d-inline-block align-middle">
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span
                style={{
                  height: '50px',
                  width: ' 50px',
                  backgroundImage: 'linear-gradient(to top, #ff8a93, #ffbf81)',
                  borderRadius: '50px',
                  display: 'inline-block',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    display: 'block',
                    marginTop: '10%',
                  }}
                >
                  {user?.displayName}
                </div>
                {/* <img alt="Profile" src={profilelogo} /> */}
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Support</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    logoutUserAction: logoutUser,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
