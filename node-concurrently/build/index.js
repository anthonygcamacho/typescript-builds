"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./csvreader/composition/MatchReader");
const CsvFileReader_1 = require("./csvreader/composition/CsvFileReader");
const ConsoleReport_1 = require("./csvreader/reportTargets/ConsoleReport");
const WinsAnalyzer_1 = require("./csvreader/analyzers/WinsAnalyzer");
const Summary_1 = require("./csvreader/Summary");
// Inheretance
// const reader = new MatchReader("football.csv")
// reader.read()
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalyzer_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport())
summary.buildAndPrintReport(matchReader.matches);
// let manUnitedWins = 0
// // Inheretance
// // for (let match of reader.data) {
// // Composition
// for (let match of matchReader.matches) {
//     if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++
//     } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++
//     }
// }
// console.log(`Man United won ${manUnitedWins} games`)
// ------------------------------------------------------------------------------
// SORTER
// import { NumberCollections } from "./sorter/NumbersCollection"
// import { CharactersCollection } from "./sorter/CharactersCollection"
// const numbersCollection = new NumberCollections([10, 30, -5, 0])
// numbersCollection.sort()
// console.log(numbersCollection.data)
// const charactersCollection = new CharactersCollection("TxopWeV")
// charactersCollection.sort()
// console.log(charactersCollection.data)
