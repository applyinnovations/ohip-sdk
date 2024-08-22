/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AvailRatePlanInfoType } from './AvailRatePlanInfoType';
import {
    AvailRatePlanInfoTypeFromJSON,
    AvailRatePlanInfoTypeFromJSONTyped,
    AvailRatePlanInfoTypeToJSON,
} from './AvailRatePlanInfoType';
import type { RoomTypeMasterInfoType } from './RoomTypeMasterInfoType';
import {
    RoomTypeMasterInfoTypeFromJSON,
    RoomTypeMasterInfoTypeFromJSONTyped,
    RoomTypeMasterInfoTypeToJSON,
} from './RoomTypeMasterInfoType';

/**
 * Availability master info type
 * @export
 * @interface AvailResponseMasterInfoType
 */
export interface AvailResponseMasterInfoType {
    /**
     * 
     * @type {AvailRatePlanInfoType}
     * @memberof AvailResponseMasterInfoType
     */
    ratePlans?: AvailRatePlanInfoType;
    /**
     * 
     * @type {RoomTypeMasterInfoType}
     * @memberof AvailResponseMasterInfoType
     */
    roomTypes?: RoomTypeMasterInfoType;
}

/**
 * Check if a given object implements the AvailResponseMasterInfoType interface.
 */
export function instanceOfAvailResponseMasterInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AvailResponseMasterInfoTypeFromJSON(json: any): AvailResponseMasterInfoType {
    return AvailResponseMasterInfoTypeFromJSONTyped(json, false);
}

export function AvailResponseMasterInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailResponseMasterInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ratePlans': !exists(json, 'ratePlans') ? undefined : AvailRatePlanInfoTypeFromJSON(json['ratePlans']),
        'roomTypes': !exists(json, 'roomTypes') ? undefined : RoomTypeMasterInfoTypeFromJSON(json['roomTypes']),
    };
}

export function AvailResponseMasterInfoTypeToJSON(value?: AvailResponseMasterInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ratePlans': AvailRatePlanInfoTypeToJSON(value.ratePlans),
        'roomTypes': RoomTypeMasterInfoTypeToJSON(value.roomTypes),
    };
}

