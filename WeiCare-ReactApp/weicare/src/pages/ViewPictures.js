import React from 'react'
import PhotoPane from '../components/PhotoPane'

function paneStyle(){
    return {
        background:"white",
        margin: '5% 20% 0px 20%',
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