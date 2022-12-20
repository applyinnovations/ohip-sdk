
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

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export function createClients<SecurityDataType = unknown>(config: ApiConfig<SecurityDataType>) {
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