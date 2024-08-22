import  { useState, useRef, ChangeEvent } from 'react';
import styles from './Email.module.css';
import bean from '../../assets/images/email/email.jpg';
import { Link } from 'react-router-dom';

interface EmailProps { }

interface InputState {
    email: string;
    isFocused: boolean;
    isLabeled: boolean;
}

export function Email(props: EmailProps) {
    const [inputState, setInputState] = useState<InputState>({
        email: '',
        isFocused: false,
        isLabeled: false,
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const errorMessageRef = useRef<HTMLDivElement>(null);

    const handleOnFocus = () => {
        setInputState((prevState) => ({
            ...prevState,
            isFocused: true,
            isLabeled: true,
        }));
    
      
    };
    

    const handleBlur = () => {
        setInputState((prevState) => ({
            ...prevState,
            isFocused: false,
            isLabeled: !!prevState.email, 
        }));
        handleValidation();
    };

  

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        const isValidEmail = validateEmail(newEmail);
    
        setInputState((prevState) => ({
            ...prevState,
            email: newEmail,
        }));
    
        if (inputRef.current) {
            inputRef.current.style.border = isValidEmail ? '' : '2px solid red';
        }
    
        if (errorMessageRef.current) {
            errorMessageRef.current.textContent = isValidEmail ? '' : 'Invalid email address';
        }
    };
    

    const handleValidation = () => {
        const isValidEmail = validateEmail(inputState.email);

        if (inputRef.current) {
            inputRef.current.style.border = isValidEmail ? '' : '2px solid red';
        }

        if (errorMessageRef.current) {
            errorMessageRef.current.textContent = isValidEmail ? '' : 'Invalid email address';
        }
    };


    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <label>Enter your email</label>
                <div
                    className={`${styles.form} ${inputState.isFocused ? styles.focused : ''
                        } ${inputState.isLabeled ? styles.labeled : ''}`}
                >
                    <input
                        type="email"
                        id="myInput"
                        ref={inputRef}
                        value={inputState.email}
                        onChange={handleInputChange}
                        onFocus={handleOnFocus}
                        onBlur={handleBlur}
                    />

                    <label>Email</label>
                    <div
                        className="error-message"
                        ref={errorMessageRef}
                        style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}
                    ></div>
                </div>
                <button>See my results</button>
                <p className={styles.pp}>
                    By providing your email, you agree that Sensa.health will process your email address for target advertising purpose and will share your email address with social media, advertising, and newsletters platforms as described in our{' '}
                    <span>
                        <Link to="/">T&Cs</Link>
                    </span>{' '}
                    and{' '}
                    <span>
                        <Link to="/">Privacy Policy</Link>
                    </span>
                    . We respect your privacy and do not tolerate spam. We will never share or sell your information to third parties.
                </p>
            </div>
            <div className={styles.img}>
                <img src={bean} alt="/bean_img" />
            </div>
        </div>
    );
}
