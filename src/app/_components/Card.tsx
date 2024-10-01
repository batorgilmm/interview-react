import Image from "next/image";
import { Contact } from "../page";

type CardProps = {
  contact: Contact;
};

export const Card = ({ contact }: CardProps) => {
  const { id, firstName, lastName, phone, email, jobTitle, avatar } = contact;

  return (
    <div className="flex p-4 rounded-sm items-center gap-4 bg-slate-300">
      <div className="flex-1">
        <div className="w-full pt-[100%] relative rounded-sm overflow-hidden">
          <Image src={avatar} alt={`${firstName} ${lastName}`} fill />
        </div>
      </div>

      <div className="flex-[2]">
        <div className="text-xl">
          {firstName} {lastName}
        </div>
        <div className="text-sm">{phone}</div>
        <div className="text-sm">{email}</div>
        <div className="text-sm">{jobTitle}</div>
      </div>
    </div>
  );
};
