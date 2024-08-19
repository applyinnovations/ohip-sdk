/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';

/**
 * List of Telephone Number Information
 * @export
 * @interface ProfileEnrollmentTypeTelephones
 */
export interface ProfileEnrollmentTypeTelephones {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileEnrollmentTypeTelephones
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileEnrollmentTypeTelephones
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @type {Array<TelephoneInfoType>}
     * @memberof ProfileEnrollmentTypeTelephones
     */
    telephoneInfo?: Array<TelephoneInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileEnrollmentTypeTelephones
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfileEnrollmentTypeTelephones interface.
 */
export function instanceOfProfileEnrollmentTypeTelephones(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileEnrollmentTypeTelephonesFromJSON(json: any): ProfileEnrollmentTypeTelephones {
    return ProfileEnrollmentTypeTelephonesFromJSONTyped(json, false);
}

export function ProfileEnrollmentTypeTelephonesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileEnrollmentTypeTelephones {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'telephoneInfo': !exists(json, 'telephoneInfo') ? undefined : ((json['telephoneInfo'] as Array<any>).map(TelephoneInfoTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfileEnrollmentTypeTelephonesToJSON(value?: ProfileEnrollmentTypeTelephones | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'telephoneInfo': value.telephoneInfo === undefined ? undefined : ((value.telephoneInfo as Array<any>).map(TelephoneInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

