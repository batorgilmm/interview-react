"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "./_components/Header";
import { Card } from "./_components/Card";

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  jobTitle: string;
  avatar: string;
  date: string;
};

export default function Home() {
  const [bgColor, setBgColor] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const cards = useMemo(() => {
    const sortedContacts = contacts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return sortedContacts.map((contact) => (
      <Card key={contact.id} contact={contact} />
    ));
  }, [contacts]);

  return (
    <>
      <Header bgColor={bgColor} setBgColor={setBgColor} />

      <div
        className="w-screen p-10 grid grid-cols-4 gap-6 bg-gray-200"
        style={{ backgroundColor: bgColor }}
      >
        {cards}
      </div>
    </>
  );
}
