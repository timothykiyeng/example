import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'

function AddMovie() {

const [name, setName] = useState('')
const [image, setImage] = useState('')
const [overview, setOverview]= useState('')
const [ratings, setRatings] = useState('')


const handleRatingsChange = (e) => {
    setRatings(e.target.value)
}

const handleOverviewChange = (e) => {
    setOverview(e.target.value)
}

const handleImageChange = (e) => {
    setImage(e.target.value)
}

const handleNameChange = (e) => {
    setName(e.target.value)
}

const handleChange = (e) => {
    e.preventDefault()
    const newMovie = {
        id: uuid(),
        name: name,
        image: image,
        overview: overview,
        ratings: ratings
    }

    fetch("http://localhost:4000/movies", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    })
    .then(res => res.json())
    .then(newData => (newData))
}



  return (
    <div className='ui segment' onSubmit={handleChange}>
      <form className='ui form'>
        <div className='inline fields'>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name of Movie'
            onChange={handleNameChange}
            required
          />
          <input
            type='text'
            name='image'
            placeholder='Image'
            value={image}
            onChange={handleImageChange}
            required
          />
          <input
            type='text'
            name='overview'
            placeholder='Overview'
            value={overview}
            onChange={handleOverviewChange}
            required
          />
          <input
            type='number'
            name='ratings'
            placeholder='Ratings'
            step='1'
            onChange={handleRatingsChange}
            required
          />
        </div>
        <button className='ui button' type='submit'>
          Add Movie
        </button>
      </form>
    </div>
  )
}

export default AddMovie