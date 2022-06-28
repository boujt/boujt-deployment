export const DAILY_MEETING_BASE_URL = "https://boujt.daily.co/";

export const LOADING_STATE = {
    FETCHING: "fetching",
    DELETING: "deleting",
    ACCEPTING: "accepting",
    JOINING: "joining",
    CHANGING: "changing",
    NONE: "none",
};

export const MESSAGE_PREFIX_REQUEST_CHANGE =
    "requestToChange-aASjjnwnAjnwla2123kalwadljkawdblakw-request";
export const MESSAGE_PREFIX_REQUEST_ACCEPT =
    "requestToChange-aASjjnwnAjnwla2123kalwadljkawdblakw-accept";
export const MESSAGE_PREFIX_REQUEST_DENY =
    "requestToChange-aASjjnwnAjnwla2123kalwadljkawdblakw-deny";

export const MESSAGE_REQUEST = {
    ACCPETED: "change-accepted",
    DENIED: "change-denied",
    SENT: "request-sent",
    RECIEVED: "request-recieved",
};

export const MAX_PEOPLE_IN_QUEUE = 5;

export const SYSSNARE_STATUS = {
    IN_CALL: "in-call",
    AVAILABLE: "available",
    OFFLINE: "offline",
    ONLINE: "online",
};

export const ERRORS = {
    NOT_FOUND: "not-found",
    BUSY: "busy",
    BAD_REQUEST: "bad-request",
    METHOD_NOT_ALLOWED: "method-not-allowed",
    COULD_NOT_CREATE: "could-not-create-room",
    TOO_LARGE: "too-large",
    INVALID: "invalid",
    CANNOT_BE_EMPTY: "cant-be-empty",
    QUEUE_IS_FULL: "queue-full",
    WRONG_FORMAT: "wrong-format",
};

export const FILESIZE_UPLOAD_LIMIT = 30000000;

export const ROUTES = {
    KONTAKTA_OSS: "/kontakta-oss",
    FRAGELADA: "/fragelada",
    ADMIN: "/admin",
    GOM_BESOK: "/gom-ditt-besok",
    FA_STOD: "/fa-stod",
    OM_OSS: "/om-oss",
    KROPPEN: "/kanslor-och-rattigheter",
    CHATTEN: "/chatten",
    BLOGGEN: "/bloggen",
    STARTSIDA: "/",
    CHATROOM: (token: string) => `/chatt/${token}`,
};

export const ADMIN_ROUTES = {
    CHATT: "chatt",
    FORUM: "forum",
    CALENDAR: "calendar",
};

export const INTEGER_TO_MONTH = new Map<number, string>([
    [1,   'Jan'],
    [2,   'Feb'],
    [3,   'Mar'],
    [4,   'Apr'],
    [5,   'May'],
    [6,   'Jun'],
    [7,   'Jul'],
    [8,   'Aug'],
    [9,   'Sep'],
    [10,  'Oct'],
    [11,  'Nov'],
    [12,  'Dec']
]);