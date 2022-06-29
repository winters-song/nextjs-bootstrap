import style from "./index.module.css";
import {Container} from "react-bootstrap";

export default function Footer() {

  return <div className={style.pageFooter}>
    <Container>

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