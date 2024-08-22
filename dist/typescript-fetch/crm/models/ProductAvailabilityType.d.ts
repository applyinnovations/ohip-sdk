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
 * Member Award availability details based on chosen award types as Product,Rate,Upgrade,FT Payment and Other.
 * @export
 * @interface ProductAvailabilityType
 */
export interface ProductAvailabilityType {
    /**
     * An identifying number of the award, assigned by the system when the award was issued.
     * @type {number}
     * @memberof ProductAvailabilityType
     */
    awardNumber?: number;
    /**
     * Unique code that identifies this award.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    awardType?: string;
    /**
     * The valid time period from when the award can be issued.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    awardValidFrom?: string;
    /**
     * The valid time to an issued award.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    awardValidTo?: string;
    /**
     * The cancel penalty charge.
     * @type {number}
     * @memberof ProductAvailabilityType
     */
    cancelPenaltyCharge?: number;
    /**
     * Number of days before arrival when a reservation may be cancelled without an award points penalty.
     * @type {number}
     * @memberof ProductAvailabilityType
     */
    cancelPenaltyDays?: number;
    /**
     * The award points that will be forfeited if the cancel penalty charge is applied.
     * @type {number}
     * @memberof ProductAvailabilityType
     */
    cancelPenaltyPoints?: number;
    /**
     * The penalty charge is either a percentage or a flat number of points.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    cancelPenaltyType?: string;
    /**
     * HotelCode where the award will be consumed.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    hotelId?: string;
    /**
     * Package/Product code for the award .
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    packageCode?: string;
    /**
     * Description of the product.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    packageDescription?: string;
    /**
     * The number of points that must be redeemed for this award.
     * @type {number}
     * @memberof ProductAvailabilityType
     */
    pointsRequired?: number;
    /**
     * Issue key in format of Raw data.
     * @type {string}
     * @memberof ProductAvailabilityType
     */
    rawIssueKey?: string;
    /**
     * Total award points available for redemption.
     * @type {number}
     * @memberof ProductAvailabilityType
     */
    totalAvailablePoints?: number;
}
/**
 * Check if a given object implements the ProductAvailabilityType interface.
 */
export declare function instanceOfProductAvailabilityType(value: object): boolean;
export declare function ProductAvailabilityTypeFromJSON(json: any): ProductAvailabilityType;
export declare function ProductAvailabilityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductAvailabilityType;
export declare function ProductAvailabilityTypeToJSON(value?: ProductAvailabilityType | null): any;
