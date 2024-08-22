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
import type { ConfigHotelAmenityType } from './ConfigHotelAmenityType';
import {
    ConfigHotelAmenityTypeFromJSON,
    ConfigHotelAmenityTypeFromJSONTyped,
    ConfigHotelAmenityTypeToJSON,
} from './ConfigHotelAmenityType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing amenities at the property level.
 * @export
 * @interface AmenitiesToBeChanged
 */
export interface AmenitiesToBeChanged {
    /**
     * This type holds a collection of amenities at the property level.
     * @type {Array<ConfigHotelAmenityType>}
     * @memberof AmenitiesToBeChanged
     */
    hotelAmenities?: Array<ConfigHotelAmenityType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AmenitiesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AmenitiesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AmenitiesToBeChanged interface.
 */
export function instanceOfAmenitiesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AmenitiesToBeChangedFromJSON(json: any): AmenitiesToBeChanged {
    return AmenitiesToBeChangedFromJSONTyped(json, false);
}

export function AmenitiesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmenitiesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelAmenities': !exists(json, 'hotelAmenities') ? undefined : ((json['hotelAmenities'] as Array<any>).map(ConfigHotelAmenityTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AmenitiesToBeChangedToJSON(value?: AmenitiesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelAmenities': value.hotelAmenities === undefined ? undefined : ((value.hotelAmenities as Array<any>).map(ConfigHotelAmenityTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

