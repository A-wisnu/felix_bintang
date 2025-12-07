import { useState, useEffect, useRef } from 'react';
import { STATES, INPUTS, getNextState } from './utils/automata';
import HomePage from './components/booking/HomePage';
import SeatSelection from './components/booking/SeatSelection';
import Checkout from './components/booking/Checkout';
import SuccessPage from './components/booking/SuccessPage';
import AutomataView from './components/automata/AutomataView';

function App() {
    const [currentState, setCurrentState] = useState(STATES.Q0);
    const [lastInput, setLastInput] = useState(null);
    const [bookingData, setBookingData] = useState({
        movie: null,
        time: null,
        seats: [],
        email: '',
        bookingCode: '',
    });
    const verificationTimerRef = useRef(null);

    const handleStateTransition = (input, data = {}) => {
        const nextState = getNextState(currentState, input);
        console.log('State transition:', currentState, '+', input, '→', nextState);
        setCurrentState(nextState);
        setLastInput(input);

        if (data) {
            setBookingData(prev => ({ ...prev, ...data }));
        }
    };

    const generateBookingCode = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
            letters.charAt(Math.floor(Math.random() * letters.length));
        const randomNumbers = Math.floor(100 + Math.random() * 900);
        return `${randomLetters}-${randomNumbers}`;
    };

    // Auto-transition dari verification ke success
    useEffect(() => {
        if (currentState === STATES.Q3) {
            // Clear any existing timer
            if (verificationTimerRef.current) {
                clearTimeout(verificationTimerRef.current);
            }

            // Set new timer
            verificationTimerRef.current = setTimeout(() => {
                const code = generateBookingCode();
                console.log('Auto transitioning to success with code:', code);
                setCurrentState(STATES.Q4);
                setLastInput(INPUTS.D);
                setBookingData(prev => ({ ...prev, bookingCode: code }));
            }, 2000);
        }

        // Cleanup
        return () => {
            if (verificationTimerRef.current) {
                clearTimeout(verificationTimerRef.current);
            }
        };
    }, [currentState]);

    const renderBookingView = () => {
        switch (currentState) {
            case STATES.Q0:
                return (
                    <HomePage
                        onSelectTime={(movie, time) => {
                            handleStateTransition(INPUTS.A, { movie, time });
                        }}
                    />
                );

            case STATES.Q1:
                return (
                    <SeatSelection
                        movie={bookingData.movie}
                        time={bookingData.time}
                        onConfirm={(seats) => {
                            handleStateTransition(INPUTS.B, { seats });
                        }}
                    />
                );

            case STATES.Q2:
                return (
                    <Checkout
                        bookingData={bookingData}
                        onSubmit={(email) => {
                            console.log('Checkout onSubmit called with email:', email);
                            handleStateTransition(INPUTS.C, { email });
                        }}
                    />
                );

            case STATES.Q3:
                return (
                    <div className="verification-loading">
                        <div className="spinner"></div>
                        <p>Memverifikasi pembayaran...</p>
                    </div>
                );

            case STATES.Q4:
                return (
                    <SuccessPage
                        bookingData={bookingData}
                        onReset={() => {
                            handleStateTransition(INPUTS.F);
                            setBookingData({
                                movie: null,
                                time: null,
                                seats: [],
                                email: '',
                                bookingCode: '',
                            });
                        }}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="app-container">
            <div className="booking-side">
                {renderBookingView()}
            </div>
            <div className="automata-side">
                <AutomataView currentState={currentState} lastInput={lastInput} />
            </div>
        </div>
    );
}

export default App;
