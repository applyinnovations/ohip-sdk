/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Type for starting settlements job process.
 * @export
 * @interface CCBatchSettlementsProcessType
 */
export interface CCBatchSettlementsProcessType {
    /**
     * Batch Id for identify status of job.
     * @type {string}
     * @memberof CCBatchSettlementsProcessType
     */
    batchId?: string;
    /**
     * Hotel code of the reservation.
     * @type {string}
     * @memberof CCBatchSettlementsProcessType
     */
    hotelId?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CCBatchSettlementsProcessType
     */
    settlementIdList?: Array<UniqueIDType>;
}

/**
 * Check if a given object implements the CCBatchSettlementsProcessType interface.
 */
export function instanceOfCCBatchSettlementsProcessType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CCBatchSettlementsProcessTypeFromJSON(json: any): CCBatchSettlementsProcessType {
    return CCBatchSettlementsProcessTypeFromJSONTyped(json, false);
}

export function CCBatchSettlementsProcessTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CCBatchSettlementsProcessType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchId': !exists(json, 'batchId') ? undefined : json['batchId'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'settlementIdList': !exists(json, 'settlementIdList') ? undefined : ((json['settlementIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
    };
}

export function CCBatchSettlementsProcessTypeToJSON(value?: CCBatchSettlementsProcessType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batchId': value.batchId,
        'hotelId': value.hotelId,
        'settlementIdList': value.settlementIdList === undefined ? undefined : ((value.settlementIdList as Array<any>).map(UniqueIDTypeToJSON)),
    };
}

