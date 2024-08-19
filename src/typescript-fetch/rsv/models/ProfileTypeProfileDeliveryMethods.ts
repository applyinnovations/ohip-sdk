/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileDeliveryMethod } from './ProfileDeliveryMethod';
import {
    ProfileDeliveryMethodFromJSON,
    ProfileDeliveryMethodFromJSONTyped,
    ProfileDeliveryMethodToJSON,
} from './ProfileDeliveryMethod';

/**
 * List of Delivery methods configured against a Property for this Profile.
 * @export
 * @interface ProfileTypeProfileDeliveryMethods
 */
export interface ProfileTypeProfileDeliveryMethods {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeProfileDeliveryMethods
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeProfileDeliveryMethods
     */
    hasMore?: boolean;
    /**
     * Collection of delivery methods for this Profile.
     * @type {Array<ProfileDeliveryMethod>}
     * @memberof ProfileTypeProfileDeliveryMethods
     */
    profileDeliveryMethod?: Array<ProfileDeliveryMethod>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeProfileDeliveryMethods
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfileTypeProfileDeliveryMethods interface.
 */
export function instanceOfProfileTypeProfileDeliveryMethods(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeProfileDeliveryMethodsFromJSON(json: any): ProfileTypeProfileDeliveryMethods {
    return ProfileTypeProfileDeliveryMethodsFromJSONTyped(json, false);
}

export function ProfileTypeProfileDeliveryMethodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeProfileDeliveryMethods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'profileDeliveryMethod': !exists(json, 'profileDeliveryMethod') ? undefined : ((json['profileDeliveryMethod'] as Array<any>).map(ProfileDeliveryMethodFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfileTypeProfileDeliveryMethodsToJSON(value?: ProfileTypeProfileDeliveryMethods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'profileDeliveryMethod': value.profileDeliveryMethod === undefined ? undefined : ((value.profileDeliveryMethod as Array<any>).map(ProfileDeliveryMethodToJSON)),
        'totalResults': value.totalResults,
    };
}

