import "./HomePage.css";
// import videoFile from '/video.mp4';


function HomePage(){
  return(
    <div className="HomePage">
        <video width="100%" autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
          {/* Add more <source> tags for other video formats */}
         
        </video>
    </div>
  )
}

export default HomePage;