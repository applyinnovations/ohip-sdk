import * as act from "./act";
import * as actcfg from "./actcfg";
import * as ars from "./ars";
import * as blk from "./blk";
import * as blkasync from "./blkasync";
import * as blkcfg from "./blkcfg";
import * as bof from "./bof";
import * as chl from "./chl";
import * as cms from "./cms";
import * as crm from "./crm";
import * as crmcfg from "./crmcfg";
import * as crmoutbound from "./crmoutbound";
import * as csh from "./csh";
import * as cshoutbound from "./cshoutbound";
import * as dvm from "./dvm";
import * as entcfg from "./entcfg";
import * as evm from "./evm";
import * as evmcfg from "./evmcfg";
import * as fof from "./fof";
import * as fofcfg from "./fofcfg";
import * as hsk from "./hsk";
import * as int from "./int";
import * as intcfg from "./intcfg";
import * as inv from "./inv";
import * as invasync from "./invasync";
import * as lms from "./lms";
import * as lov from "./lov";
import * as medcfg from "./medcfg";
import * as oauth from "./oauth";
import * as oxi from "./oxi";
import * as par from "./par";
import * as parasync from "./parasync";
import * as rmcfg from "./rmcfg";
import * as rsv from "./rsv";
import * as rsvasync from "./rsvasync";
import * as rsvcfg from "./rsvcfg";
import * as rtp from "./rtp";
import * as rtpasync from "./rtpasync";
import * as tokenexchange from "./tokenexchange";
import { AxiosRequestConfig, ResponseType } from 'axios';
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare function createClients<SecurityDataType = unknown>(config: ApiConfig<SecurityDataType>): {
    act: act.Api<SecurityDataType>;
    actcfg: actcfg.Api<SecurityDataType>;
    ars: ars.Api<SecurityDataType>;
    blk: blk.Api<SecurityDataType>;
    blkasync: blkasync.Api<SecurityDataType>;
    blkcfg: blkcfg.Api<SecurityDataType>;
    bof: bof.Api<SecurityDataType>;
    chl: chl.Api<SecurityDataType>;
    cms: cms.Api<SecurityDataType>;
    crm: crm.Api<SecurityDataType>;
    crmcfg: crmcfg.Api<SecurityDataType>;
    crmoutbound: crmoutbound.Api<SecurityDataType>;
    csh: csh.Api<SecurityDataType>;
    cshoutbound: cshoutbound.Api<SecurityDataType>;
    dvm: dvm.Api<SecurityDataType>;
    entcfg: entcfg.Api<SecurityDataType>;
    evm: evm.Api<SecurityDataType>;
    evmcfg: evmcfg.Api<SecurityDataType>;
    fof: fof.Api<SecurityDataType>;
    fofcfg: fofcfg.Api<SecurityDataType>;
    hsk: hsk.Api<SecurityDataType>;
    int: int.Api<SecurityDataType>;
    intcfg: intcfg.Api<SecurityDataType>;
    inv: inv.Api<SecurityDataType>;
    invasync: invasync.Api<SecurityDataType>;
    lms: lms.Api<SecurityDataType>;
    lov: lov.Api<SecurityDataType>;
    medcfg: medcfg.Api<SecurityDataType>;
    oauth: oauth.Api<SecurityDataType>;
    oxi: oxi.Api<SecurityDataType>;
    par: par.Api<SecurityDataType>;
    parasync: parasync.Api<SecurityDataType>;
    rmcfg: rmcfg.Api<SecurityDataType>;
    rsv: rsv.Api<SecurityDataType>;
    rsvasync: rsvasync.Api<SecurityDataType>;
    rsvcfg: rsvcfg.Api<SecurityDataType>;
    rtp: rtp.Api<SecurityDataType>;
    rtpasync: rtpasync.Api<SecurityDataType>;
    tokenexchange: tokenexchange.Api<SecurityDataType>;
};
