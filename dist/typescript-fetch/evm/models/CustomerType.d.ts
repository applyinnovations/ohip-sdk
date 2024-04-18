/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PersonNameType } from './PersonNameType';
/**
 * Contains basic data on the customer's identity, location, relationships, finances, memberships, etc.
 * @export
 * @interface CustomerType
 */
export interface CustomerType {
    /**
     * Identifies the profile gender code based from configured gender list of values.
     * @type {string}
     * @memberof CustomerType
     */
    genderCode?: string;
    /**
     * Detailed name information for the customer.
     * @type {Array<PersonNameType>}
     * @memberof CustomerType
     */
    personName?: Array<PersonNameType>;
    /**
     * Description of the VIP status.
     * @type {string}
     * @memberof CustomerType
     */
    vipDescription?: string;
    /**
     * VIP status of the customer.
     * @type {string}
     * @memberof CustomerType
     */
    vipStatus?: string;
}
/**
 * Check if a given object implements the CustomerType interface.
 */
export declare function instanceOfCustomerType(value: object): boolean;
export declare function CustomerTypeFromJSON(json: any): CustomerType;
export declare function CustomerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerType;
export declare function CustomerTypeToJSON(value?: CustomerType | null): any;