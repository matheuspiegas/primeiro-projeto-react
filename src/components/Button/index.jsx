import React from 'react'
import './styles.css'

export const Button = ({text, loadMorePosts, disabled}) => {
  return <button disabled={disabled} className='btn' onClick={loadMorePosts}>{text}</button>
}
