import React from 'react'
import {Link} from "react-router-dom";
import './PostItem.scss'
import no_img from "../../assets/images/no-img.png";

const PostItem = props => {
  return (
    <div className='post__wrap'>
      <div className='posts__item fade-in'>
        <div className="posts__img" style={{backgroundImage: `url(${props.item.labels ? props.item.labels.medium : no_img })`}}>
          {/*<Link to={`/post/${props.item[0]}`}/>*/}
        </div>
        <div className="posts__wrap">
          <div className="posts__info">
            <p className='cat'>{props.item.style && props.item.style.category.name}</p>
            {/*<p className='time'>{props.item[1].timeToRead} min read</p>*/}
          </div>
          <h4><Link to={`/beer/${props.item.id}`}>{props.item.name}</Link></h4>
          <p className='posts__description'>{props.item.style && props.item.style.description}</p>
        </div>
      </div>
    </div>
  )
}

export default PostItem