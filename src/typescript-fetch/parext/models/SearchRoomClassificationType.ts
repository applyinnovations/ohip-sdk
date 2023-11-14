/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SearchRoomClassificationType
 */
export interface SearchRoomClassificationType {
    /**
     * List of Room Type codes
     * @type {Array<string>}
     * @memberof SearchRoomClassificationType
     */
    roomTypes?: Array<string>;
    /**
     * Tag code
     * @type {string}
     * @memberof SearchRoomClassificationType
     */
    tag?: string;
    /**
     * Number of adults
     * @type {number}
     * @memberof SearchRoomClassificationType
     */
    adults?: number;
    /**
     * Number of children
     * @type {number}
     * @memberof SearchRoomClassificationType
     */
    children?: number;
    /**
     * Number of units
     * @type {number}
     * @memberof SearchRoomClassificationType
     */
    numberOfUnits?: number;
}

/**
 * Check if a given object implements the SearchRoomClassificationType interface.
 */
export function instanceOfSearchRoomClassificationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchRoomClassificationTypeFromJSON(json: any): SearchRoomClassificationType {
    return SearchRoomClassificationTypeFromJSONTyped(json, false);
}

export function SearchRoomClassificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchRoomClassificationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'adults': !exists(json, 'adults') ? undefined : json['adults'],
        'children': !exists(json, 'children') ? undefined : json['children'],
        'numberOfUnits': !exists(json, 'numberOfUnits') ? undefined : json['numberOfUnits'],
    };
}

export function SearchRoomClassificationTypeToJSON(value?: SearchRoomClassificationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomTypes': value.roomTypes,
        'tag': value.tag,
        'adults': value.adults,
        'children': value.children,
        'numberOfUnits': value.numberOfUnits,
    };
}
