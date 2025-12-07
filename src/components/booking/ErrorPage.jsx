function ErrorPage({ onRetry }) {
    return (
        <div className="error-page">
            <div className="error-content">
                <div className="error-icon">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" fill="#f44336" opacity="0.2" />
                        <circle cx="50" cy="50" r="40" stroke="#f44336" strokeWidth="3" />
                        <path d="M35 35 L65 65 M65 35 L35 65" stroke="#f44336" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>

                <h2 className="error-title">Pembayaran Gagal</h2>
                <p className="error-message">
                    Maaf, pembayaran Anda tidak dapat diverifikasi.
                    Silakan coba lagi atau hubungi customer service.
                </p>

                <button className="retry-button" onClick={onRetry}>
                    Coba Lagi
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;
