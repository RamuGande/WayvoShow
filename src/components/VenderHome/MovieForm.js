import React, { useState, useEffect } from 'react';
import './Movie.css';
import axios from "axios";
const MovieForm = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    releaseDate: '',
    time: '',
    movieImage: '',
    ticketPrice: '',
    language: '',
    city: '',
    theatre: ''
  });

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
        fetch('/movies2.json')
            .then(response => response.json())
            .then(data => setMovies(data.movies))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'movieName' && Array.isArray(movies)) {
      const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    storedMovies.push({ ...formData });
    localStorage.setItem('movies', JSON.stringify(storedMovies));
    alert('Movie details submitted successfully!');
    setFormData({
      movieName: '',
      releaseDate: '',
      time: '',
      movieImage: '',
      ticketPrice: '',
      language: '',
      city: '',
      theatre: ''
    });
    try{
  const result =axios.post(`${process.env.REACT_APP_API_URL}/vendors/add_show`, { formData },
   { Authorization:{
      Bearer:'token'
    }}
  )
    }
    catch(error)
    {
      console.log(error);
    }
    setFilteredMovies([]);
  };

  return (
    <div className="mov-container">
      <div className="mov-logo">
        <img src={require("../../assets/images/log.png")} alt="Logo" className="movie-logo-img"/>
      </div>

      <div className="mov-form-wrapper">
        <h2 className="mov-title">Submit Movie Details</h2>
        <form onSubmit={handleSubmit} className="movie-form">
          <div className="mov-form-group">
            <label className="mov-label">Movie Name:</label>
            <input
              className="mov-input"
              type="text"
              name="movieName"
              value={formData.movieName}
              onChange={handleChange}
              list="movie-options"
              required
            />
            <datalist id="movie-options">
              {filteredMovies.map((movie, index) => (
                <option key={index} value={movie.title} />
              ))}
            </datalist>
          </div>

          {[
            { label: 'Release Date', name: 'releaseDate', type: 'date' },
            { label: 'Time', name: 'time', type: 'time' },
            { label: 'Movie Image URL', name: 'movieImage', type: 'text' },
            { label: 'Ticket Price', name: 'ticketPrice', type: 'number' },
            { label: 'Language', name: 'language', type: 'text' }
          ].map((field) => (
            <div className="mov-form-group" key={field.name}>
              <label className="mov-label">{field.label}:</label>
              <input
                className="mov-input"
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="mov-form-group">
            <label className="mov-label">City:</label>
            <select
              className="mov-input"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="mov-form-group">
            <label className="mov-label">Theatre:</label>
            <select
              className="mov-input"
              name="theatre"
              value={formData.theatre}
              onChange={handleChange}
              required
            >
              <option value="">Select Theatre</option>
              <option value="PVR">PVR</option>
              <option value="AAA">AAA</option>
              <option value="CINEPOLIS">CINEPOLIS</option>
              <option value="ARJUN">ARJUN</option>
            </select>
          </div>

          <button className="mov-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;