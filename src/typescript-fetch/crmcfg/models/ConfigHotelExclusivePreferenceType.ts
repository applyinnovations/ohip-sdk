/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PreferenceCodesType } from './PreferenceCodesType';
import {
    PreferenceCodesTypeFromJSON,
    PreferenceCodesTypeFromJSONTyped,
    PreferenceCodesTypeToJSON,
} from './PreferenceCodesType';

/**
 * Base details common between both template and property level Exclusive preference ids.
 * @export
 * @interface ConfigHotelExclusivePreferenceType
 */
export interface ConfigHotelExclusivePreferenceType {
    /**
     * Specifies the Exclusive preference code.
     * @type {string}
     * @memberof ConfigHotelExclusivePreferenceType
     */
    code?: string;
    /**
     * Specifies the hotel code for which the Exclusive preference is specified.
     * @type {string}
     * @memberof ConfigHotelExclusivePreferenceType
     */
    hotelId?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ConfigHotelExclusivePreferenceType
     */
    orderSequence?: number;
    /**
     * 
     * @type {PreferenceCodesType}
     * @memberof ConfigHotelExclusivePreferenceType
     */
    preferenceCodes?: PreferenceCodesType;
    /**
     * Specifies the preference group the Exclusive preference belongs to.
     * @type {string}
     * @memberof ConfigHotelExclusivePreferenceType
     */
    preferenceGroup?: string;
}

/**
 * Check if a given object implements the ConfigHotelExclusivePreferenceType interface.
 */
export function instanceOfConfigHotelExclusivePreferenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigHotelExclusivePreferenceTypeFromJSON(json: any): ConfigHotelExclusivePreferenceType {
    return ConfigHotelExclusivePreferenceTypeFromJSONTyped(json, false);
}

export function ConfigHotelExclusivePreferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigHotelExclusivePreferenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'preferenceCodes': !exists(json, 'preferenceCodes') ? undefined : PreferenceCodesTypeFromJSON(json['preferenceCodes']),
        'preferenceGroup': !exists(json, 'preferenceGroup') ? undefined : json['preferenceGroup'],
    };
}

export function ConfigHotelExclusivePreferenceTypeToJSON(value?: ConfigHotelExclusivePreferenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'hotelId': value.hotelId,
        'orderSequence': value.orderSequence,
        'preferenceCodes': PreferenceCodesTypeToJSON(value.preferenceCodes),
        'preferenceGroup': value.preferenceGroup,
    };
}
