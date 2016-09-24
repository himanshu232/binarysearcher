'use strict';
const argv = require('yargs').argv;
const _ = require('lodash');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const readline = require('readline');
const chop = require('./chop.js');

class BinarySearcher {

	constructor(numberlist) {
		this.numberlist = numberlist;
	}

    load(numberlist) {

        numberlist = numberlist || this.numberlist;

        return fs
            .readFileAsync(numberlist)
            .then((numberlistBuffer) => {
                let numberlistArray = numberlistBuffer.toString().split('\n');
                this.haystack = numberlistArray.map((num) => parseInt(num));
            });
    }

    search(needle) {
    	return chop(needle, this.haystack);
    }

    static main() {

        let numberlist = argv.numberlist || 'numberlist.txt';

		let bsch = new BinarySearcher(numberlist);

	    const rl = Promise.promisifyAll(readline.createInterface({
	        input: process.stdin,
	        output: process.stdout
	    }));

	    bsch.load()
	        .then(() => {

	            promptForSearch();

	            function promptForSearch(dictionary) {

	                rl.question('Enter a number [CTRL+C to exit]: ', (search) => {

	                	let idx = bsch.search(parseInt(search));
	                    if (idx === -1) {
	                    	console.log(`${search} is not in the list`);
	                    } else {
	                    	console.log(`${search} is at line ${idx + 1}`);
	                    }

	                    return promptForSearch();

	                });

	            }

	        });


    }

}

module.exports = BinarySearcher;

if (require.main === module) {
    BinarySearcher.main();
}
