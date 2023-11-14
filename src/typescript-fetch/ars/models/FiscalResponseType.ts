/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Provides information which is used for fiscal response processing.
 * @export
 * @interface FiscalResponseType
 */
export interface FiscalResponseType {
    /**
     * Fiscal Folio sequence ID stored in queue table.
     * @type {number}
     * @memberof FiscalResponseType
     */
    folioSeqId?: number;
    /**
     * Flag to do the retrieval process of fiscal printing or not.
     * @type {boolean}
     * @memberof FiscalResponseType
     */
    retryFiscalPrinting?: boolean;
}

/**
 * Check if a given object implements the FiscalResponseType interface.
 */
export function instanceOfFiscalResponseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalResponseTypeFromJSON(json: any): FiscalResponseType {
    return FiscalResponseTypeFromJSONTyped(json, false);
}

export function FiscalResponseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalResponseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioSeqId': !exists(json, 'folioSeqId') ? undefined : json['folioSeqId'],
        'retryFiscalPrinting': !exists(json, 'retryFiscalPrinting') ? undefined : json['retryFiscalPrinting'],
    };
}

export function FiscalResponseTypeToJSON(value?: FiscalResponseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioSeqId': value.folioSeqId,
        'retryFiscalPrinting': value.retryFiscalPrinting,
    };
}
