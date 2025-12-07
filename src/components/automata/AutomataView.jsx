import { STATES, stateDescriptions } from '../../utils/automata';
import StateDiagram from './StateDiagram';
import TransitionTable from './TransitionTable';
import FiveTuple from './FiveTuple';
import ProductionRules from './ProductionRules';
import './styles.css';

function AutomataView({ currentState, lastInput }) {
    return (
        <div className="automata-container">
            <div className="automata-header">
                <h2>Teori Automata</h2>
                <p>Visualisasi DFA untuk Sistem Booking</p>
            </div>

            {currentState && (
                <div className="current-state-indicator">
                    State Saat Ini: {currentState} - {stateDescriptions[currentState]}
                </div>
            )}

            <div className="automata-section">
                <h3>
                    Jenis Automata
                    <span className="dfa-badge">DFA</span>
                </h3>
                <p>
                    Sistem ini menggunakan <strong>Deterministic Finite Automaton (DFA)</strong> di mana
                    setiap state memiliki tepat satu transisi untuk setiap input yang valid.
                </p>
                <p>
                    Tidak ada ambiguitas dalam transisi state, dan sistem selalu tahu state berikutnya
                    berdasarkan state saat ini dan input yang diterima.
                </p>
            </div>

            <div className="automata-section">
                <h3>📊 Diagram State</h3>
                <StateDiagram currentState={currentState} lastInput={lastInput} />
            </div>

            <div className="automata-section">
                <h3>📋 Tabel Transisi</h3>
                <TransitionTable currentState={currentState} />
            </div>

            <div className="automata-section">
                <h3>🔢 5-Tuple Definition</h3>
                <FiveTuple />
            </div>

            <div className="automata-section">
                <h3>📝 Aturan Produksi (Grammar)</h3>
                <ProductionRules />
            </div>
        </div>
    );
}

export default AutomataView;
