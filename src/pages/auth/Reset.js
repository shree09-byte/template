import React from 'react'
import Card from '../../components/card/Card'
import styles from './auth.module.scss'
import forgotImg from '../../assets/register.png'
import { Link } from 'react-router-dom'


const Reset = () => {
  return <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
      <img src={forgotImg} alt='login' width="400" />
    </div>
    <Card>
      <div className={styles.form}>
        <h2>
          Reset Password
        </h2>
        <form>
          <input type="text" placeholder='Email' required />
          <button className="--btn --btn-primary --btn-block">Reset Password</button>
          <div>
            <Link to='/reset'>Reset Password</Link>
          </div>
          <div className={styles.links}>
            <p>
              <Link to='/login'>- Login</Link>
            </p>
            <p>
              <Link to='/register'>- Register</Link>
            </p>
          </div>
        </form>
      </div>
    </Card>
  </section>
}

export default Reset