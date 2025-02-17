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
      <h3>{"Front-end developer and avid reader."}</h3>
      {/*you cant use the Link from next as its only for internal links */}
      <a href="https://github.com" target="_blank">GitHub</a>
      <a href="https://www.frontendmentor.io" target="_blank">Frontend Mentor</a>
      <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://www.facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://www.instagram.com" target="_blank">Instagram</a>
    </div>
  )
}

export default Card