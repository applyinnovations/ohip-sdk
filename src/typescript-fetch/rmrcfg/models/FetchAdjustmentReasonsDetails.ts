/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RoomRotationAdjustmentReasonType } from './RoomRotationAdjustmentReasonType';
import {
    RoomRotationAdjustmentReasonTypeFromJSON,
    RoomRotationAdjustmentReasonTypeFromJSONTyped,
    RoomRotationAdjustmentReasonTypeToJSON,
} from './RoomRotationAdjustmentReasonType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for creating Room Rotation Adjustment Reasons.
 * @export
 * @interface FetchAdjustmentReasonsDetails
 */
export interface FetchAdjustmentReasonsDetails {
    /**
     * Room Rotation Adjustment Reason Enumeration element.
     * @type {Array<RoomRotationAdjustmentReasonType>}
     * @memberof FetchAdjustmentReasonsDetails
     */
    adjustmentReasons?: Array<RoomRotationAdjustmentReasonType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FetchAdjustmentReasonsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FetchAdjustmentReasonsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FetchAdjustmentReasonsDetails interface.
 */
export function instanceOfFetchAdjustmentReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchAdjustmentReasonsDetailsFromJSON(json: any): FetchAdjustmentReasonsDetails {
    return FetchAdjustmentReasonsDetailsFromJSONTyped(json, false);
}

export function FetchAdjustmentReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchAdjustmentReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentReasons': !exists(json, 'adjustmentReasons') ? undefined : ((json['adjustmentReasons'] as Array<any>).map(RoomRotationAdjustmentReasonTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FetchAdjustmentReasonsDetailsToJSON(value?: FetchAdjustmentReasonsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentReasons': value.adjustmentReasons === undefined ? undefined : ((value.adjustmentReasons as Array<any>).map(RoomRotationAdjustmentReasonTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

