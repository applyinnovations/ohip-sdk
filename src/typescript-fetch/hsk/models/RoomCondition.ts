/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { SetRoomConditionType } from './SetRoomConditionType';
import {
    SetRoomConditionTypeFromJSON,
    SetRoomConditionTypeFromJSONTyped,
    SetRoomConditionTypeToJSON,
} from './SetRoomConditionType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request element for setting room condition.
 * @export
 * @interface RoomCondition
 */
export interface RoomCondition {
    /**
     * 
     * @type {SetRoomConditionType}
     * @memberof RoomCondition
     */
    criteria?: SetRoomConditionType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomCondition
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomCondition
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomCondition interface.
 */
export function instanceOfRoomCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomConditionFromJSON(json: any): RoomCondition {
    return RoomConditionFromJSONTyped(json, false);
}

export function RoomConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : SetRoomConditionTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomConditionToJSON(value?: RoomCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': SetRoomConditionTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

