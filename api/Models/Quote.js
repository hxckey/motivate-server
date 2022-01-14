const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Quote {
    constructor(data){
        this.id = data.id
        this.quote = data.quote
        this.author = data.author
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const quotesData = await db.quotes.find().toArray()
                const quotes = quotesData.map(q => new Quote({ ...q, id: q._id }))
                resolve(quotes);
            } catch (err) {
                console.log(err);
                reject("Error retrieving quotations.")
            }
        })
    }

    static findRandom() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const randomQuoteData = await db.collection('quotes').aggregate([{$sample: {size: 1}}]).toArray()
                const quote = new Quote({...randomQuoteData[0], id: randomQuoteData[0]._id});
                resolve (quote);
            } catch(err) {
                reject('Sorry! Couldn\'t find anything!');
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let quoteData = await db.collection('quotes').find({ _id: ObjectId(id) }).toArray()
                let quote = new Quote({...quoteData[0], id: quoteData[0]._id});
                resolve (quote);
            } catch (err) {
                reject('Sorry! Couldn\'t find that one!');
            }
        });
    }

    // IMPLEMENT CREATE AT A LATER DATE 
    // static create(name, age){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const db = await init();
    //             let dogData = await db.collection('dogs').insertOne({ name, age })
    //             let newDog = new Dog(dogData.ops[0]);
    //             resolve (newDog);
    //         } catch (err) {
    //             reject('Error creating dog');
    //         }
    //     });
    // }

};

module.exports = Quote;