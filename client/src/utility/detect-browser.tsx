type Browser = {
    isChrome?: boolean,
    isFirefox?: boolean,
    isEdge?: boolean,
}

// Duck-testing for detecting what kind of browser the user is on
export default function detectBrowser(): Browser {
    // Opera 8.0+
    //@ts-ignore
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    //@ts-ignore
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if(isFirefox) return {isFirefox}

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    //@ts-ignore
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

    // Internet Explorer 6-11
    //@ts-ignore
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Chrome 1 - 79
    //@ts-ignore
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    if(isChrome) {return {isChrome}}

    // Edge 20+
    //@ts-ignore
    var isEdge = !isIE && !!window.StyleMedia;
    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
    if(isEdge || isEdgeChromium) return {isEdge: (isEdge || isEdgeChromium)}

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return { }
}