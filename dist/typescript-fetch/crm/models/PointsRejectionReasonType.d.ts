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
/**
 * Information related to a Points Rejection Reason summary.
 * @export
 * @interface PointsRejectionReasonType
 */
export interface PointsRejectionReasonType {
    /**
     * Indicates rule code for membership rule.
     * @type {string}
     * @memberof PointsRejectionReasonType
     */
    code?: string;
    /**
     * Indicates the reason the points were not awarded (e.g. Membership level requirements not met).
     * @type {string}
     * @memberof PointsRejectionReasonType
     */
    rejectionReason?: string;
    /**
     * Indicates membership rule.
     * @type {string}
     * @memberof PointsRejectionReasonType
     */
    rule?: string;
}
/**
 * Check if a given object implements the PointsRejectionReasonType interface.
 */
export declare function instanceOfPointsRejectionReasonType(value: object): boolean;
export declare function PointsRejectionReasonTypeFromJSON(json: any): PointsRejectionReasonType;
export declare function PointsRejectionReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointsRejectionReasonType;
export declare function PointsRejectionReasonTypeToJSON(value?: PointsRejectionReasonType | null): any;
