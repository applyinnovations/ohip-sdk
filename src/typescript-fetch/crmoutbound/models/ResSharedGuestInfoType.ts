/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * Contains information regarding the share reservation.
 * @export
 * @interface ResSharedGuestInfoType
 */
export interface ResSharedGuestInfoType {
    /**
     * 
     * @type {ProfileId}
     * @memberof ResSharedGuestInfoType
     */
    profileId?: ProfileId;
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    firstName?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    lastName?: string;
    /**
     * String representation of the full name
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    fullName?: string;
}

/**
 * Check if a given object implements the ResSharedGuestInfoType interface.
 */
export function instanceOfResSharedGuestInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResSharedGuestInfoTypeFromJSON(json: any): ResSharedGuestInfoType {
    return ResSharedGuestInfoTypeFromJSONTyped(json, false);
}

export function ResSharedGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResSharedGuestInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
    };
}

export function ResSharedGuestInfoTypeToJSON(value?: ResSharedGuestInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileId': ProfileIdToJSON(value.profileId),
        'firstName': value.firstName,
        'lastName': value.lastName,
        'fullName': value.fullName,
    };
}
