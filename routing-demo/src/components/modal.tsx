"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (event) => {
      if (
        event.target === overlay.current ||
        event.target === wrapper.current
      ) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-2/5"
      >
        {children}
      </div>
    </div>
  );
}
