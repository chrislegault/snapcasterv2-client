import { atom } from "jotai";

export const darkModeAtom = atom(true);

export const singleCardResults = atom(null);

// for hiding the welcome header message after the first search
export const hideWelcomeMessage = atom(false);
export const sortedByAtom = atom("price");
export const sortOrderAtom = atom("asc");

export const listViewAtom = atom(false);

export const selectedBulkStoresAtom = atom([]);

export const bulkCardInputAtom = atom("");

export const bulkCardResultsAtom = atom(null);

export const expectedBulkCardCountAtom = atom(0);
export const missingCardNamesAtom = atom([]);
export const selectedCatalogRowsAtom = atom([]);