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
import type { ConfigHotelPreferencesType } from './ConfigHotelPreferencesType';
import {
    ConfigHotelPreferencesTypeFromJSON,
    ConfigHotelPreferencesTypeFromJSONTyped,
    ConfigHotelPreferencesTypeToJSON,
} from './ConfigHotelPreferencesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching preferences at the property level.
 * @export
 * @interface HotelPreferences
 */
export interface HotelPreferences {
    /**
     * 
     * @type {ConfigHotelPreferencesType}
     * @memberof HotelPreferences
     */
    hotelPreferences?: ConfigHotelPreferencesType;
    /**
     * 
     * @type {Links}
     * @memberof HotelPreferences
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof HotelPreferences
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the HotelPreferences interface.
 */
export function instanceOfHotelPreferences(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelPreferencesFromJSON(json: any): HotelPreferences {
    return HotelPreferencesFromJSONTyped(json, false);
}

export function HotelPreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelPreferences {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelPreferences': !exists(json, 'hotelPreferences') ? undefined : ConfigHotelPreferencesTypeFromJSON(json['hotelPreferences']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function HotelPreferencesToJSON(value?: HotelPreferences | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelPreferences': ConfigHotelPreferencesTypeToJSON(value.hotelPreferences),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
