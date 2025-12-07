// Generate random booking code
export const generateBookingCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
        letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    return `${randomLetters}-${randomNumbers}`;
};

// Format price to Rupiah
export const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
};

// Format seat numbers
export const formatSeats = (seats) => {
    return seats.map(s => `${String.fromCharCode(65 + s.row)}${s.col + 1}`).join(', ');
};
