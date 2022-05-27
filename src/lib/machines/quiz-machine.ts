import { assign, createMachine } from "xstate";
import { atomWithInfiniteQuery } from "jotai/query";
import { atom } from "jotai";

export type QuizEventType = "FETCH" | "RETRY" | "NEXT";

export interface QuizContext {
  answers: any[];
  questions: any[];
}
export interface QuizEvent {
  type: QuizEventType;
  data?: any;
}

export const quizMachine = createMachine<QuizContext, QuizEvent>({
  id: "quiz",
  initial: "idle",
  context: {
    answers: [],
    questions: [],
  },
  states: {
    idle: {
      on: {
        FETCH: { target: "loading" },
      },
    },
    loading: {
      invoke: {
        id: "getQuestions",
        src: async (_, { data }) => data,
        onDone: {
          target: "success",
          actions: assign({ questions: (_, event) => event.data }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
});
