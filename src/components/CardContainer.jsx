import React from 'react'

export default function CardContainer() {
    console.log("rendering CardContainer")
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card" style={{width: '20rem'}}>
                <div className="card-header">
                    Post Title
                </div>
                <img src="https://aramajapan.com/wp-content/uploads/2014/10/aramajapan_cowboy-bebop.jpg" className="card-img-top" alt="cowboy-bebop"/>
                <div className="card-body">
                    <p className="card-text">Card description</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li className="list-group-item">A second item, amet consectetur a</li>
                    <li className="list-group-item">A third itemLorem ipsum dolor sit, amet con</li>
                </ul>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}
