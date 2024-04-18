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
/**
 * Details associated with award points.
 * @export
 * @interface MembershipAwardPointsType
 */
export interface MembershipAwardPointsType {
    /**
     * Total number of base award points for a membership points transaction.
     * @type {number}
     * @memberof MembershipAwardPointsType
     */
    basePoints?: number;
    /**
     * If a membership points transaction involves bonus points, the total number of bonus points.
     * @type {number}
     * @memberof MembershipAwardPointsType
     */
    bonusPoints?: number;
    /**
     * If a membership points transaction involves points imported into ORS from a third-party system, the total number of points.
     * @type {number}
     * @memberof MembershipAwardPointsType
     */
    miscPoints?: number;
    /**
     * The date until points are eligible for redemption based on membership type configuration.
     * @type {string}
     * @memberof MembershipAwardPointsType
     */
    pointsExpiryDate?: string;
    /**
     * Rule Code for award points.
     * @type {string}
     * @memberof MembershipAwardPointsType
     */
    ruleCode?: string;
    /**
     * The total number of award points.
     * @type {number}
     * @memberof MembershipAwardPointsType
     */
    totalPoints?: number;
}
/**
 * Check if a given object implements the MembershipAwardPointsType interface.
 */
export declare function instanceOfMembershipAwardPointsType(value: object): boolean;
export declare function MembershipAwardPointsTypeFromJSON(json: any): MembershipAwardPointsType;
export declare function MembershipAwardPointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardPointsType;
export declare function MembershipAwardPointsTypeToJSON(value?: MembershipAwardPointsType | null): any;