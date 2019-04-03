const LIST = [
    {
        name: 'Googlebot',
        test: [/googlebot/i],
        match: [/googlebot\/(\d+(\.\d+))/i]
    }
]

function getFirstMatch(regexp, ua) {
    const match = ua.match(regexp);
    return (match && match.length > 0 && match[1]) || '';
}
function getSecondMatch(regexp, ua) {
    const match = ua.match(regexp);
    return (match && match.length > 1 && match[2]) || '';
}

getFirstMatch(LIST[0].match, );