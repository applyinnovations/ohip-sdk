/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelRoomMaintenanceReasonType } from './HotelRoomMaintenanceReasonType';
import {
    HotelRoomMaintenanceReasonTypeFromJSON,
    HotelRoomMaintenanceReasonTypeFromJSONTyped,
    HotelRoomMaintenanceReasonTypeToJSON,
} from './HotelRoomMaintenanceReasonType';
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
 * Request object for creating new room maintenance reasons for a hotel.
 * @export
 * @interface HotelRoomMaintenanceReasonsCriteria
 */
export interface HotelRoomMaintenanceReasonsCriteria {
    /**
     * Details for room maintenance reason at hotel level.
     * @type {Array<HotelRoomMaintenanceReasonType>}
     * @memberof HotelRoomMaintenanceReasonsCriteria
     */
    hotelRoomMaintenanceReasons?: Array<HotelRoomMaintenanceReasonType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HotelRoomMaintenanceReasonsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HotelRoomMaintenanceReasonsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HotelRoomMaintenanceReasonsCriteria interface.
 */
export function instanceOfHotelRoomMaintenanceReasonsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelRoomMaintenanceReasonsCriteriaFromJSON(json: any): HotelRoomMaintenanceReasonsCriteria {
    return HotelRoomMaintenanceReasonsCriteriaFromJSONTyped(json, false);
}

export function HotelRoomMaintenanceReasonsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRoomMaintenanceReasonsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelRoomMaintenanceReasons': !exists(json, 'hotelRoomMaintenanceReasons') ? undefined : ((json['hotelRoomMaintenanceReasons'] as Array<any>).map(HotelRoomMaintenanceReasonTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HotelRoomMaintenanceReasonsCriteriaToJSON(value?: HotelRoomMaintenanceReasonsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelRoomMaintenanceReasons': value.hotelRoomMaintenanceReasons === undefined ? undefined : ((value.hotelRoomMaintenanceReasons as Array<any>).map(HotelRoomMaintenanceReasonTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

