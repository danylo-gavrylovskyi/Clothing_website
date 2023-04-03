import React from "react";
import styles from './Card.module.css';
import ContentLoader from "react-content-loader"; 

function Card({imageUrl, hoverImgUrl, cartAddHandler, name, price, addInfo, obj, liked=false, onAddToLiked, isLoading}){
    const [onImage, setOnImage] = React.useState(false)

    function isHovered(){
        setOnImage(!onImage)
    }

    const [size, setSize] = React.useState("SIZE")

    const [isShown, setShow] = React.useState(false)

    function showSizes(){
        setShow(!isShown)
    }

    const [isClickedLike, setLiked] = React.useState(liked)
    const onLike = (item) => {
        setLiked(!isClickedLike)
        onAddToLiked(item)
    }

    return(
        <>
            {
                isLoading ? <ContentLoader 
                speed={2}
                width={300}
                height={400}
                viewBox="0 0 340 540"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="0" ry="0" width="340" height="470" /> 
                <circle cx="310" cy="500" r="25" /> 
                <rect x="0" y="480" rx="0" ry="0" width="250" height="15" /> 
                <rect x="0" y="505" rx="0" ry="0" width="192" height="15" />
              </ContentLoader> : <section className={styles.item}>
              <div className={styles.item_img}>
              <div onMouseEnter={isHovered} onMouseLeave={isHovered}>
                  <img src={imageUrl} ></img>
                  {onImage && <img className={styles.hover_img} src={hoverImgUrl}></img>}
                  <div className={styles.sale}>-30%</div>

                  {onImage &&
                  <div className={styles.dropdown_sizes_menu}>
                      {isShown && <div onMouseLeave={showSizes} className={styles.size_options}>
                          <p onClick={() => {setSize("XS"); showSizes()}}>XS</p>
                          <p onClick={() => {setSize("S"); showSizes()}}>S</p>
                          <p onClick={() => {setSize("M"); showSizes()}}>M</p>
                          <p onClick={() => {setSize("L"); showSizes()}}>L</p>
                          <p onClick={() => {setSize("XL"); showSizes()}}>XL</p>
                      </div>}
                      <p className={styles.choosed_option} onMouseEnter={showSizes}> {size} <img src="img/icons/down_arrow.svg"></img></p>
                      <button className={styles.add_to_cart} onClick={() => cartAddHandler(obj)}>ADD</button>
                  </div>}
              </div>
          </div>

          <div className={styles.grid_under_image}>
              <div className={styles.description}>
                  <a href="#">
                      <p className={styles.lighter_black}>{name}</p>
                      <p><span className={styles.bolder}>{price}PLN</span></p>
                      <p className={styles.light_grey_font}>{addInfo}</p>
                  </a>
              </div>

              <div className={styles.like_btn}>
                  <button onClick={() => onLike(obj)}><img className={styles.like_btn_img} src={isClickedLike ? "img/icons/red-heart.svg" : "img/icons/void-heart.svg"}></img></button>
              </div>
          </div></section>
            }
        </>
    )
}

export default Card