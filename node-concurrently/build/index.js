"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from "./Sorter"
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumberCollections([10, 30, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("TxopWeV");
charactersCollection.sort();
console.log(charactersCollection.data);
