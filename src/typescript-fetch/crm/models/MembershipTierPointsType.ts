/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Collection of the tier points.
 * @export
 * @interface MembershipTierPointsType
 */
export interface MembershipTierPointsType {
    /**
     * Sum of the base night and bonus night points.
     * @type {number}
     * @memberof MembershipTierPointsType
     */
    nightPoints?: number;
    /**
     * Points Cost.
     * @type {number}
     * @memberof MembershipTierPointsType
     */
    pointsCost?: number;
    /**
     * Date when points were created.
     * @type {string}
     * @memberof MembershipTierPointsType
     */
    pointsCreditDate?: string;
    /**
     * Sum of the base revenue and bonus revenue points.
     * @type {number}
     * @memberof MembershipTierPointsType
     */
    revenuePoints?: number;
    /**
     * Sum of the base stay and bonus stay points.
     * @type {number}
     * @memberof MembershipTierPointsType
     */
    stayPoints?: number;
}

/**
 * Check if a given object implements the MembershipTierPointsType interface.
 */
export function instanceOfMembershipTierPointsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTierPointsTypeFromJSON(json: any): MembershipTierPointsType {
    return MembershipTierPointsTypeFromJSONTyped(json, false);
}

export function MembershipTierPointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTierPointsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nightPoints': !exists(json, 'nightPoints') ? undefined : json['nightPoints'],
        'pointsCost': !exists(json, 'pointsCost') ? undefined : json['pointsCost'],
        'pointsCreditDate': !exists(json, 'pointsCreditDate') ? undefined : json['pointsCreditDate'],
        'revenuePoints': !exists(json, 'revenuePoints') ? undefined : json['revenuePoints'],
        'stayPoints': !exists(json, 'stayPoints') ? undefined : json['stayPoints'],
    };
}

export function MembershipTierPointsTypeToJSON(value?: MembershipTierPointsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nightPoints': value.nightPoints,
        'pointsCost': value.pointsCost,
        'pointsCreditDate': value.pointsCreditDate,
        'revenuePoints': value.revenuePoints,
        'stayPoints': value.stayPoints,
    };
}

