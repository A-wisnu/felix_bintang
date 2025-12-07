import { STATES } from '../../utils/automata';

function StateDiagram({ currentState }) {
    const statePositions = {
        [STATES.Q0]: { x: 100, y: 100 },
        [STATES.Q1]: { x: 250, y: 100 },
        [STATES.Q2]: { x: 400, y: 100 },
        [STATES.Q3]: { x: 550, y: 100 },
        [STATES.Q4]: { x: 325, y: 220 },
    };

    const transitions = [
        { from: STATES.Q0, to: STATES.Q1, label: 'a', path: 'M 140 100 L 210 100' },
        { from: STATES.Q1, to: STATES.Q2, label: 'b', path: 'M 290 100 L 360 100' },
        { from: STATES.Q2, to: STATES.Q3, label: 'c', path: 'M 440 100 L 510 100' },
        { from: STATES.Q3, to: STATES.Q4, label: 'd', path: 'M 540 140 L 360 190' },
        { from: STATES.Q4, to: STATES.Q0, label: 'f', path: 'M 290 230 Q 150 280 90 140' },
    ];

    return (
        <div className="state-diagram-container">
            <svg className="state-diagram" viewBox="0 0 650 300">
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3, 0 6" fill="#4a4a4a" />
                    </marker>
                    <marker
                        id="arrowhead-active"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3, 0 6" fill="#FFD700" />
                    </marker>
                </defs>

                {transitions.map((trans, idx) => (
                    <g key={idx}>
                        <path
                            d={trans.path}
                            className="transition-arrow"
                            markerEnd="url(#arrowhead)"
                        />
                        <text
                            x={(statePositions[trans.from].x + statePositions[trans.to].x) / 2}
                            y={
                                trans.path.includes('Q')
                                    ? (statePositions[trans.from].y + statePositions[trans.to].y) / 2 + 20
                                    : (statePositions[trans.from].y + statePositions[trans.to].y) / 2 - 10
                            }
                            className="transition-label"
                            textAnchor="middle"
                        >
                            {trans.label}
                        </text>
                    </g>
                ))}

                {Object.entries(statePositions).map(([state, pos]) => {
                    const isActive = currentState === state;
                    const isFinal = state === STATES.Q4;

                    return (
                        <g key={state} className={`state-node ${isActive ? 'active' : ''}`}>
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r="30"
                                fill={isActive ? '#FFD700' : '#2a2a2a'}
                                stroke={isFinal ? '#4CAF50' : '#4a4a4a'}
                                strokeWidth={isFinal ? '3' : '2'}
                            />
                            {isFinal && (
                                <circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="25"
                                    fill="none"
                                    stroke="#4CAF50"
                                    strokeWidth="2"
                                />
                            )}
                            <text
                                x={pos.x}
                                y={pos.y + 5}
                                textAnchor="middle"
                                fill={isActive ? '#121212' : '#FFFFFF'}
                            >
                                {state}
                            </text>
                        </g>
                    );
                })}

                <path d="M 30 100 L 70 100" stroke="#FFD700" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="20" y="95" fill="#FFD700" fontSize="12" fontWeight="600">Start</text>
            </svg>
        </div>
    );
}

export default StateDiagram;
