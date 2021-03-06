
import style from "./index.module.css";
import Link from '@mui/material/Link';
/* header搜索提示词 */

const list = ['Mask', 'Premiummall', 'Durian', 'Crocs', 'Water Bottle',
  'Apple Watch Strap', 'Tote Bag', 'Dress']

// 关键词转换成搜索url
const str2Url = (str) => {
  const param = encodeURIComponent("Water Bottle".toLowerCase())
  return `/search?keyword=${param}`
}

export default function Keywords() {
  return <div className={style.keywords}>
    {list.map((item, index)=> (
      <Link href={str2Url(item)} key={index} underline="none">{item}</Link>
    ))}
  </div>
}