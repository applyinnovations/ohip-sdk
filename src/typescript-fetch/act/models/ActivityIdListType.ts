/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityId } from './ActivityId';
import {
    ActivityIdFromJSON,
    ActivityIdFromJSONTyped,
    ActivityIdToJSON,
} from './ActivityId';

/**
 * Unique identifier for the Activity.
 * @export
 * @interface ActivityIdListType
 */
export interface ActivityIdListType extends Array<ActivityId> {
}

/**
 * Check if a given object implements the ActivityIdListType interface.
 */
export function instanceOfActivityIdListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityIdListTypeFromJSON(json: any): ActivityIdListType {
    return ActivityIdListTypeFromJSONTyped(json, false);
}

export function ActivityIdListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityIdListType {
    return json;
}

export function ActivityIdListTypeToJSON(value?: ActivityIdListType | null): any {
    return value;
}
