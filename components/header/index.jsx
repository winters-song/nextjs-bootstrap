import {Container, Navbar} from "react-bootstrap";
import Image from 'next/image'

import style from './index.module.css'
import qrcode from '../../public/img/index/store/qrcode.png'

export default function Index() {

  return <div className={style.pageHeader}>
    <Navbar expand="xl" className={style.topBar}>
      <Container className={style.container}>
        <div>
          <div className={style.li}>
            <a href="/">Seller Centre</a>
          </div>
          <div className={style.li}>
            <a href="/shop">Sell on Shopee</a>
          </div>
          <div className={style.li} >
            <a href="/download">Download</a>
            <div className={style.download}>
              <Image src={qrcode} />
              <div className={`${style.store} ${style.appStore}`} />
              <div className={`${style.store} ${style.googlePlay}`} />
              <div className={`${style.store} ${style.appGallery}`} />
            </div>
          </div>
          <div className={style.li}>
            <span>Follow us on</span>
            <a href="https://facebook.com/ShopeeTW" target="_blank" className={`${style.sms} ${style.fb}`} />
            <a href="https://instagram.com/Shopee_TW" target="_blank"  className={`${style.sms} ${style.ins}`} />
          </div>
        </div>

        <div className={style.right}>
          <div className={style.li}>
            <a href="#">
              <svg viewBox="3 2.5 14 14" x="0" y="0" className={`${style.shopeeSvgIcon} ${style.iconNotification}`} >
                <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
                <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
              </svg>
              Notifications</a>
          </div>
          <div className={style.li}>
            <a href="/help">
              <svg height="16" viewBox="0 0 16 16" width="16" className={`${style.shopeeSvgIcon} ${style.iconHelpCenter}`}>
                <g fill="none" fillRule="evenodd" transform="translate(1)">
                  <circle cx="7" cy="8" r="7" stroke="currentColor" />
                  <path fill="currentColor" d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z" />
                </g>
              </svg>
              Help</a>
          </div>
          <div className={style.li}>
            <a href="#">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`${style.iconGlobal}`}>
                <path d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.33398 8H14.6673" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              English</a>
          </div>

          <div className={style.user}>
            <div className={style.li}>
              <a href="/signup">Signup</a>
            </div>
            <div className={style.li}>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  </div>
}
