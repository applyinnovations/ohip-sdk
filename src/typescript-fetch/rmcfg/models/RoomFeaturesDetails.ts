/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RoomFeatureConfigType } from './RoomFeatureConfigType';
import {
    RoomFeatureConfigTypeFromJSON,
    RoomFeatureConfigTypeFromJSONTyped,
    RoomFeatureConfigTypeToJSON,
} from './RoomFeatureConfigType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object to fetch room features of hotel.
 * @export
 * @interface RoomFeaturesDetails
 */
export interface RoomFeaturesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomFeaturesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Room feature details.
     * @type {Array<RoomFeatureConfigType>}
     * @memberof RoomFeaturesDetails
     */
    roomFeatures?: Array<RoomFeatureConfigType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomFeaturesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomFeaturesDetails interface.
 */
export function instanceOfRoomFeaturesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomFeaturesDetailsFromJSON(json: any): RoomFeaturesDetails {
    return RoomFeaturesDetailsFromJSONTyped(json, false);
}

export function RoomFeaturesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomFeaturesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureConfigTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomFeaturesDetailsToJSON(value?: RoomFeaturesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureConfigTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

