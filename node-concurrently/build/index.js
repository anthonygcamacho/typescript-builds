"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./csvreader/composition/MatchReader");
// import { CsvFileReader } from "./csvreader/composition/CsvFileReader"
// import { ConsoleReport } from "./csvreader/reportTargets/ConsoleReport"
// import { WinsAnalysis } from "./csvreader/analyzers/WinsAnalyzer"
const Summary_1 = require("./csvreader/Summary");
// import { HtmlReport } from "./csvreader/reportTargets/HtmlReport"
// Inheretance
// const reader = new MatchReader("football.csv")
// reader.read()
// Inistantiated
// const csvFileReader = new CsvFileReader("football.csv")
// const matchReader = new MatchReader(csvFileReader)
// Static
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport())
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport())
// summary.buildAndPrintReport(matchReader.matches)
// Static
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
// ------------------------------------------------------------------------------
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
