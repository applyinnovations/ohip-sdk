"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClients = exports.ContentType = void 0;
const act = __importStar(require("./act"));
const actcfg = __importStar(require("./actcfg"));
const ars = __importStar(require("./ars"));
const blk = __importStar(require("./blk"));
const blkasync = __importStar(require("./blkasync"));
const blkcfg = __importStar(require("./blkcfg"));
const bof = __importStar(require("./bof"));
const chl = __importStar(require("./chl"));
const cms = __importStar(require("./cms"));
const crm = __importStar(require("./crm"));
const crmcfg = __importStar(require("./crmcfg"));
const crmoutbound = __importStar(require("./crmoutbound"));
const csh = __importStar(require("./csh"));
const cshoutbound = __importStar(require("./cshoutbound"));
const dvm = __importStar(require("./dvm"));
const entcfg = __importStar(require("./entcfg"));
const evm = __importStar(require("./evm"));
const evmcfg = __importStar(require("./evmcfg"));
const fof = __importStar(require("./fof"));
const fofcfg = __importStar(require("./fofcfg"));
const hsk = __importStar(require("./hsk"));
const int = __importStar(require("./int"));
const intcfg = __importStar(require("./intcfg"));
const inv = __importStar(require("./inv"));
const invasync = __importStar(require("./invasync"));
const lms = __importStar(require("./lms"));
const lov = __importStar(require("./lov"));
const medcfg = __importStar(require("./medcfg"));
const oauth = __importStar(require("./oauth"));
const oxi = __importStar(require("./oxi"));
const par = __importStar(require("./par"));
const parasync = __importStar(require("./parasync"));
const rmcfg = __importStar(require("./rmcfg"));
const rsv = __importStar(require("./rsv"));
const rsvasync = __importStar(require("./rsvasync"));
const rsvcfg = __importStar(require("./rsvcfg"));
const rtp = __importStar(require("./rtp"));
const rtpasync = __importStar(require("./rtpasync"));
const tokenexchange = __importStar(require("./tokenexchange"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
function createClients(config) {
    return {
        "act": new act.Api(config),
        "actcfg": new actcfg.Api(config),
        "ars": new ars.Api(config),
        "blk": new blk.Api(config),
        "blkasync": new blkasync.Api(config),
        "blkcfg": new blkcfg.Api(config),
        "bof": new bof.Api(config),
        "chl": new chl.Api(config),
        "cms": new cms.Api(config),
        "crm": new crm.Api(config),
        "crmcfg": new crmcfg.Api(config),
        "crmoutbound": new crmoutbound.Api(config),
        "csh": new csh.Api(config),
        "cshoutbound": new cshoutbound.Api(config),
        "dvm": new dvm.Api(config),
        "entcfg": new entcfg.Api(config),
        "evm": new evm.Api(config),
        "evmcfg": new evmcfg.Api(config),
        "fof": new fof.Api(config),
        "fofcfg": new fofcfg.Api(config),
        "hsk": new hsk.Api(config),
        "int": new int.Api(config),
        "intcfg": new intcfg.Api(config),
        "inv": new inv.Api(config),
        "invasync": new invasync.Api(config),
        "lms": new lms.Api(config),
        "lov": new lov.Api(config),
        "medcfg": new medcfg.Api(config),
        "oauth": new oauth.Api(config),
        "oxi": new oxi.Api(config),
        "par": new par.Api(config),
        "parasync": new parasync.Api(config),
        "rmcfg": new rmcfg.Api(config),
        "rsv": new rsv.Api(config),
        "rsvasync": new rsvasync.Api(config),
        "rsvcfg": new rsvcfg.Api(config),
        "rtp": new rtp.Api(config),
        "rtpasync": new rtpasync.Api(config),
        "tokenexchange": new tokenexchange.Api(config),
    };
}
exports.createClients = createClients;
