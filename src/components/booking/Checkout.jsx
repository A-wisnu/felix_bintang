import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { formatPrice, formatSeats } from '../../utils/helpers';

function Checkout({ bookingData, onSubmit }) {
    const [email, setEmail] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const canvasRef = useRef(null);

    useEffect(() => {
        // Generate QR code for payment
        const paymentData = `QRIS:50000:Cinema-Booking-${Date.now()}`;
        QRCode.toDataURL(paymentData, {
            width: 200,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF',
            },
        }).then(url => {
            setQrCodeUrl(url);
        });
    }, []);

    const totalPrice = bookingData.seats.length * bookingData.movie.price;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            onSubmit(email);
        }
    };

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <h2>Pembayaran</h2>
            </div>

            <div className="checkout-content">
                <div className="booking-summary">
                    <h3>Ringkasan Booking</h3>
                    <div className="summary-item">
                        <span className="label">Film:</span>
                        <span className="value">{bookingData.movie.title}</span>
                    </div>
                    <div className="summary-item">
                        <span className="label">Jam:</span>
                        <span className="value">{bookingData.time}</span>
                    </div>
                    <div className="summary-item">
                        <span className="label">Kursi:</span>
                        <span className="value">{formatSeats(bookingData.seats)}</span>
                    </div>
                    <div className="summary-item total">
                        <span className="label">Total:</span>
                        <span className="value">{formatPrice(totalPrice)}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Anda</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nama@email.com"
                            required
                        />
                    </div>

                    <div className="qr-section">
                        <h3>Scan QR untuk Bayar</h3>
                        {qrCodeUrl && (
                            <div className="qr-code-container">
                                <img src={qrCodeUrl} alt="QR Code" className="qr-code" />
                            </div>
                        )}
                        <p className="payment-instruction">
                            Scan QR code di atas menggunakan aplikasi pembayaran Anda
                        </p>
                    </div>

                    <button type="submit" className="submit-button">
                        Saya Sudah Transfer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
