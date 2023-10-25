/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { TaskCompanionTaskRoom } from './TaskCompanionTaskRoom';
import {
    TaskCompanionTaskRoomFromJSON,
    TaskCompanionTaskRoomFromJSONTyped,
    TaskCompanionTaskRoomToJSON,
} from './TaskCompanionTaskRoom';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for the Fetch Task Room request. The room details for the room requested or for the room which was evaluated to be cleaned will be returned along with details of the rooms current status and reservations for the room, if any.
 * @export
 * @interface TaskCompanion
 */
export interface TaskCompanion {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TaskCompanion
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {TaskCompanionTaskRoom}
     * @memberof TaskCompanion
     */
    taskRoom?: TaskCompanionTaskRoom;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TaskCompanion
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TaskCompanion interface.
 */
export function instanceOfTaskCompanion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskCompanionFromJSON(json: any): TaskCompanion {
    return TaskCompanionFromJSONTyped(json, false);
}

export function TaskCompanionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskCompanion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'taskRoom': !exists(json, 'taskRoom') ? undefined : TaskCompanionTaskRoomFromJSON(json['taskRoom']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TaskCompanionToJSON(value?: TaskCompanion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'taskRoom': TaskCompanionTaskRoomToJSON(value.taskRoom),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

