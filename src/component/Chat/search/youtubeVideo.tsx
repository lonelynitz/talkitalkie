

export const YoutubeVideo = (Videos:any) => {
  const videoId = Videos?.Videos[0]?.id?.videoId
  const videoSrc = `https://www.youtube.com/embed/${videoId}`
  return(
    <div>
      <iframe src={videoSrc} />
    </div>
  )
}