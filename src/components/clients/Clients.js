import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: 1,
        firstName: 'Paulo',
        lastName: 'Roberto',
        email: 'prmorais1302@gmail.com',
        phone: '98701-5547',
        balance: '100'
      },
      {
        id: 2,
        firstName: 'Patricia',
        lastName: 'Nunes',
        email: 'srtapatricia@gmail.com',
        phone: '98736-1339',
        balance: '150'
      },
      {
        id: 3,
        firstName: 'Maria',
        lastName: 'Fernanda',
        email: 'nanda@gmail.com',
        phone: '98736-1339',
        balance: '200'
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fa fa-users" /> Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
