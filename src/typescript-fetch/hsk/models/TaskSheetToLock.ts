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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { TaskSheetLockCriteriaType } from './TaskSheetLockCriteriaType';
import {
    TaskSheetLockCriteriaTypeFromJSON,
    TaskSheetLockCriteriaTypeFromJSONTyped,
    TaskSheetLockCriteriaTypeToJSON,
} from './TaskSheetLockCriteriaType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request for locking a task sheet.
 * @export
 * @interface TaskSheetToLock
 */
export interface TaskSheetToLock {
    /**
     * 
     * @type {TaskSheetLockCriteriaType}
     * @memberof TaskSheetToLock
     */
    criteria?: TaskSheetLockCriteriaType;
    /**
     * 
     * @type {Links}
     * @memberof TaskSheetToLock
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof TaskSheetToLock
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TaskSheetToLock interface.
 */
export function instanceOfTaskSheetToLock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskSheetToLockFromJSON(json: any): TaskSheetToLock {
    return TaskSheetToLockFromJSONTyped(json, false);
}

export function TaskSheetToLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskSheetToLock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : TaskSheetLockCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TaskSheetToLockToJSON(value?: TaskSheetToLock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': TaskSheetLockCriteriaTypeToJSON(value.criteria),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
