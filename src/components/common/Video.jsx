import React from 'react'

export default function Video() {
  return (
      <div className="relative mt-10 md:mt-20 mb-10">
        <video
          autoPlay
          loop
          muted
          controls
          playsInline // IMPORTANTE para iOS
          className="w-full md:max-w-5xl mx-auto md:rounded-lg shadow-[0_0_20px_rgba(82,9,154,0.8)]"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
  )
}
