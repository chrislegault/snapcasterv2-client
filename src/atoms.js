import { atom } from "jotai";

export const darkModeAtom = atom(true);

export const singleCardResults = atom(null);

// for hiding the welcome header message after the first search
export const hideWelcomeMessage = atom(false);
export const sortedByAtom = atom("price");
export const sortOrderAtom = atom("asc");

export const listViewAtom = atom(false);