import React, { Component } from 'react'



export default class Transaction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FirstName : 'First Name',
            LastName: 'Last Name',
            Handle: 'Handle',
            first: 'stephen',
            last: 'Adediran',
            handle: 'stephenkayade@gmail.com',
            Date: 'Date',
            curTime: new Date().toLocaleString()

        }

    }
   
    

    render() {
        return (
            <>
            <div class="d-flex flex-column w-100 mx-5">

            <h2 className="display-4 text-center mt-5">Transactions</h2>
            <div className="container-fluid w-100 my-5">

                <table class="table ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{this.state.FirstName}</th>
                            <th scope="col">{this.state.LastName}</th>
                            <th scope="col">{this.state.Handle}</th>
                            <th scope="col">{this.state.Date}</th>
                            <th scope="col">{this.state.LastName}</th>
                            <th scope="col">{this.state.Handle}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.state.first}</td>
                            <td>{this.state.last}</td>
                            <td>{this.state.handle}</td>
                            <td>{this.state.curTime}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </>
        )
    }
}
