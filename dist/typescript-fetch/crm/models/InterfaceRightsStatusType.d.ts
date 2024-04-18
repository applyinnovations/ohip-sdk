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
 *
 * @export
 * @interface InterfaceRightsStatusType
 */
export interface InterfaceRightsStatusType {
    /**
     * Category code of this interface right.
     * @type {string}
     * @memberof InterfaceRightsStatusType
     */
    category?: string;
    /**
     * User defined description for an Interface Right.
     * @type {string}
     * @memberof InterfaceRightsStatusType
     */
    description?: string;
    /**
     * Internal code for each allowed right of a Hotel Interface record.
     * @type {number}
     * @memberof InterfaceRightsStatusType
     */
    right?: number;
    /**
     * User defined code for an Interface Right.
     * @type {string}
     * @memberof InterfaceRightsStatusType
     */
    statusCode?: string;
}
/**
 * Check if a given object implements the InterfaceRightsStatusType interface.
 */
export declare function instanceOfInterfaceRightsStatusType(value: object): boolean;
export declare function InterfaceRightsStatusTypeFromJSON(json: any): InterfaceRightsStatusType;
export declare function InterfaceRightsStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceRightsStatusType;
export declare function InterfaceRightsStatusTypeToJSON(value?: InterfaceRightsStatusType | null): any;