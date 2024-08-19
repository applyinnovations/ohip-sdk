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
 * This type holds the base information of the hotel detail value which will be associated with a hotel detail.
 * @export
 * @interface TemplateHotelDetailValueType
 */
export interface TemplateHotelDetailValueType {
    /**
     * Specifies the hotel detail value code.
     * @type {string}
     * @memberof TemplateHotelDetailValueType
     */
    code?: string;
    /**
     * Specifies the description of the hotel detail value.
     * @type {string}
     * @memberof TemplateHotelDetailValueType
     */
    description?: string;
    /**
     * Specifies the sorting sequence number for the hotel detail value.
     * @type {number}
     * @memberof TemplateHotelDetailValueType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the TemplateHotelDetailValueType interface.
 */
export function instanceOfTemplateHotelDetailValueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateHotelDetailValueTypeFromJSON(json: any): TemplateHotelDetailValueType {
    return TemplateHotelDetailValueTypeFromJSONTyped(json, false);
}

export function TemplateHotelDetailValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateHotelDetailValueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function TemplateHotelDetailValueTypeToJSON(value?: TemplateHotelDetailValueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'sequence': value.sequence,
    };
}

