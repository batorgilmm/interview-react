import { Contact } from "../page";

type CardProps = {
  contact: Contact;
};

export const Card = ({ contact }: CardProps) => {
  const { id, firstName, lastName, phone, email, jobTitle, avatar } = contact;

  return <></>;
};
