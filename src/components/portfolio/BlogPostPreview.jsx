import React from 'react'

export const BlogPostPreview = ({ post }) => {
  // Date element with 'posted' and conditional 'revised' values
  let date
  post.header.date.update === ""
    ? date = (<>{post.header.date.post}</>)
    : date = (<>{post.header.date.post} -- last revised {post.header.date.update}</>)

  // Retrieve first paragraph text from post body object
  const getFirstParagraph = function (bodyHashArray) {
    for (let iPostBody = 0; iPostBody < bodyHashArray.length; iPostBody++) {
      if (Object.keys(bodyHashArray[iPostBody])[0] === "paragraph") {
        return bodyHashArray[iPostBody].paragraph
      }
    }
  }
  const body = getFirstParagraph(post.body)

  return (
    <div className="bpp-container">
      <div className="bpp-title">{post.header.title.main}</div>
      <div className="bpp-subtitle">{post.header.title.subtitle}</div>
      <div className="bpp-date">{date}</div>
      <div className="bpp-body">{body}</div>
    </div>
  )
}