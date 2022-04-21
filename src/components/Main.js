import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapse: false
        };
    }
    render() {
        return <div className='app'>
                    <div className='nv-container'>
                        <div className="wrapper">
                            <nav id="sidebar" className={this.state.sidebarCollapse ? 'active' : ''}>
                                <div className="sidebar-header">
                                    <h3>Innoloft</h3>
                                    <button
                                        type="button"
                                        id="sidebarCollapse"
                                        className="btn btn-info"
                                        onClick={() => {
                                            this.setState({
                                                sidebarCollapse: !this.state.sidebarCollapse
                                            });
                                        }}>
                                        <span><i className="fa fa-bars"></i></span>
                                    </button>
                                </div>
                                <ul className="list-unstyled components">
                                    <li className={window.location.pathname === '/' ? 'active' : ''}>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className={window.location.pathname === '/product' ? 'active' : ''}>
                                        <Link to="/product">Product</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="content">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="container-fluid">
                                        <ul className="nav navbar-nav">
                                            
                                        </ul>
                                    </div>
                                </nav>
                                {React.cloneElement(this.props.children, this.props)}
                            </div>
                        </div>
                    </div>
                </div> ;
    }
}

export default Main;
