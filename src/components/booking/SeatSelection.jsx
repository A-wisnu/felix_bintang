import { useState } from 'react';
import { formatPrice } from '../../utils/helpers';

function SeatSelection({ movie, time, onConfirm }) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const rows = 6;
    const cols = 6;

    // Randomly generate some occupied seats
    const occupiedSeats = [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 2, col: 4 },
        { row: 3, col: 3 },
        { row: 4, col: 0 },
    ];

    const isSeatOccupied = (row, col) => {
        return occupiedSeats.some(seat => seat.row === row && seat.col === col);
    };

    const isSeatSelected = (row, col) => {
        return selectedSeats.some(seat => seat.row === row && seat.col === col);
    };

    const toggleSeat = (row, col) => {
        if (isSeatOccupied(row, col)) return;

        const seatIndex = selectedSeats.findIndex(
            seat => seat.row === row && seat.col === col
        );

        if (seatIndex >= 0) {
            setSelectedSeats(selectedSeats.filter((_, i) => i !== seatIndex));
        } else {
            setSelectedSeats([...selectedSeats, { row, col }]);
        }
    };

    const totalPrice = selectedSeats.length * movie.price;

    return (
        <div className="seat-selection">
            <div className="seat-header">
                <h2>{movie.title}</h2>
                <p className="showtime">{time} • Studio 1</p>
            </div>

            <div className="screen-container">
                <div className="screen">LAYAR</div>
            </div>

            <div className="seats-grid">
                {Array.from({ length: rows }).map((_, row) => (
                    <div key={row} className="seat-row">
                        <div className="row-label">{String.fromCharCode(65 + row)}</div>
                        {Array.from({ length: cols }).map((_, col) => {
                            const occupied = isSeatOccupied(row, col);
                            const selected = isSeatSelected(row, col);

                            return (
                                <button
                                    key={col}
                                    className={`seat ${occupied ? 'occupied' : ''} ${selected ? 'selected' : ''}`}
                                    onClick={() => toggleSeat(row, col)}
                                    disabled={occupied}
                                >
                                    {col + 1}
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="seat-legend">
                <div className="legend-item">
                    <div className="seat-indicator available"></div>
                    <span>Tersedia</span>
                </div>
                <div className="legend-item">
                    <div className="seat-indicator occupied"></div>
                    <span>Terisi</span>
                </div>
                <div className="legend-item">
                    <div className="seat-indicator selected"></div>
                    <span>Dipilih</span>
                </div>
            </div>

            <div className="seat-footer">
                <div className="total-section">
                    <span className="total-label">Total:</span>
                    <span className="total-price">{formatPrice(totalPrice)}</span>
                </div>
                <button
                    className="continue-button"
                    onClick={() => onConfirm(selectedSeats)}
                    disabled={selectedSeats.length === 0}
                >
                    Lanjut Bayar ({selectedSeats.length} Kursi)
                </button>
            </div>
        </div>
    );
}

export default SeatSelection;
