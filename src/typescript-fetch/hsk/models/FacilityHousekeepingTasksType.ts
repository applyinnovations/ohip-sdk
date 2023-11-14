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
import type { FacilityHousekeepingTaskType } from './FacilityHousekeepingTaskType';
import {
    FacilityHousekeepingTaskTypeFromJSON,
    FacilityHousekeepingTaskTypeFromJSONTyped,
    FacilityHousekeepingTaskTypeToJSON,
} from './FacilityHousekeepingTaskType';

/**
 * List of the facility tasks.
 * @export
 * @interface FacilityHousekeepingTasksType
 */
export interface FacilityHousekeepingTasksType extends Array<FacilityHousekeepingTaskType> {
}

/**
 * Check if a given object implements the FacilityHousekeepingTasksType interface.
 */
export function instanceOfFacilityHousekeepingTasksType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityHousekeepingTasksTypeFromJSON(json: any): FacilityHousekeepingTasksType {
    return FacilityHousekeepingTasksTypeFromJSONTyped(json, false);
}

export function FacilityHousekeepingTasksTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityHousekeepingTasksType {
    return json;
}

export function FacilityHousekeepingTasksTypeToJSON(value?: FacilityHousekeepingTasksType | null): any {
    return value;
}
