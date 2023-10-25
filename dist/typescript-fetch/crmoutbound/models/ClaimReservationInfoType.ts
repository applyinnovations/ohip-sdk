/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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
 * Summary of claim activity log information.
 * @export
 * @interface ClaimReservationInfoType
 */
export interface ClaimReservationInfoType {
    /**
     * Property where the stay associated with this claim.
     * @type {string}
     * @memberof ClaimReservationInfoType
     */
    hotelId?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ClaimReservationInfoType
     */
    confirmationNo?: Array<UniqueIDType>;
    /**
     * Arrival date for the stay associated with this claim.
     * @type {Date}
     * @memberof ClaimReservationInfoType
     */
    arrival?: Date;
    /**
     * Departure date for the stay associated with this claim.
     * @type {Date}
     * @memberof ClaimReservationInfoType
     */
    departure?: Date;
}

/**
 * Check if a given object implements the ClaimReservationInfoType interface.
 */
export function instanceOfClaimReservationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClaimReservationInfoTypeFromJSON(json: any): ClaimReservationInfoType {
    return ClaimReservationInfoTypeFromJSONTyped(json, false);
}

export function ClaimReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClaimReservationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'confirmationNo': !exists(json, 'confirmationNo') ? undefined : ((json['confirmationNo'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'arrival': !exists(json, 'arrival') ? undefined : (new Date(json['arrival'])),
        'departure': !exists(json, 'departure') ? undefined : (new Date(json['departure'])),
    };
}

export function ClaimReservationInfoTypeToJSON(value?: ClaimReservationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'confirmationNo': value.confirmationNo === undefined ? undefined : ((value.confirmationNo as Array<any>).map(UniqueIDTypeToJSON)),
        'arrival': value.arrival === undefined ? undefined : (value.arrival.toISOString().substr(0,10)),
        'departure': value.departure === undefined ? undefined : (value.departure.toISOString().substr(0,10)),
    };
}

