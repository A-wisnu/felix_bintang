import { movies } from '../../data/movies';
import './styles.css';

function HomePage({ onSelectTime }) {
    return (
        <div className="home-page">
            <div className="home-header">
                <h1>🎬 Cinema Booking</h1>
                <p>Pilih film dan jam tayang yang Anda inginkan</p>
            </div>

            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-genre">{movie.genre}</p>
                            <div className="time-slots">
                                {movie.times.map(time => (
                                    <button
                                        key={time}
                                        className="time-button"
                                        onClick={() => onSelectTime(movie, time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
