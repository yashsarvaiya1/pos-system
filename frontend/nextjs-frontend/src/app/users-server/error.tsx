"use client"

import { use, useEffect } from "react"

export default async function Error( {error} : {error: Error} ) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex item-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error Fetching the users data</div>
    </div>
  );
}