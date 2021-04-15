import React, {Component} from 'react';
import AllProducts from './AllProduct';
import CreateProduct from './CreateProduct';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: true,
    };
  }

  changeContentHandlerUpdate = () => {
    this.setState({showContent: true});
  };
  changeContentHandlerHome = () => {
    this.setState({showContent: false});
  };

  render() {
    return (
      <div id="content">
        <div className="container mt-2 " id="profile">
          <div className="row d-flex justify-content-end">
            <div className="col-5 col-md-5">
              <div
                id="proheads"
                className="col-md-4 bg-primary text-center  rounded-2 text-white py-2 shadow"
                onClick={this.changeContentHandlerUpdate}
              >
                {' '}
               New Product
              </div>
            </div>
            <div className="col-5 col-md-5">

            <div
              id="proheads"
              className="col-md-4 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={this.changeContentHandlerHome}
            >
              {' '}
              List Products
            </div>
            </div>
          </div>
        </div>
        <div id="cont" className="shadow-sm rounded-4">
          {this.state.showContent ? <CreateProduct /> : <AllProducts />}
        </div>
      </div>
    );
  }
}
