import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Pup Finder</p>
      </header>

      <main>
    <Slider/>

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/puppy'>
            <img
              src={rentCategoryImage}
              alt='breed'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Puppies for sale</p>
          </Link>
          <Link to='/category/dog'>
            <img
              src={sellCategoryImage}
              alt='price'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Dogs for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore