/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MembershipTypeLevelType
 */
export interface MembershipTypeLevelType {
    /**
     * Description type for Rule Details
     * @type {string}
     * @memberof MembershipTypeLevelType
     */
    level?: string;
    /**
     * Code type for Rule Details
     * @type {string}
     * @memberof MembershipTypeLevelType
     */
    type?: string;
}

/**
 * Check if a given object implements the MembershipTypeLevelType interface.
 */
export function instanceOfMembershipTypeLevelType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeLevelTypeFromJSON(json: any): MembershipTypeLevelType {
    return MembershipTypeLevelTypeFromJSONTyped(json, false);
}

export function MembershipTypeLevelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeLevelType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': !exists(json, 'level') ? undefined : json['level'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function MembershipTypeLevelTypeToJSON(value?: MembershipTypeLevelType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
        'type': value.type,
    };
}

