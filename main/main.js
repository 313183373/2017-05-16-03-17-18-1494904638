// Write your cade below:
module.exports = function main(a,b) {
    if(a<b){
        return main(b,a);
    }
    return a%b;
};