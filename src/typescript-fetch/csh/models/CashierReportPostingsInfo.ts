/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DetailPostingsType } from './DetailPostingsType';
import {
    DetailPostingsTypeFromJSON,
    DetailPostingsTypeFromJSONTyped,
    DetailPostingsTypeToJSON,
} from './DetailPostingsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
import {
    TrxCodesInfoTypeFromJSON,
    TrxCodesInfoTypeFromJSONTyped,
    TrxCodesInfoTypeToJSON,
} from './TrxCodesInfoType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response for fetching the Cashier report transactions.
 * @export
 * @interface CashierReportPostingsInfo
 */
export interface CashierReportPostingsInfo {
    /**
     * 
     * @type {Links}
     * @memberof CashierReportPostingsInfo
     */
    links?: Links;
    /**
     * 
     * @type {DetailPostingsType}
     * @memberof CashierReportPostingsInfo
     */
    postings?: DetailPostingsType;
    /**
     * 
     * @type {TrxCodesInfoType}
     * @memberof CashierReportPostingsInfo
     */
    transactionCodes?: TrxCodesInfoType;
    /**
     * 
     * @type {WarningsType}
     * @memberof CashierReportPostingsInfo
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CashierReportPostingsInfo interface.
 */
export function instanceOfCashierReportPostingsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashierReportPostingsInfoFromJSON(json: any): CashierReportPostingsInfo {
    return CashierReportPostingsInfoFromJSONTyped(json, false);
}

export function CashierReportPostingsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierReportPostingsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'postings': !exists(json, 'postings') ? undefined : DetailPostingsTypeFromJSON(json['postings']),
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : TrxCodesInfoTypeFromJSON(json['transactionCodes']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CashierReportPostingsInfoToJSON(value?: CashierReportPostingsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'postings': DetailPostingsTypeToJSON(value.postings),
        'transactionCodes': TrxCodesInfoTypeToJSON(value.transactionCodes),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
