// DFA States
export const STATES = {
    Q0: 'q0', // Home
    Q1: 'q1', // Seat Selection
    Q2: 'q2', // Checkout/Payment
    Q3: 'q3', // Verification
    Q4: 'q4', // Success
};

// Input Alphabet
export const INPUTS = {
    A: 'a', // Select time
    B: 'b', // Confirm seats
    C: 'c', // Submit payment
    D: 'd', // Valid payment
    F: 'f', // Reset/Return
};

// Transition Function δ(state, input) -> nextState
export const transitionFunction = {
    [STATES.Q0]: {
        [INPUTS.A]: STATES.Q1,
    },
    [STATES.Q1]: {
        [INPUTS.B]: STATES.Q2,
    },
    [STATES.Q2]: {
        [INPUTS.C]: STATES.Q3,
    },
    [STATES.Q3]: {
        [INPUTS.D]: STATES.Q4,
    },
    [STATES.Q4]: {
        [INPUTS.F]: STATES.Q0,
    },
};

// Get next state
export const getNextState = (currentState, input) => {
    return transitionFunction[currentState]?.[input] || currentState;
};

// State descriptions
export const stateDescriptions = {
    [STATES.Q0]: 'Halaman Home (Idle)',
    [STATES.Q1]: 'Halaman Pilih Kursi (Film Selected)',
    [STATES.Q2]: 'Halaman Pembayaran (Seat Locked)',
    [STATES.Q3]: 'Proses Verifikasi (Checking)',
    [STATES.Q4]: 'Halaman Tiket Terbit (Final/Success)',
};

// Input descriptions
export const inputDescriptions = {
    [INPUTS.A]: 'User memilih jam tayang',
    [INPUTS.B]: 'User konfirmasi kursi & klik lanjut',
    [INPUTS.C]: 'User input email & klik "Sudah Bayar"',
    [INPUTS.D]: 'Sistem memvalidasi pembayaran (Valid)',
    [INPUTS.F]: 'User menutup tiket/kembali ke awal',
};

// 5-Tuple Definition
export const fiveTuple = {
    Q: Object.values(STATES),
    Sigma: Object.values(INPUTS),
    delta: transitionFunction,
    S: STATES.Q0,
    F: [STATES.Q4],
};

// Production Rules (Grammar)
export const productionRules = [
    { from: 'S', to: 'aA', description: 'Dari Start, pilih jam (a) → state A' },
    { from: 'A', to: 'bB', description: 'Dari A, konfirmasi kursi (b) → state B' },
    { from: 'B', to: 'cC', description: 'Dari B, submit bayar (c) → state C (Verifikasi)' },
    { from: 'C', to: 'dF', description: 'Dari C, validasi otomatis (d) → Final Sukses' },
    { from: 'F', to: 'fS', description: 'Dari Final, reset (f) → Start' },
];

// Example accepted strings
export const acceptedStrings = [
    { string: 'abcd', description: 'Pilih Jam → Pilih Kursi → Bayar → Validasi Sukses → TIKET KELUAR' },
    { string: 'abcdf', description: 'Sukses lalu kembali ke Home untuk booking baru' },
];
