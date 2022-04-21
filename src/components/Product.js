import React from 'react';

import NVMap from './Nvmap';

class Product extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          productInfo: {
            picture: '',
            name: '',
            type: {name: ''},
            description: '',
            categories: [],
            businessModels: [],
            trl: {name: ''},
            user: {
              profilePicture: '',
              firstName: '',
              lastName: ''
            },
            company: {name: '', address: {latitude: 0, longitude: 0}}
          },
          error: false,
          imBusy: true,
          appConfig: {
            hasUserSection: true
          }
      };
  }

  componentDidMount() {
    this.props.loadProductData();
    // this.props.loadAppConfig();
  }

  componentDidUpdate(props) {
    if (props.product.productInfo !== this.props.product.productInfo) {
      this.setState({
        ...this.props.product
      });
    }

    if (props.product.appConfig !== this.props.product.appConfig) {
      this.setState({
        ...this.props.product
      });
    }
  }

  render(){
    return (
      <div>
        {
          this.state.imBusy
          ? <div className='nv-container'>
              loading....
          </div>
          : this.state.error
            ? <div className='nv-container'>
                error
            </div>
            : <div className="container">
                <div className="row m-row">
                    <div className="col-lg-7 col-md-7 col-sm-12 row">
                        <div className="col-12 py-2">
                            <div className="content-bg pr-img">
                                <img src={this.state.productInfo.picture} />
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="content-bg pr-minfo px-2 py-2">
                                <h5>{this.state.productInfo.name}</h5>
                                <p className="mb-0">{this.state.productInfo.type.name}</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 py-2">
                                    <div 
                                        className="content-bg pr-description px-2 py-2" 
                                        dangerouslySetInnerHTML={{__html: this.state.productInfo.description}}>
                                    </div>
                                </div>
                                <div className="col-6 py-2">
                                    <div className="content-bg pr-attributes px-2 py-2">
                                        <div className='mb-3'>
                                            <h6 className='mb-0'>Category</h6>
                                            {
                                                this.state.productInfo.categories.map((o, idx) => {
                                                    return <span key={idx}>{o.name}</span>;
                                                })
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <h6 className='mb-0'>Business Models</h6>
                                            {
                                                this.state.productInfo.businessModels.map((o, idx) => {
                                                    return <span key={idx}>{o.name}</span>;
                                                })
                                            }
                                        </div>
                                        <div>
                                            <h6 className='mb-0'>TRL</h6>
                                            <p>{this.state.productInfo.trl.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div 
                                className="content-bg pr-contents"
                                dangerouslySetInnerHTML={{__html: this.state.productInfo.description}}>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 row">
                        <div className="col-12 py-2">
                            <div className="content-bg pr-user-info px-2 py-2">
                                <h6>User</h6>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={this.state.productInfo.user.profilePicture} />
                                    <p className="mt-3 mb-3">{this.state.productInfo.user.firstName} {this.state.productInfo.user.lastName}</p>
                                    <h6>{this.state.productInfo.company.name}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="content-bg pr-map-info px-2 py-2">
                                <NVMap {...this.props}{...this.state}></NVMap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }   
      </div>
    )
  }
}

export default Product;
