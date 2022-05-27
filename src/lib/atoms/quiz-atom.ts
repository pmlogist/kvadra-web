import { atomWithMachine } from "jotai/xstate";
import { quizMachine } from "@/lib/machines/";

export const quizAtom = atomWithMachine(quizMachine, {
  devTools: process.env.NODE_ENV === "development",
});
