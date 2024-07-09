import React from 'react';

const Header = () => {
    return (
        <>
            <header className="tj-header-area header-2 header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="logo-box">
                                <a className="primary-logo" href="https://geroldlight.themejunction.net/">
                                    <img src="https://geroldlight.themejunction.net/wp-content/uploads/2024/05/logo-secondary.png" alt="logo" />
                                </a>
                            </div>

                            {/* Header info list */}
                            <div className="header-info-list d-none d-md-inline-block">
                                <ul className="ul-reset">
                                    <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
                                </ul>
                            </div>

                            {/* Menu */}
                            <div className="header-menu d-none d-lg-inline-block">
                                <ul id="menu-main-menu-1" className="">
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-904 nav-item">
                                        <a title="Services" href="/#services" className="nav-links">Services</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-937 nav-item">
                                        <a title="Works" href="/#works" className="nav-links">Works</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-938 nav-item">
                                        <a title="Resume" href="/#resume" className="nav-links">Resume</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-939 nav-item">
                                        <a title="Skills" href="/#skills" className="nav-links">Skills</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-940 nav-item">
                                        <a title="Testimonials" href="/#testimonials" className="nav-links">Testimonials</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-941 nav-item">
                                        <a title="Contact" href="/#contact" className="nav-links">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Header button */}
                            <div className="header-button">
                                <a href="#" className="btn tj-btn-primary">Hire me!</a>
                            </div>

                            {/* Menu bar for mobile */}
                            <div className="menu-bar d-lg-none">
                                <button>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="tj-header-area header-absolute">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">

                            <div className="logo-box">
                                <a className="primary-logo" href="https://geroldlight.themejunction.net/">
                                    <img src="https://geroldlight.themejunction.net/wp-content/uploads/2024/05/logo-secondary.png" alt="logo" />
                                </a>
                            </div>

                            <div className="header-info-list d-none d-md-inline-block">
                                <ul className="ul-reset">
                                    <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
                                </ul>
                            </div>

                            {/* Menu */}
                            <div className="mean-push"></div>
                            <div className="header-menu d-none d-lg-inline-block" id="headerMenu" style={{ display: 'none' }}>
                                <ul id="menu-main-menu" className="">
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-904" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-904 nav-item">
                                        <a title="Services" href="/#services" className="nav-links">Services</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-937" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-937 nav-item">
                                        <a title="Works" href="/#works" className="nav-links">Works</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-938" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-938 nav-item">
                                        <a title="Resume" href="/#resume" className="nav-links">Resume</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-939" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-939 nav-item">
                                        <a title="Skills" href="/#skills" className="nav-links">Skills</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-940" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-940 nav-item">
                                        <a title="Testimonials" href="/#testimonials" className="nav-links">Testimonials</a>
                                    </li>
                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-941" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-941 nav-item">
                                        <a title="Contact" href="/#contact" className="nav-links">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile Menu */}
                            <div className="mobile-menu d-lg-none mean-container">
                                <div className="mean-bar">
                                    <a href="#nav" className="meanmenu-reveal" style={{ right: '0px', left: 'auto', display: 'inline' }}>
                                        <span><span><span></span></span></span>
                                    </a>
                                    <nav className="mean-nav" style={{ display: 'none' }}>
                                        <ul id="menu-main-menu" className="" style={{ display: 'none' }}>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-904" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-904 nav-item">
                                                <a title="Services" href="/#services" className="nav-links">Services</a>
                                            </li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-937" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-937 nav-item">
                                                <a title="Works" href="/#works" className="nav-links">Works</a>
                                            </li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-938" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-938 nav-item">
                                                <a title="Resume" href="/#resume" className="nav-links">Resume</a>
                                            </li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-939" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-939 nav-item">
                                                <a title="Skills" href="/#skills" className="nav-links">Skills</a>
                                            </li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-940" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-940 nav-item">
                                                <a title="Testimonials" href="/#testimonials" className="nav-links">Testimonials</a>
                                            </li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-941" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item active menu-item-941 nav-item mean-last">
                                                <a title="Contact" href="/#contact" className="nav-links">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="header-button">
                                <a href="#" className="btn tj-btn-primary">Hire me!</a>
                            </div>

                            <div className="menu-bar d-lg-none">
                                <button>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
