import React from 'react';

function Admin() {

    return (
        <div>
            <div style={{minHeight: 500}}>
                <h3>Xadmin</h3>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page">Sản phẩm</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Khách hàng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" tabIndex="-1" aria-disabled="true">Đối tác</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Admin;