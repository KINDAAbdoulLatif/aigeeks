import { CardMember } from "./CardMember"

export default function Member({members, className}: {members: MembersType, className: string}) {
  return (
    <div className={`px-3 flex  items-center  ${className} `}  >
        {members.map((member, key)=>(
            <CardMember key={key} member={member} />
        ))}
    </div>
  )
}
export type MembersType = {
    index: number,
    title: string,
    image: string
}[]