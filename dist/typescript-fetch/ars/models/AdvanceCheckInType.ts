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
 * Information relating to Reservation's Advance Checked In state and Expected Time of Return
 * @export
 * @interface AdvanceCheckInType
 */
export interface AdvanceCheckInType {
    /**
     * Indicates if the reservation is marked as Advance Checked In
     * @type {boolean}
     * @memberof AdvanceCheckInType
     */
    advanceCheckedIn?: boolean;
    /**
     * ETR Comments
     * @type {string}
     * @memberof AdvanceCheckInType
     */
    eTRComments?: string;
    /**
     * Expected Return Time
     * @type {string}
     * @memberof AdvanceCheckInType
     */
    expectedReturnTime?: string;
}

/**
 * Check if a given object implements the AdvanceCheckInType interface.
 */
export function instanceOfAdvanceCheckInType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdvanceCheckInTypeFromJSON(json: any): AdvanceCheckInType {
    return AdvanceCheckInTypeFromJSONTyped(json, false);
}

export function AdvanceCheckInTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvanceCheckInType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'advanceCheckedIn': !exists(json, 'advanceCheckedIn') ? undefined : json['advanceCheckedIn'],
        'eTRComments': !exists(json, 'eTRComments') ? undefined : json['eTRComments'],
        'expectedReturnTime': !exists(json, 'expectedReturnTime') ? undefined : json['expectedReturnTime'],
    };
}

export function AdvanceCheckInTypeToJSON(value?: AdvanceCheckInType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'advanceCheckedIn': value.advanceCheckedIn,
        'eTRComments': value.eTRComments,
        'expectedReturnTime': value.expectedReturnTime,
    };
}

