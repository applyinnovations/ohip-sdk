/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
     * Expected Return Time
     * @type {string}
     * @memberof AdvanceCheckInType
     */
    expectedReturnTime?: string;
    /**
     * ETR Comments
     * @type {string}
     * @memberof AdvanceCheckInType
     */
    eTRComments?: string;
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
        'expectedReturnTime': !exists(json, 'expectedReturnTime') ? undefined : json['expectedReturnTime'],
        'eTRComments': !exists(json, 'eTRComments') ? undefined : json['eTRComments'],
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
        'expectedReturnTime': value.expectedReturnTime,
        'eTRComments': value.eTRComments,
    };
}

