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
 * Information related to Other Award.
 * @export
 * @interface OtherAvailabilityType
 */
export interface OtherAvailabilityType {
    /**
     * An identifying number of the award, assigned by the system when the award was issued.
     * @type {number}
     * @memberof OtherAvailabilityType
     */
    awardNumber?: number;
    /**
     * Unique code that identifies this award.
     * @type {string}
     * @memberof OtherAvailabilityType
     */
    awardType?: string;
    /**
     * The actual value of the award, in the amount of currency.
     * @type {number}
     * @memberof OtherAvailabilityType
     */
    awardValue?: number;
    /**
     * Detail description of the award.
     * @type {string}
     * @memberof OtherAvailabilityType
     */
    longDescription?: string;
    /**
     * The number of points that must be redeemed for this award.
     * @type {number}
     * @memberof OtherAvailabilityType
     */
    pointsRequired?: number;
    /**
     * Beginning date of the award.
     * @type {Date}
     * @memberof OtherAvailabilityType
     */
    sellBeginDate?: Date;
    /**
     * End date that the award will be available.
     * @type {Date}
     * @memberof OtherAvailabilityType
     */
    sellEndDate?: Date;
    /**
     * Descriptive name of the award.
     * @type {string}
     * @memberof OtherAvailabilityType
     */
    shortDescription?: string;
    /**
     * Total award points available for redemption.
     * @type {number}
     * @memberof OtherAvailabilityType
     */
    totalAvailablePoints?: number;
}
/**
 * Check if a given object implements the OtherAvailabilityType interface.
 */
export declare function instanceOfOtherAvailabilityType(value: object): boolean;
export declare function OtherAvailabilityTypeFromJSON(json: any): OtherAvailabilityType;
export declare function OtherAvailabilityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtherAvailabilityType;
export declare function OtherAvailabilityTypeToJSON(value?: OtherAvailabilityType | null): any;