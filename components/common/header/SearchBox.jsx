import style from "./index.module.css";
import { useRouter } from 'next/router'
import {useEffect} from "react";
import SearchIcon from '@mui/icons-material/Search';

/* header搜索框 */
export default function SearchBox () {

  const router = useRouter()

  // 预加载搜索页
  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = e => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      if(!q){
        return
      }

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return <div className={style.searchBox}>
    <input type="text" className={style.searchInput} placeholder={"Shopee Premium: Top Picks for your Sun-Kissed Days"}
           onKeyUp={handleKeyUp}/>
    <div className={style.searchButton}>
      <SearchIcon />
    </div>
  </div>
}