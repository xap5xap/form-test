import React from 'react';
import { Link, IndexLink } from 'react-router';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opacity: 0, navclass: 'navbar-transparent', menuCollapsed: true };
        this.toogleMenu = this.toogleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let oVal = window.scrollY / 170;
            this.setState({ opacity: oVal });

            if (window.scrollY > 260) {
                if (this.state.navclass === 'navbar-transparent') {
                    this.setState({ navclass: '' });
                }

            } else {
                if (this.state.navclass === '') {
                    this.setState({ navclass: 'navbar-transparent' });
                }
            }


        });
    }
    toogleMenu() {
        this.setState({ menuCollapsed: !this.state.menuCollapsed });
    }

    render() {
        return (
            <div id="navbar-full">
                <div className="container">
                    <nav className="navbar navbar-ct-blue navbar-transparent navbar-fixed-top" role="navigation">

                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a href="http://creative-tim.com">
                                    <div className="logo-container">
                                        <div className="logo">
                                            <img src={require("../../assets/img/new_logo.png")} />
                                        </div>
                                        <div className="brand">
                                            Creative Tim
                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="components.html">Components</a></li>

                                    <li><a href="http://www.creative-tim.com/product/get-shit-done-kit" className="btn btn-round btn-default">Download</a></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>

                <div className='blurred-container'>
                    <div className="motto">
                        <div>Get</div>
                        <div className="border no-right-border">Sh</div><div className="border">it</div>
                        <div>Done</div>
                    </div>
                    <div className="img-src" style={{ backgroundImage: 'url(' + require('../../assets/img/cover_4.jpg') + ')' }}></div>
                    <div className='img-src blur' style={{ backgroundImage: 'url(' + require('../../assets/img/cover_4_blur.jpg') + ')' }}></div>
                </div>

            </div>

        );

    }
}

export default Header;
