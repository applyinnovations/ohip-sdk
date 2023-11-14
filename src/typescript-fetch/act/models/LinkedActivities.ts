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
import type { LinkedActivitiesType } from './LinkedActivitiesType';
import {
    LinkedActivitiesTypeFromJSON,
    LinkedActivitiesTypeFromJSONTyped,
    LinkedActivitiesTypeToJSON,
} from './LinkedActivitiesType';
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
 * @interface LinkedActivities
 */
export interface LinkedActivities {
    /**
     * 
     * @type {LinkedActivitiesType}
     * @memberof LinkedActivities
     */
    linkedActivityDetails?: LinkedActivitiesType;
    /**
     * 
     * @type {Links}
     * @memberof LinkedActivities
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof LinkedActivities
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the LinkedActivities interface.
 */
export function instanceOfLinkedActivities(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinkedActivitiesFromJSON(json: any): LinkedActivities {
    return LinkedActivitiesFromJSONTyped(json, false);
}

export function LinkedActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedActivities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkedActivityDetails': !exists(json, 'linkedActivityDetails') ? undefined : LinkedActivitiesTypeFromJSON(json['linkedActivityDetails']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function LinkedActivitiesToJSON(value?: LinkedActivities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linkedActivityDetails': LinkedActivitiesTypeToJSON(value.linkedActivityDetails),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
