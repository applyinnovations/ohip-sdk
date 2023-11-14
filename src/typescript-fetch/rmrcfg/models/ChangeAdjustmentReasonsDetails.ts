/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { RoomRotationAdjustmentReasonsType } from './RoomRotationAdjustmentReasonsType';
import {
    RoomRotationAdjustmentReasonsTypeFromJSON,
    RoomRotationAdjustmentReasonsTypeFromJSONTyped,
    RoomRotationAdjustmentReasonsTypeToJSON,
} from './RoomRotationAdjustmentReasonsType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for changing Room Rotation Adjustment Reasons.
 * @export
 * @interface ChangeAdjustmentReasonsDetails
 */
export interface ChangeAdjustmentReasonsDetails {
    /**
     * 
     * @type {RoomRotationAdjustmentReasonsType}
     * @memberof ChangeAdjustmentReasonsDetails
     */
    adjustmentReasons?: RoomRotationAdjustmentReasonsType;
    /**
     * 
     * @type {Links}
     * @memberof ChangeAdjustmentReasonsDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChangeAdjustmentReasonsDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChangeAdjustmentReasonsDetails interface.
 */
export function instanceOfChangeAdjustmentReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeAdjustmentReasonsDetailsFromJSON(json: any): ChangeAdjustmentReasonsDetails {
    return ChangeAdjustmentReasonsDetailsFromJSONTyped(json, false);
}

export function ChangeAdjustmentReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeAdjustmentReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentReasons': !exists(json, 'adjustmentReasons') ? undefined : RoomRotationAdjustmentReasonsTypeFromJSON(json['adjustmentReasons']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChangeAdjustmentReasonsDetailsToJSON(value?: ChangeAdjustmentReasonsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentReasons': RoomRotationAdjustmentReasonsTypeToJSON(value.adjustmentReasons),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
