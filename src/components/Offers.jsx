import React from 'react'

export const Offers = ({offers}) => {
  return (
    <section className="offers">
    <div className="container">
      {offers.map((offer,index)=>(
        <img key={index} className='offer' src={offer}/>
      ))}
    </div>
</section>
  )
}
