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

  return (
    <>
      <Header bgColor={bgColor} setBgColor={setBgColor} />

      <div
        className="w-screen p-10 grid grid-cols-4 gap-6 bg-gray-200"
        style={{ backgroundColor: bgColor }}
      >
        {/* Your code  */}
      </div>
    </>
  );
}
