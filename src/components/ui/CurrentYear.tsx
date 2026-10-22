"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Next 16 forbids reading the clock while prerendering, so the server snapshot is fixed
// and the browser fills in the real year.
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <span>{year}</span>;
}
