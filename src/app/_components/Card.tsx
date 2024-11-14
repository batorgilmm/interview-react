import Image from "next/image";
import { Contact } from "../page";
import { memo } from "react";

type CardProps = {
  contact: Contact;
};

export const Card = memo(({ contact }: CardProps) => {
  const { id, firstName, lastName, phone, email, jobTitle, avatar } = contact;

  return <div className="space-y-4 bg-white rounded-lg p-4">
    <Image src={avatar} height={60} width={60} className="rounded-full h-[60px] w-[60px]" objectFit="cover" alt={contact.avatar} />

    <div>
      <h1 className="text-2xl">{firstName}</h1>
      <h6 className="text-gray-400 font-medium">{jobTitle}</h6>
    </div>

    <div className="text-sm">
      <div className="flex justify-between items-center">
        <p className="font-bold">Phone:</p>
        <span className="text-gray-400">{phone}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Email:</p>
        <span className="text-gray-400">{email}</span>
      </div>
    </div>

  </div>;
});


Card.displayName = 'Card'