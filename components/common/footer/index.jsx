import Image from "next/image";
import style from "./index.module.css";
import Container from '@mui/material/Container';

import BTC from '../../../public/img/index/payment/BTC.png'
import ETH from '../../../public/img/index/payment/ETH.png'

export default function Footer() {

  return <div className={style.pageFooter}>
    <Container>
      <div className={style.footerInfo}>

        <div className={style.column}>
          <div className={style.title}>Customer Service</div>
          <ul className={style.links}>
            <li><a href="https://help.shopee.sg/sg/s" >help centre</a></li>
            <li><a href="https://help.shopee.sg/sg/s/article/How-do-I-buy-something-on-Shopee-1542975935058" >How to Buy</a></li>
            <li><a href="https://help.shopee.sg/sg/s/article/How-do-I-start-selling-on-Shopee-1542975959583" >how to sell</a></li>
            <li><a href="https://help.shopee.sg/sg/s/article/What-payment-methods-are-supported-by-Shopee-1542975933064" >Payment methods</a></li>
            <li><a href="https://help.shopee.sg/sg/s/topic/0TO6F000000Qz2PWAS/shopee-coins" >Shopee Coins</a></li>
            <li><a href="https://help.shopee.sg/sg/s/article/What-is-Shopee-Guarantee-1542975959578" >shopee guarantee</a></li>
            <li><a href="https://help.shopee.sg/sg/s/topic/0TO6F000000Qz2TWAS/for-buyers" >Return &amp; Refund</a></li>
            <li><a href="https://help.shopee.sg/sg/s/topic/0TO6F000000Qz2dWAC/returns-refunds-related" >Shopee Mall Return &amp; Refund</a></li>
            <li><a href="https://help.shopee.sg/sg/s/article/How-can-I-contact-Shopee-Customer-Service-1542975960365" >Contact us</a></li>
          </ul>
        </div>

        <div className={style.column}>
          <div className={style.title}>about shopee</div>
          <ul className={style.links}>
            <li><a href="https://careers.shopee.com/about/">About Us</a></li>
            <li><a href="https://careers.shopee.com/jobs">Shopee Careers</a></li>
            <li><a href="https://shopee.sg/legaldoc/policies/">Shopee Policies</a></li>
            <li><a href="https://shopee.sg/docs/107">Privacy Policy</a></li>
            <li><a href="https://shopee.sg/blog">Shopee Blog</a></li>
            <li><a href="https://shopee.sg/mall/">Shopee Mall</a></li>
            <li><a href="https://seller.shopee.sg/">seller centre</a></li>
            <li><a href="https://shopee.sg/m/shopee-pros">Shopee Pros</a></li>
            <li><a href="https://shopee.sg/flash_deals/">Flash Deals</a></li>
            <li><a href="mailto:media.sg%40shopee.com" title="media.sg@shopee.com">Media Contact</a></li>
            <li><a href="https://shopee.sg/m/shopee-ambassador-programme" >Shopee Ambassador Programme</a></li>
          </ul>
        </div>

        <div className={style.column}>
          <div className={style.title}>payment</div>
          <ul className={style.links}>
            <li>
              <Image src={BTC} width={30} height={30}/>
            </li>
            <li>
              <Image src={ETH} width={30} height={30} />
            </li>
          </ul>
        </div>

        <div className={style.column}>
          <div className={style.title}>follow us</div>
          <ul className={style.links}>
            <li><a href="https://facebook.com/ShopeeSingapore" target="_blank">
              <span className={`${style.sms} ${style.fb}`}/>Facebook</a></li>
            <li><a href="https://instagram.com/Shopee_SG" target="_blank">
              <span className={`${style.sms} ${style.ins}`}/>Instagram</a></li>
            <li><a href="https://sg.linkedin.com/company/shopee" target="_blank">
              <span className={`${style.sms} ${style.linkedIn}`}/>LinkedIn</a></li>
          </ul>
        </div>

        <div className={style.column}>
          <div className={style.title}>Shopee app download</div>
          <div className={style.download}>
            <div className={style.qrcode}  />
            <div className={style.stores}>
              <div className={`${style.store} ${style.appStore}`} />
              <div className={`${style.store} ${style.googlePlay}`} />
              <div className={`${style.store} ${style.appGallery}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomBar}>
        <div className={style.copyright}>© 2022 Shopee. All Rights Reserved.</div>
        <div className={style.sites}>
          <div className={style.siteText}>Country &amp; Region:</div>
          <a href="https://shopee.sg" className={style.siteLink} >Singapore</a>
          <a href="https://shopee.co.id" className={style.siteLink} >Indonesia</a>
          <a href="https://shopee.tw" className={style.siteLink} >Taiwan</a>
          <a href="https://shopee.co.th" className={style.siteLink} >Thailand</a>
          <a href="https://shopee.com.my" className={style.siteLink} >Malaysia</a>
          <a href="https://shopee.vn" className={style.siteLink} >Vietnam</a>
          <a href="https://shopee.ph" className={style.siteLink} >Philippines</a>
          <a href="https://shopee.com.br" className={style.siteLink} >Brazil</a>
          <a href="https://shopee.com.mx" className={style.siteLink} >México</a>
          <a href="https://shopee.com.co" className={style.siteLink} >Colombia</a>
          <a href="https://shopee.cl" className={style.siteLink} >Chile</a>
          <a href="https://shopee.pl" className={style.siteLink} >Poland</a>
          <a href="https://shopee.es" className={style.siteLink} >Spain</a>
          <a href="https://shopee.com.ar" className={style.siteLink} >Argentina</a>
        </div>
      </div>
    </Container>
  </div>
}