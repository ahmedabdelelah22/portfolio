import Image from 'next/image'
import React from 'react'

function DevImg({containerStyle,imgSrc ,imgStyle}) {
  return (
    <div className={`${containerStyle}`} >
      <Image src={imgSrc} priority  alt='' width={450} height={500} className={imgStyle} />
    </div>
  )
}

export default DevImg