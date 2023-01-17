// import { Sorter } from "./Sorter"
import { NumberCollections } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

const numbersCollection = new NumberCollections([10, 30, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection("TxopWeV")
charactersCollection.sort()
console.log(charactersCollection.data)
