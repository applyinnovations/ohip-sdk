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
 *
 * @export
 * @interface InterfaceControlSpecType
 */
export interface InterfaceControlSpecType {
    /**
     * Hotel Code of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    hotelId?: string;
    /**
     * Internal code of a translation specification setup.
     * @type {number}
     * @memberof InterfaceControlSpecType
     */
    internalCode?: number;
    /**
     * Logo of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    logo?: string;
    /**
     * Position of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    position?: string;
    /**
     * Priority of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    priority?: string;
    /**
     * Selector of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    selector?: string;
    /**
     * Specification of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    specification?: string;
}
/**
 * Check if a given object implements the InterfaceControlSpecType interface.
 */
export declare function instanceOfInterfaceControlSpecType(value: object): boolean;
export declare function InterfaceControlSpecTypeFromJSON(json: any): InterfaceControlSpecType;
export declare function InterfaceControlSpecTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceControlSpecType;
export declare function InterfaceControlSpecTypeToJSON(value?: InterfaceControlSpecType | null): any;