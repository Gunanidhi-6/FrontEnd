import _ from "lodash";

function capitalizeWords(sentence: string): string {
    return _.startCase(_.toLower(sentence));
}

console.log(capitalizeWords("hello WORLD!")); // Output: "Hello World"
