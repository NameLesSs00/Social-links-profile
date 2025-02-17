import Image from "next/image"
import Jessica from "@/app/images/avatar-jessica.jpeg"
const Card = () => {
  return (
    <div className="container">
      <Image src={Jessica} alt="Photo of Jessica"
      style={{
        width:"80px",
        borderRadius:"50%",
        marginTop:"10%",
        marginBottom:"5%",
      }}></Image>
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <h3>"Front-end developer and avid reader."</h3>
      {/*you can't use the Link from next as its only for internal links */}
      <a href="https://github.com" target="blank">GitHub</a>
      <a href="https://www.frontendmentor.io">Frontend Mentor</a>
      <a href="https://www.linkedin.com">LinkedIn</a>
      <a href="https://www.facebook.com">Facebook</a>
      <a href="https://twitter.com">Twitter</a>
      <a href="https://www.instagram.com">Instagram</a>
    </div>
  )
}

export default Card