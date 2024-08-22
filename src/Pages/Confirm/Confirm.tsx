
import styles from './Confirm.module.css';
import  confirm_img from '../../assets/images/confirm/confirm.jpg'
export function Confirm () {
    return (
        <div className={styles.container}>
            <img src={confirm_img} alt='noimgfound'/>
            <h2> Ready to see your plan?</h2>
            <p>Having the courage to focus on your problems is not easy – we're proud of you for already making the first step.</p>
           <p>Sensa is designed to help you change how you think, and how you act.</p>
           <p>Every journey begins with a single step.</p>
      
          <button>Continue</button>
        
        </div>
    );
};
