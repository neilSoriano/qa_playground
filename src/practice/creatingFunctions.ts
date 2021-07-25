function fancyPrint(firstString : string, secondString: string) : string {
    // var newString = "***********\n\t" + firstString + "\n\t" + secondString + "\n\t************"
    // return newString
    return `***********\n\t ${firstString}\n\t ${secondString}\n\t**********`
}
console.log(fancyPrint("toy", "car"))