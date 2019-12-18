import React from 'react'
import PhotoPane from '../components/PhotoPane'
import pageStyle from './styles'

function paneStyle(){
    return {
        background:"white",
        margin: '175px 20% 0px 20%',
        width:'60%'
    }
}

function ViewPictures() {
  return (
    <div style = {paneStyle()}>
      <PhotoPane />
    </div>
  )
}

export default ViewPictures;