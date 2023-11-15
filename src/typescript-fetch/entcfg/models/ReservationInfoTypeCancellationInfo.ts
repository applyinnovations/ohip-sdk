/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information regarding why reservation has been/was cancelled.
 * @export
 * @interface ReservationInfoTypeCancellationInfo
 */
export interface ReservationInfoTypeCancellationInfo {
    /**
     * 
     * @type {string}
     * @memberof ReservationInfoTypeCancellationInfo
     */
    code?: string;
    /**
     * Date when reservation was last cancelled.
     * @type {string}
     * @memberof ReservationInfoTypeCancellationInfo
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationInfoTypeCancellationInfo
     */
    description?: string;
}

/**
 * Check if a given object implements the ReservationInfoTypeCancellationInfo interface.
 */
export function instanceOfReservationInfoTypeCancellationInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationInfoTypeCancellationInfoFromJSON(json: any): ReservationInfoTypeCancellationInfo {
    return ReservationInfoTypeCancellationInfoFromJSONTyped(json, false);
}

export function ReservationInfoTypeCancellationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInfoTypeCancellationInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ReservationInfoTypeCancellationInfoToJSON(value?: ReservationInfoTypeCancellationInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'date': value.date,
        'description': value.description,
    };
}

