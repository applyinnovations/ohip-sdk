/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request.
 * @export
 * @interface GenericHotelCodeCodeType
 */
export interface GenericHotelCodeCodeType {
    /**
     * Configuration code.
     * @type {string}
     * @memberof GenericHotelCodeCodeType
     */
    code?: string;
    /**
     * Hotel where the code is configured.
     * @type {string}
     * @memberof GenericHotelCodeCodeType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the GenericHotelCodeCodeType interface.
 */
export function instanceOfGenericHotelCodeCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GenericHotelCodeCodeTypeFromJSON(json: any): GenericHotelCodeCodeType {
    return GenericHotelCodeCodeTypeFromJSONTyped(json, false);
}

export function GenericHotelCodeCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericHotelCodeCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function GenericHotelCodeCodeTypeToJSON(value?: GenericHotelCodeCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'hotelId': value.hotelId,
    };
}

