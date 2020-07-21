import React from 'react'
import {Link} from "react-router-dom";
import './PostItem.scss'
import no_img from "../../assets/images/no-img.png";

const PostItem = props => {
  const images = props.item.labels || props.item.images;
  const description = props.item.style || props.item;
  return (
    <div className='post__wrap'>
      <div className='posts__item fade-in'>
        <div className="posts__img" style={{backgroundImage: `url(${images ? images.medium : no_img })`}}/>
        <div className="posts__wrap">
          <div className="posts__info">
            <p className='cat'>{props.item.style && props.item.style.category.name}</p>
          </div>
          <h4><Link to={`/${props.item.website ? 'brewery' : 'beer'}/${props.item.id}`}>{props.item.name}</Link></h4>
          <p className='posts__description'>{description && description.description}</p>
        </div>
      </div>
    </div>
  )
};

export default PostItem