/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This gives information of custom detail of a hotel interface.
 * @export
 * @interface InterfaceCustomDataDetailType
 */
export interface InterfaceCustomDataDetailType {
    /**
     * Specifies the type of data stored.
     * @type {string}
     * @memberof InterfaceCustomDataDetailType
     */
    customDataField?: string;
    /**
     * Specifies the actual data corresponding to each value in the field.
     * @type {string}
     * @memberof InterfaceCustomDataDetailType
     */
    customDataValue?: string;
}
/**
 * Check if a given object implements the InterfaceCustomDataDetailType interface.
 */
export declare function instanceOfInterfaceCustomDataDetailType(value: object): boolean;
export declare function InterfaceCustomDataDetailTypeFromJSON(json: any): InterfaceCustomDataDetailType;
export declare function InterfaceCustomDataDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceCustomDataDetailType;
export declare function InterfaceCustomDataDetailTypeToJSON(value?: InterfaceCustomDataDetailType | null): any;