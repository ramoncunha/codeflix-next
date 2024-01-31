import { getUserById } from "@/app/lib/settings";
import { notFound } from "next/navigation";

import React from "react";

async function User({ params }: { params: { id: string } }) {
  const { id, name } = await getUserById(params.id);

  if (!name) {
    notFound()
  }

  return (
      <div>
          <h1>User: {id}</h1>
          <h1>Name: {name}</h1>
      </div>
  )
}

export default User;