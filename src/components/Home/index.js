import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="profile-container">
      <img
        src="https://media-exp3.licdn.com/dms/image/C5603AQG-ooOeLiGOBA/profile-displayphoto-shrink_100_100/0/1601804990362?e=1628726400&v=beta&t=Vfj7y6qkPH6D48dPNwtn7Dp7X3VHr_SETuAuO99xOaI"
        className="profile"
        alt="profile"
      />
      <h1 className="name">Bathula Prathap</h1>
      <p className="designation">Software Developer</p>
    </div>
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
