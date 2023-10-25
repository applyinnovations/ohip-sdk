/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Membership Type miscellanous settings.
 * @export
 * @interface MembershipTypeAdditionalInfoType
 */
export interface MembershipTypeAdditionalInfoType {
    /**
     * Default membership statement to be sent ad hoc.
     * @type {string}
     * @memberof MembershipTypeAdditionalInfoType
     */
    adhocStatement?: string;
    /**
     * Automatically update web login.
     * @type {boolean}
     * @memberof MembershipTypeAdditionalInfoType
     */
    autoUpdateWebLogin?: boolean;
    /**
     * Automatically open to allow a web user account to be created.
     * @type {boolean}
     * @memberof MembershipTypeAdditionalInfoType
     */
    autoWebEnrollment?: boolean;
    /**
     * Batch process statement.
     * @type {string}
     * @memberof MembershipTypeAdditionalInfoType
     */
    batchStatement?: string;
    /**
     * When enrolling new members, this is the default letter to be sent.
     * @type {string}
     * @memberof MembershipTypeAdditionalInfoType
     */
    enrollmentLetter?: string;
}

/**
 * Check if a given object implements the MembershipTypeAdditionalInfoType interface.
 */
export function instanceOfMembershipTypeAdditionalInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeAdditionalInfoTypeFromJSON(json: any): MembershipTypeAdditionalInfoType {
    return MembershipTypeAdditionalInfoTypeFromJSONTyped(json, false);
}

export function MembershipTypeAdditionalInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeAdditionalInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adhocStatement': !exists(json, 'adhocStatement') ? undefined : json['adhocStatement'],
        'autoUpdateWebLogin': !exists(json, 'autoUpdateWebLogin') ? undefined : json['autoUpdateWebLogin'],
        'autoWebEnrollment': !exists(json, 'autoWebEnrollment') ? undefined : json['autoWebEnrollment'],
        'batchStatement': !exists(json, 'batchStatement') ? undefined : json['batchStatement'],
        'enrollmentLetter': !exists(json, 'enrollmentLetter') ? undefined : json['enrollmentLetter'],
    };
}

export function MembershipTypeAdditionalInfoTypeToJSON(value?: MembershipTypeAdditionalInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adhocStatement': value.adhocStatement,
        'autoUpdateWebLogin': value.autoUpdateWebLogin,
        'autoWebEnrollment': value.autoWebEnrollment,
        'batchStatement': value.batchStatement,
        'enrollmentLetter': value.enrollmentLetter,
    };
}

