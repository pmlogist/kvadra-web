// @ts-nocheck
import { assign, createMachine } from "xstate";

import { API } from "../api";

const initialContext = {
  gameId: null,
  page: 0,
  length: 0,
  questions: [],
  result: [],
  score: null,
};

export const quizMachine = createMachine<{
  questions: { id: number; question: string; answers: string[] }[];
  result: unknown[];
  page: number;
  length: number;
  score: number;
}>(
  {
    id: "quiz",
    initial: "idle",
    context: initialContext,
    states: {
      idle: {
        on: {
          FETCH: { target: "loading" },
          RESTART: {
            target: "idle",
            actions: assign({ ...initialContext }),
          },
        },
      },
      loading: {
        invoke: {
          id: "getQuiz",
          src: async (_, { gameId }) => API.QUIZ.ONE(gameId),
          onDone: {
            target: "success",
            actions: assign({
              gameId: (_, event) => event.data.gameId,
              questions: (_, event) => event.data.questions,
              length: (_, event) => event.data.questions.length,
            }),
          },
          onError: {
            target: "failure",
          },
        },
      },
      success: {
        on: {
          FINISH: {
            target: "finish",
            actions: "play",
          },
          NEXT: {
            target: "success",
            actions: "play",
          },
        },
      },
      failure: {},
      finish: {
        invoke: {
          id: "postCorrect",
          src: async (ctx) => API.HISTORIES.CREATE(JSON.stringify(ctx.result)),
          onDone: {
            target: "idle",
            actions: assign({
              score: (_, event) => event.data.score,
            }),
          },
          onError: {
            target: "failure",
          },
        },
      },
      test: {},
    },
  },
  {
    actions: {
      play: assign({
        page: (ctx) => ctx.page + 1,
        result: (ctx, event) => {
          let answer = { id: event.value.id, choice: event.value.choice };

          if (!ctx.result.answers) {
            return {
              gameId: ctx.gameId,
              ...ctx.result,
              answers: [answer],
            };
          } else {
            return {
              ...ctx.result,
              answers: [...ctx.result.answers, answer],
            };
          }
        },
      }),
    },
    guards: {
      gameFinished: (ctx) => {
        console.log(ctx);
        return true;
      },
    },
  }
);
