import { PropositionsState, TriedState } from "../types";

export const initiatePropositionsState = (
  propositions: string[]
): Array<PropositionsState> => {
  return propositions.map((letter) => {
    return { letter, triedState: TriedState.NOT_TRIED };
  });
};
