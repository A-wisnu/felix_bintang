import { formatSeats } from '../../utils/helpers';

function SuccessPage({ bookingData, onReset }) {
    return (
        <div className="success-page">
            <div className="success-content">
                <div className="success-icon">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" fill="#4CAF50" opacity="0.2" />
                        <circle cx="50" cy="50" r="40" stroke="#4CAF50" strokeWidth="3" />
                        <path d="M30 50 L45 65 L70 35" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h2 className="success-title">Booking Berhasil!</h2>

                <div className="booking-code">
                    <p className="code-label">Kode Booking</p>
                    <p className="code-value">{bookingData.bookingCode}</p>
                </div>

                <div className="ticket-details">
                    <div className="detail-item">
                        <span className="detail-label">Film</span>
                        <span className="detail-value">{bookingData.movie.title}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Jam Tayang</span>
                        <span className="detail-value">{bookingData.time}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Kursi</span>
                        <span className="detail-value">{formatSeats(bookingData.seats)}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Email</span>
                        <span className="detail-value">{bookingData.email}</span>
                    </div>
                </div>

                <p className="screenshot-reminder">📸 Screenshot halaman ini sebagai bukti</p>

                <button className="reset-button" onClick={onReset}>
                    Kembali ke Beranda
                </button>
            </div>
        </div>
    );
}

export default SuccessPage;
