import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'




function ListingItem({ listing, id, onDelete, onEdit }) {
  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
         <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{listing.location}</p>
          <p className='categoryListingName'>{listing.name}</p>
          <p className='categoryListingPrice'>
          $
            {listing.offer
              ? listing.discounted
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <div className='categoryListingInfoDiv'>
            <p className='categoryListingInfoText'>
            <img className='icon-mon' style={{height:"24px", viewBox:"0 0 24 24", width:"24px", fill:"#000000"}}src='https://svgsilh.com/png-512/1314467.png'alt='paw' />
                 {listing.breed}
            </p>
            <p className='categoryListingInfoText'>
            <img className='icon-mon' style={{height:"24px", viewBox:"0 0 24 24", width:"24px", fill:"#000000"}}src='https://svgsilh.com/png-512/1294841.png'alt='calendar' />
              {listing.age} old
            </p>
            </div>
         </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231, 76,60)'
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
       {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
    </li>

  )
}

export default ListingItem