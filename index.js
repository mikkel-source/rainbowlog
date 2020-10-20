function rainbowlog(string) {
    var colors = ["\x1b[31m", "\x1b[33m", "\x1b[34m"]
    var reset = "\x1b[37m"
    var output = "";
    for (let i = 0; i < string.length; i++) {
        output += colors[i % colors.length] + string[i]
    }
    console.log(output + reset)
}
// rainbowlog("hej verden")
module.exports = rainbowlog
