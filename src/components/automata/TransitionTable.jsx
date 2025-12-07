import { STATES, INPUTS } from '../../utils/automata';

function TransitionTable({ currentState }) {
    const tableRows = [
        { state: STATES.Q0, input: INPUTS.A, next: STATES.Q1 },
        { state: STATES.Q1, input: INPUTS.B, next: STATES.Q2 },
        { state: STATES.Q2, input: INPUTS.C, next: STATES.Q3 },
        { state: STATES.Q3, input: INPUTS.D, next: STATES.Q4 },
        { state: STATES.Q4, input: INPUTS.F, next: STATES.Q0 },
    ];

    return (
        <div className="transition-table-container">
            <table className="transition-table">
                <thead>
                    <tr>
                        <th>State Saat Ini</th>
                        <th>Input</th>
                        <th>State Berikutnya</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row, idx) => (
                        <tr
                            key={idx}
                            className={currentState === row.state ? 'active-row' : ''}
                        >
                            <td>{row.state}</td>
                            <td>{row.input}</td>
                            <td>{row.next}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransitionTable;
