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
import type { ActivityListType } from './ActivityListType';
import {
    ActivityListTypeFromJSON,
    ActivityListTypeFromJSONTyped,
    ActivityListTypeToJSON,
} from './ActivityListType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * 
 * @export
 * @interface PostMultipleActivitiesCompletionRequest
 */
export interface PostMultipleActivitiesCompletionRequest {
    /**
     * 
     * @type {ActivityListType}
     * @memberof PostMultipleActivitiesCompletionRequest
     */
    activitiesInformation?: ActivityListType;
    /**
     * Signifies whether only activity details are being modified.
     * @type {boolean}
     * @memberof PostMultipleActivitiesCompletionRequest
     */
    activityDetailsEditFlag?: boolean;
    /**
     * Signifies whether complete details of activity should alone be modified.
     * @type {boolean}
     * @memberof PostMultipleActivitiesCompletionRequest
     */
    completeMode?: boolean;
    /**
     * 
     * @type {Links}
     * @memberof PostMultipleActivitiesCompletionRequest
     */
    links?: Links;
    /**
     * Signifies whether the linked activity details should be modified or not.
     * @type {boolean}
     * @memberof PostMultipleActivitiesCompletionRequest
     */
    updateLinkedActivities?: boolean;
    /**
     * 
     * @type {WarningsType}
     * @memberof PostMultipleActivitiesCompletionRequest
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the PostMultipleActivitiesCompletionRequest interface.
 */
export function instanceOfPostMultipleActivitiesCompletionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostMultipleActivitiesCompletionRequestFromJSON(json: any): PostMultipleActivitiesCompletionRequest {
    return PostMultipleActivitiesCompletionRequestFromJSONTyped(json, false);
}

export function PostMultipleActivitiesCompletionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMultipleActivitiesCompletionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activitiesInformation': !exists(json, 'activitiesInformation') ? undefined : ActivityListTypeFromJSON(json['activitiesInformation']),
        'activityDetailsEditFlag': !exists(json, 'activityDetailsEditFlag') ? undefined : json['activityDetailsEditFlag'],
        'completeMode': !exists(json, 'completeMode') ? undefined : json['completeMode'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'updateLinkedActivities': !exists(json, 'updateLinkedActivities') ? undefined : json['updateLinkedActivities'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function PostMultipleActivitiesCompletionRequestToJSON(value?: PostMultipleActivitiesCompletionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activitiesInformation': ActivityListTypeToJSON(value.activitiesInformation),
        'activityDetailsEditFlag': value.activityDetailsEditFlag,
        'completeMode': value.completeMode,
        'links': LinksToJSON(value.links),
        'updateLinkedActivities': value.updateLinkedActivities,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
