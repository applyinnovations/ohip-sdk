/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Common code type for code, description
 * @export
 * @interface AlertCodeType
 */
export interface AlertCodeType {
    /**
     * Code for the code type.
     * @type {string}
     * @memberof AlertCodeType
     */
    code?: string;
    /**
     * Description for the code type.
     * @type {string}
     * @memberof AlertCodeType
     */
    description?: string;
    /**
     * Sequence for alert.
     * @type {number}
     * @memberof AlertCodeType
     */
    displaySequence?: number;
    /**
     * Hotel Code for alert.
     * @type {string}
     * @memberof AlertCodeType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the AlertCodeType interface.
 */
export function instanceOfAlertCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlertCodeTypeFromJSON(json: any): AlertCodeType {
    return AlertCodeTypeFromJSONTyped(json, false);
}

export function AlertCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function AlertCodeTypeToJSON(value?: AlertCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'hotelId': value.hotelId,
    };
}

