/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface MembershipTypeLevelType
 */
export interface MembershipTypeLevelType {
    /**
     * Description type for Rule Details
     * @type {string}
     * @memberof MembershipTypeLevelType
     */
    level?: string;
    /**
     * Code type for Rule Details
     * @type {string}
     * @memberof MembershipTypeLevelType
     */
    type?: string;
}
/**
 * Check if a given object implements the MembershipTypeLevelType interface.
 */
export declare function instanceOfMembershipTypeLevelType(value: object): boolean;
export declare function MembershipTypeLevelTypeFromJSON(json: any): MembershipTypeLevelType;
export declare function MembershipTypeLevelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeLevelType;
export declare function MembershipTypeLevelTypeToJSON(value?: MembershipTypeLevelType | null): any;
