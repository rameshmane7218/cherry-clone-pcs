import React from 'react'

export const Restarunt = ({restarunts}) => {
  return (
    <div key={restarunts.id} className="card">
        <img width="254" height="160px" src={restarunts.image} />
        <div className="restaurant-details">
            <div className="restaurant-title">{restarunts.name}</div>
            <div className="restaurant-subtitle">
            {restarunts.category.join(", ")}
            </div>
        </div>
        <div className="restaurant-info">
            <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i>{restarunts.rating}
            </div>
            .<div className="restaurant-delivery-timings"> {restarunts.deliveryTimings} MINS</div> .
            <div className="restaurant-cost-for-two">₹{restarunts.costForTwo} FOR TWO</div>
        </div>
        <div className="offer-banner">
            <span className="material-icons"> local_offer </span>
            <span className="offer-text">{restarunts.offer.join(" | ")}</span>
        </div>
    </div>
  )
}
