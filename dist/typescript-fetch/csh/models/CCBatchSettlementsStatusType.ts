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
import type { CCBatchSettlementStatusType } from './CCBatchSettlementStatusType';
import {
    CCBatchSettlementStatusTypeFromJSON,
    CCBatchSettlementStatusTypeFromJSONTyped,
    CCBatchSettlementStatusTypeToJSON,
} from './CCBatchSettlementStatusType';

/**
 * List of CCBatchSettlementStatusType type
 * @export
 * @interface CCBatchSettlementsStatusType
 */
export interface CCBatchSettlementsStatusType {
    /**
     * Batch Id for identify status of job.
     * @type {string}
     * @memberof CCBatchSettlementsStatusType
     */
    batchId?: string;
    /**
     * 
     * @type {Array<CCBatchSettlementStatusType>}
     * @memberof CCBatchSettlementsStatusType
     */
    cCBatchSettlementsStatus?: Array<CCBatchSettlementStatusType>;
    /**
     * Hotel Code
     * @type {string}
     * @memberof CCBatchSettlementsStatusType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the CCBatchSettlementsStatusType interface.
 */
export function instanceOfCCBatchSettlementsStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CCBatchSettlementsStatusTypeFromJSON(json: any): CCBatchSettlementsStatusType {
    return CCBatchSettlementsStatusTypeFromJSONTyped(json, false);
}

export function CCBatchSettlementsStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CCBatchSettlementsStatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchId': !exists(json, 'batchId') ? undefined : json['batchId'],
        'cCBatchSettlementsStatus': !exists(json, 'cCBatchSettlementsStatus') ? undefined : ((json['cCBatchSettlementsStatus'] as Array<any>).map(CCBatchSettlementStatusTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function CCBatchSettlementsStatusTypeToJSON(value?: CCBatchSettlementsStatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batchId': value.batchId,
        'cCBatchSettlementsStatus': value.cCBatchSettlementsStatus === undefined ? undefined : ((value.cCBatchSettlementsStatus as Array<any>).map(CCBatchSettlementStatusTypeToJSON)),
        'hotelId': value.hotelId,
    };
}

