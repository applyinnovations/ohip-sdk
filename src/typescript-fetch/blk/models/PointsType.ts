/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * The Redeem Points contains the number of points required to book a room type.
 * @export
 * @interface PointsType
 */
export interface PointsType {
    /**
     * Awards type for the award type rate code.
     * @type {string}
     * @memberof PointsType
     */
    awardsType?: string;
    /**
     * No of points required to book this Room Stay.
     * @type {number}
     * @memberof PointsType
     */
    points?: number;
}

/**
 * Check if a given object implements the PointsType interface.
 */
export function instanceOfPointsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PointsTypeFromJSON(json: any): PointsType {
    return PointsTypeFromJSONTyped(json, false);
}

export function PointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardsType': !exists(json, 'awardsType') ? undefined : json['awardsType'],
        'points': !exists(json, 'points') ? undefined : json['points'],
    };
}

export function PointsTypeToJSON(value?: PointsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardsType': value.awardsType,
        'points': value.points,
    };
}

