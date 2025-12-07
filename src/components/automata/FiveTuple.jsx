import { fiveTuple } from '../../utils/automata';

function FiveTuple() {
    return (
        <div className="five-tuple-content">
            <p style={{ marginBottom: '1.5rem', fontFamily: 'Inter', fontSize: '0.95rem', color: '#AAAAAA' }}>
                Definisi formal DFA: <strong style={{ color: '#FFD700' }}>M = (Q, Σ, δ, S, F)</strong>
            </p>

            <div className="tuple-item">
                <div className="tuple-label">Q (States)</div>
                <div className="tuple-value">
                    Q = {'{'} {fiveTuple.Q.join(', ')} {'}'}
                </div>
                <div className="tuple-description">
                    Himpunan semua state dalam sistem booking
                </div>
            </div>

            <div className="tuple-item">
                <div className="tuple-label">Σ (Alphabet)</div>
                <div className="tuple-value">
                    Σ = {'{'} {fiveTuple.Sigma.join(', ')} {'}'}
                </div>
                <div className="tuple-description">
                    Himpunan semua input yang valid (a=pilih jam, b=konfirmasi kursi, c=bayar, d=validasi otomatis, f=reset)
                </div>
            </div>

            <div className="tuple-item">
                <div className="tuple-label">δ (Transition Function)</div>
                <div className="tuple-value">
                    δ: Q × Σ → Q
                </div>
                <div className="tuple-description">
                    Fungsi transisi yang memetakan (state, input) ke state berikutnya
                </div>
            </div>

            <div className="tuple-item">
                <div className="tuple-label">S (Start State)</div>
                <div className="tuple-value">
                    S = {fiveTuple.S}
                </div>
                <div className="tuple-description">
                    State awal sistem (Halaman Home)
                </div>
            </div>

            <div className="tuple-item">
                <div className="tuple-label">F (Final States)</div>
                <div className="tuple-value">
                    F = {'{'} {fiveTuple.F.join(', ')} {'}'}
                </div>
                <div className="tuple-description">
                    State akhir sistem (Booking Sukses)
                </div>
            </div>
        </div>
    );
}

export default FiveTuple;
