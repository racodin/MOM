var system = {
    OS: {
        bit: "",
        name: "",
        version: "",
    },
    browser: {
        code: navigator.appCodeName,
        engine: navigator.product,
        language: navigator.language,
        name: "",
        online: navigator.onLine,
        version: "",
    }
}


const browsersList = [
    /* Googlebot */
    {
        test: [/googlebot/i],
        describe(ua) {
            const browser = {
                name: 'Googlebot',
            };
            const version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },

    /* Opera < 13.0 */
    {
        test: [/opera/i],
        describe(ua) {
            const browser = {
                name: 'Opera',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },

    /* Opera > 13.0 */
    {
        test: [/opr\/|opios/i],
        describe(ua) {
            const browser = {
                name: 'Opera',
            };
            const version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/SamsungBrowser/i],
        describe(ua) {
            const browser = {
                name: 'Samsung Internet for Android',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/Whale/i],
        describe(ua) {
            const browser = {
                name: 'NAVER Whale Browser',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/MZBrowser/i],
        describe(ua) {
            const browser = {
                name: 'MZ Browser',
            };
            const version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/focus/i],
        describe(ua) {
            const browser = {
                name: 'Focus',
            };
            const version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/swing/i],
        describe(ua) {
            const browser = {
                name: 'Swing',
            };
            const version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/coast/i],
        describe(ua) {
            const browser = {
                name: 'Opera Coast',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/yabrowser/i],
        describe(ua) {
            const browser = {
                name: 'Yandex Browser',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/ucbrowser/i],
        describe(ua) {
            const browser = {
                name: 'UC Browser',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/Maxthon|mxios/i],
        describe(ua) {
            const browser = {
                name: 'Maxthon',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/epiphany/i],
        describe(ua) {
            const browser = {
                name: 'Epiphany',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/puffin/i],
        describe(ua) {
            const browser = {
                name: 'Puffin',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/sleipnir/i],
        describe(ua) {
            const browser = {
                name: 'Sleipnir',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/k-meleon/i],
        describe(ua) {
            const browser = {
                name: 'K-Meleon',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/micromessenger/i],
        describe(ua) {
            const browser = {
                name: 'WeChat',
            };
            const version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/msie|trident/i],
        describe(ua) {
            const browser = {
                name: 'Internet Explorer',
            };
            const version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/edg([ea]|ios)/i],
        describe(ua) {
            const browser = {
                name: 'Microsoft Edge',
            };

            const version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/vivaldi/i],
        describe(ua) {
            const browser = {
                name: 'Vivaldi',
            };
            const version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/seamonkey/i],
        describe(ua) {
            const browser = {
                name: 'SeaMonkey',
            };
            const version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/sailfish/i],
        describe(ua) {
            const browser = {
                name: 'Sailfish',
            };

            const version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/silk/i],
        describe(ua) {
            const browser = {
                name: 'Amazon Silk',
            };
            const version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/phantom/i],
        describe(ua) {
            const browser = {
                name: 'PhantomJS',
            };
            const version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/slimerjs/i],
        describe(ua) {
            const browser = {
                name: 'SlimerJS',
            };
            const version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(ua) {
            const browser = {
                name: 'BlackBerry',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/(web|hpw)[o0]s/i],
        describe(ua) {
            const browser = {
                name: 'WebOS Browser',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/bada/i],
        describe(ua) {
            const browser = {
                name: 'Bada',
            };
            const version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/tizen/i],
        describe(ua) {
            const browser = {
                name: 'Tizen',
            };
            const version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/qupzilla/i],
        describe(ua) {
            const browser = {
                name: 'QupZilla',
            };
            const version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/firefox|iceweasel|fxios/i],
        describe(ua) {
            const browser = {
                name: 'Firefox',
            };
            const version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/chromium/i],
        describe(ua) {
            const browser = {
                name: 'Chromium',
            };
            const version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },
    {
        test: [/chrome|crios|crmo/i],
        describe(ua) {
            const browser = {
                name: 'Chrome',
            };
            const version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },

    /* Android Browser */
    {
        test(parser) {
            const notLikeAndroid = !parser.test(/like android/i);
            const butAndroid = parser.test(/android/i);
            return notLikeAndroid && butAndroid;
        },
        describe(ua) {
            const browser = {
                name: 'Android Browser',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },

    /* PlayStation 4 */
    {
        test: [/playstation 4/i],
        describe(ua) {
            const browser = {
                name: 'PlayStation 4',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },

    /* Safari */
    {
        test: [/safari|applewebkit/i],
        describe(ua) {
            const browser = {
                name: 'Safari',
            };
            const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

            if (version) {
                browser.version = version;
            }

            return browser;
        },
    },

    /* Something else */
    {
        test: [/.*/i],
        describe(ua) {
            return {
                name: Utils.getFirstMatch(/^(.*)\/(.*) /, ua),
                version: Utils.getSecondMatch(/^(.*)\/(.*) /, ua),
            };
        },
    }
]


var OSName = "Unknown";
var OSVersion = "Unknown";
var OSBit = "Unknown";

var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(nAgt);
var majorVersion = parseInt(nAgt, 10);
var nameOffset, verOffset, ix;

var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(nAgt);
var majorVersion = parseInt(nAgt, 10);
var nameOffset, verOffset, ix;


if (nAgt.indexOf("Win64") != -1) OSBit = "x64";
if (nAgt.indexOf("WOW64") != -1) OSBit = "x64";


// "Windows" for all versions of Windows
if (nAgt.indexOf("Win") != -1) OSName = "Windows";
if (nAgt.indexOf("NT 5.1") != -1) OSVersion = "XP";
if (nAgt.indexOf("NT 6.0") != -1) OSVersion = "Vista";
if (nAgt.indexOf("NT 6.1") != -1) OSVersion = "7";
if (nAgt.indexOf("NT 8.0") != -1) OSVersion = "8";
if (nAgt.indexOf("NT 8.1") != -1) OSVersion = "8.1";
if (nAgt.indexOf("NT 10.0") != -1) OSVersion = "10";

// "MacOS" for all versions of Macintosh OS
if (nAgt.indexOf("Mac") != -1) OSName = "iOS";
// "Linux" for all versions of Linux
if (nAgt.indexOf("X11") != -1) OSName = "UNIX";
// "UNIX" for all other UNIX flavors
if (nAgt.indexOf("Linux") != -1) OSName = "Linux";




// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1) fullVersion = nAgt.substring(verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1) fullVersion = nAgt.substring(verOffset + 8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) browserName = navigator.appName;
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(nAgt);
    majorVersion = parseInt(nAgt, 10);
}

system.OS.bit = OSBit;
system.OS.name = OSName;
system.OS.version = OSVersion;
system.browser.name = browserName;
system.browser.version = majorVersion;

export default system;