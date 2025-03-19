"use client";

import {
  //  useAuth,
  useUser,
} from "@clerk/nextjs";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  // const { isLoaded: authIsLoaded, userId, sessionId, getToken } = useAuth();
  const {
    isLoaded: userIsLoaded,
    isSignedIn,
    // user,
  } = useUser();

  if (
    !userIsLoaded ||
    !isSignedIn
    // !authIsLoaded || !userId
  ) {
    return null;
  }

  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none"
      >
        Increment
      </button>
    </>
  );
}
