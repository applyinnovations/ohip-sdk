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
import type { HotelPackageForecastGroupType } from './HotelPackageForecastGroupType';
import {
    HotelPackageForecastGroupTypeFromJSON,
    HotelPackageForecastGroupTypeFromJSONTyped,
    HotelPackageForecastGroupTypeToJSON,
} from './HotelPackageForecastGroupType';
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
 * 
 * @export
 * @interface PutHotelPackageForecastGroupsRequest
 */
export interface PutHotelPackageForecastGroupsRequest {
    /**
     * Hotel package forecast group details.
     * @type {Array<HotelPackageForecastGroupType>}
     * @memberof PutHotelPackageForecastGroupsRequest
     */
    hotelPackageForecastGroups?: Array<HotelPackageForecastGroupType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutHotelPackageForecastGroupsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutHotelPackageForecastGroupsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutHotelPackageForecastGroupsRequest interface.
 */
export function instanceOfPutHotelPackageForecastGroupsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutHotelPackageForecastGroupsRequestFromJSON(json: any): PutHotelPackageForecastGroupsRequest {
    return PutHotelPackageForecastGroupsRequestFromJSONTyped(json, false);
}

export function PutHotelPackageForecastGroupsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutHotelPackageForecastGroupsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelPackageForecastGroups': !exists(json, 'hotelPackageForecastGroups') ? undefined : ((json['hotelPackageForecastGroups'] as Array<any>).map(HotelPackageForecastGroupTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutHotelPackageForecastGroupsRequestToJSON(value?: PutHotelPackageForecastGroupsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelPackageForecastGroups': value.hotelPackageForecastGroups === undefined ? undefined : ((value.hotelPackageForecastGroups as Array<any>).map(HotelPackageForecastGroupTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

