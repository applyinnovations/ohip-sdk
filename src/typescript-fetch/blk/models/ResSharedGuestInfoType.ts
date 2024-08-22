/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
     * Given name, first name or names
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    firstName?: string;
    /**
     * String representation of the full name
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    fullName?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    lastName?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof ResSharedGuestInfoType
     */
    profileId?: ProfileId;
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
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
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
        
        'firstName': value.firstName,
        'fullName': value.fullName,
        'lastName': value.lastName,
        'profileId': ProfileIdToJSON(value.profileId),
    };
}

