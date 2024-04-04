import React from 'react'
import image from '../../images/png/logo.png'
import './styles.css'
export const InvitationCard = () => {
  return (
    <div>
        <section class="invitation-cards">
        <div class="invitation_card">
          <div class="card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>wedding Party </h3>
              <p>location: ...........</p>
              <p>Date: ../../....</p>
              <p>invitation Id: ...................</p>
            </div>
          </div>
          </div>
          </section>
    </div>
  )
}
