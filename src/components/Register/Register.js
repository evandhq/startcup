import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { client } from 'helpers/ApiClient';
import styles from './Register.scss';

@reduxForm({
  form: 'register',
  fields: [
    'name',
    'url',
    'logo',
    'email',
    'mobile',
    'players[].name',
    'players[].email',
    'players[].mobile'
  ]
})
export default class Register extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    initializeForm: PropTypes.func.isRequired
  };

  state = {
    loading: false,
    sent: false
  };

  componentWillMount() {
    this.props.initializeForm({
      players: [{name: '', email: '', mobile: ''}]
    });
  }

  handleSubmit = data => {
    this.setState({loading: true, sent: false});
    client
      .storeTeam(data)
      .then(res => {
        this.setState({loading: false, sent: true});
        alert('اطلاعات با موفقیت ارسال شد. به زودی به شما خبر می‌دهیم.');
      })
      .catch(res => {
        this.setState({loading: false, sent: false});
      });
  };

  renderForm() {
    const { fields: { name, url, logo, players, mobile, email }, handleSubmit } = this.props;

    return (<form action="#" onSubmit={handleSubmit(this.handleSubmit)}>
      <h2>تیم خود را ثبت نام کنید!</h2>
      <p>از طریق این فرم یک <strong>پیش‌ثبت‌نام</strong> انجام می‌دید و بعدا با شما تماس خواهیم گرفت.</p>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span>نام استارتاپ</span>
          <input type="text" {...name} className={styles.input}/>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span>آدرس وب‌سایت</span>
          <input type="text" {...url} className={styles.input}/>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span>شماره موبایل مسئول تیم</span>
          <input type="text" {...mobile} className={styles.input}/>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span>ایمیل مسئول تیم</span>
          <input type="email" {...email} className={styles.input}/>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span>URL لوگو (ترجیحا مربعی)</span>
          <input type="text" {...logo} className={styles.input}/>
        </label>
      </div>

      {
        /*
         *
         <h3 className={styles.playersHeader}>
         <span>بازیکنان</span>
         <button type="button" className={styles.addPlayerButton} onClick={() => players.addField()}>
         <i className="ion-person-add"/> افزودن بازیکن
         </button>
         </h3>
         */
      }

      {
        /*  players.map((child, index) =>
         <div key={index} className={styles.player}>
         <div className={styles.formGroup}>
         <label className={styles.label}>
         <span>نام بازیکن</span>
         <input type="text" {...child.name} className={styles.input}/>
         </label>
         </div>
         <div className={styles.formGroup}>
         <label className={styles.label}>
         <span>ایمیل</span>
         <input type="email" {...child.email} className={styles.input}/>
         </label>
         </div>
         <div className={styles.formGroup}>
         <label className={styles.label}>
         <span>شماره موبایل</span>
         <input type="text" {...child.mobile} className={styles.input}/>
         </label>
         </div>

         <button
         type="button"
         className={styles.removePlayerButton}
         onClick={() => {players.removeField(index);}}
         >
         <i className="ion-trash-a"/> حذف
         </button>
         </div>
         )*/
      }

      <button className={styles.submitForm} type="submit">
        <i className="ion-paper-airplane"/> ثبت تیم
      </button>

      <div>
        <a href="https://telegram.me/startcup" className={styles.btnJoinTelegram}>
          <i className="ion-paper-airplane"/> جهت دریافت اخبار، حتما در کانال تلگرام استارت‌کاپ عضو شوید.
        </a>
      </div>
    </form>);
  }

  render() {
    const { loading, sent } = this.state;

    return (<div className={styles.wrapper} id="register">
      <div className={styles.container}>
        {
          !loading && !sent ? this.renderForm() : null
        }
        {
          loading ? 'در حال ارسال اطلاعات' : null
        }
        {
          sent ? 'اطلاعات تیم شما با موفقیت ارسال شد. لازم است تا صحت اطلاعات بررسی شود و به زودی به شما خبر می‌دیم.' : null
        }
      </div>
    </div>);
  }
}
