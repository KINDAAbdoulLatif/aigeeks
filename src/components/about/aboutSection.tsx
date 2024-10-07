import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const abouts = [
    {
        icon: <IoPersonCircleOutline className="w-16 h-16" /> ,
        title: "Officers"
    },
    {
        icon: <FaPeopleGroup className="w-16 h-16" /> ,
        title: "Members"
    },
    {
        icon: <FaCalendarAlt className="w-16 h-16 -ml-1" /> ,
        title: "Events"
    },
    {
        icon: <MdOutlineMail className="w-16 h-16 md:ml-6" /> ,
        title: "Emails/Newsletters"
    },

]
export default function AboutSection() {

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-20 h-auto">
        {abouts.map((about, key)=>(
            <div key={key} className="flex flex-col h-auto">
                <span> {about.icon} </span>
                <span> {about.title} </span>
            </div>
        ))}
        
    </div>
  )
}