import React from 'react'

export default function Newsitem(props) {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
        <div className="card">
          <img src={props.pic} height={150} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <hr />
            <div className="source-date">
              <p>{props.source}</p>
              <p>{new Date(props.date).toLocaleDateString()}</p>
            </div>
            <hr />
            <p className="card-text">
              {props.description}
            </p>
            <a href={props.url} target="_blank" className="btn btn-primary background w-100 ">
              Read full Article
            </a>
          </div>
        </div>
      </div>
  )
}

