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
/**
 * Completion status of Activity.
 * @export
 * @interface ActivityInfoTypeStatus
 */
export interface ActivityInfoTypeStatus {
    /**
     * Indicates whether Activity is Completed or not.
     * @type {boolean}
     * @memberof ActivityInfoTypeStatus
     */
    completed?: boolean;
    /**
     * Name of person who completed the Activity.
     * @type {string}
     * @memberof ActivityInfoTypeStatus
     */
    completedBy?: string;
    /**
     * Date on which the Activity was completed.
     * @type {string}
     * @memberof ActivityInfoTypeStatus
     */
    completedOn?: string;
}

/**
 * Check if a given object implements the ActivityInfoTypeStatus interface.
 */
export function instanceOfActivityInfoTypeStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityInfoTypeStatusFromJSON(json: any): ActivityInfoTypeStatus {
    return ActivityInfoTypeStatusFromJSONTyped(json, false);
}

export function ActivityInfoTypeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityInfoTypeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'completedBy': !exists(json, 'completedBy') ? undefined : json['completedBy'],
        'completedOn': !exists(json, 'completedOn') ? undefined : json['completedOn'],
    };
}

export function ActivityInfoTypeStatusToJSON(value?: ActivityInfoTypeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'completed': value.completed,
        'completedBy': value.completedBy,
        'completedOn': value.completedOn,
    };
}

