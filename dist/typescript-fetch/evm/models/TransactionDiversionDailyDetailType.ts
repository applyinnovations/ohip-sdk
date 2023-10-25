/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * List of daily details for Transaction Diversion rule.
 * @export
 * @interface TransactionDiversionDailyDetailType
 */
export interface TransactionDiversionDailyDetailType {
    /**
     * Daily details Date about when the rules are posted or diverted.
     * @type {Date}
     * @memberof TransactionDiversionDailyDetailType
     */
    date?: Date;
    /**
     * Transaction diversion rules that are diverted .
     * @type {number}
     * @memberof TransactionDiversionDailyDetailType
     */
    diverted?: number;
    /**
     * Transaction diversion rules that are posted.
     * @type {number}
     * @memberof TransactionDiversionDailyDetailType
     */
    posted?: number;
}

/**
 * Check if a given object implements the TransactionDiversionDailyDetailType interface.
 */
export function instanceOfTransactionDiversionDailyDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionDiversionDailyDetailTypeFromJSON(json: any): TransactionDiversionDailyDetailType {
    return TransactionDiversionDailyDetailTypeFromJSONTyped(json, false);
}

export function TransactionDiversionDailyDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDiversionDailyDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'diverted': !exists(json, 'diverted') ? undefined : json['diverted'],
        'posted': !exists(json, 'posted') ? undefined : json['posted'],
    };
}

export function TransactionDiversionDailyDetailTypeToJSON(value?: TransactionDiversionDailyDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'diverted': value.diverted,
        'posted': value.posted,
    };
}

