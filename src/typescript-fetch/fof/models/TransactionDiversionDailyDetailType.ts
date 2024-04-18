/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
     * @type {string}
     * @memberof TransactionDiversionDailyDetailType
     */
    date?: string;
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
        
        'date': !exists(json, 'date') ? undefined : json['date'],
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
        
        'date': value.date,
        'diverted': value.diverted,
        'posted': value.posted,
    };
}
