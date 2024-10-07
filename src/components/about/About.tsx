import AboutSection from "./aboutSection";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center h-auto md:h-screen bg-[#43145C] py-6 text-white space-y-10">
        <h1 className="text-3xl text-white">About Us</h1>
        <div className="w-2/3 mx-auto text-lg">
            <p>
                Welcome to the AI Club at ENSA Tetouan! We are a passionate group of students dedicated 
                to exploring the cutting-edge field of Artificial Intelligence. Our club brings together 
                enthusiasts from diverse backgrounds to learn, discuss, and innovate in AI technologies. 
                Whether you&apos;re a beginner curious about machine learning or a seasoned coder exploring neural
                 networks, our club provides a supportive environment to grow your skills and connect with 
                 like-minded peers. Join us as we delve into fascinating AI applications, host workshops, and 
                 collaborate on exciting projects that shape the future of technology!
            </p>
        </div>
        <AboutSection />
    </div>
  )
}