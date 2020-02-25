import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

export const BlogPostPreview = ({ post }) => {
  // Date element with 'posted' and conditional 'revised' values
  let date
  post.header.date.update === ''
    ? (date = <>{post.header.date.post}</>)
    : (date = (
        <>
          {post.header.date.post} -- last revised {post.header.date.update}
        </>
      ))

  // Retrieve first paragraph text from post body object
  const getFirstParagraph = function(bodyHashArray) {
    for (let iPostBody = 0; iPostBody < bodyHashArray.length; iPostBody++) {
      if (Object.keys(bodyHashArray[iPostBody])[0] === 'paragraph') {
        return bodyHashArray[iPostBody].paragraph
      }
    }
  }

  const getSecondParagraph = function(bodyHashArray) {
    let isFirstParagraphPassed = false
    for (let iPostBody = 0; iPostBody < bodyHashArray.length; iPostBody++) {
      if (
        Object.keys(bodyHashArray[iPostBody])[0] === 'paragraph' &&
        isFirstParagraphPassed == false
      ) {
        isFirstParagraphPassed = true
      } else if (
        Object.keys(bodyHashArray[iPostBody])[0] === 'paragraph' &&
        isFirstParagraphPassed == true
      ) {
        return bodyHashArray[iPostBody].paragraph
      }
    }
  }

  let { url } = useRouteMatch()
  return (
    <div className="bpp-container">
      <div className="bpp-title">{post.header.title.main}</div>
      <div className="bpp-subtitle">{post.header.title.subtitle}</div>
      <div className="bpp-date">{date}</div>
      <p className="bpp-body">{getFirstParagraph(post.body)}</p>
      <p className="bpp-body second-paragraph">
        {getSecondParagraph(post.body)}
      </p>
      <div className="bpp-navlink-container">
        <NavLink to={`${url}${post.relPath}`} className="navlink">
          read more &rarr;
        </NavLink>
      </div>
    </div>
  )
}