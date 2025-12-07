import { productionRules, acceptedStrings } from '../../utils/automata';

function ProductionRules() {
    return (
        <div className="production-rules-content">
            <p style={{ marginBottom: '1.5rem', fontFamily: 'Inter', fontSize: '0.95rem', color: '#AAAAAA' }}>
                Aturan produksi dalam bentuk <strong style={{ color: '#FFD700' }}>Regular Grammar</strong>:
            </p>

            <ul className="rules-list">
                {productionRules.map((rule, idx) => (
                    <li key={idx} className="rule-item">
                        <div className="rule-production">
                            {rule.from} → {rule.to}
                        </div>
                        <div className="rule-description">
                            {rule.description}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="accepted-strings">
                <h4>Contoh String yang Diterima:</h4>
                {acceptedStrings.map((item, idx) => (
                    <div key={idx} className="string-item">
                        <span className="string-value">{item.string}</span>
                        <span className="string-description">{item.description}</span>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: '1.5rem', fontFamily: 'Inter', fontSize: '0.9rem', color: '#AAAAAA', fontStyle: 'italic' }}>
                Bahasa yang diterima: L(M) = semua string yang dimulai dengan 'a' (pilih jam), diikuti 'b' (pilih kursi),
                'c' (submit pembayaran), 'd' (validasi otomatis sukses), dan opsional 'f' untuk reset kembali ke awal.
            </p>
        </div>
    );
}

export default ProductionRules;
