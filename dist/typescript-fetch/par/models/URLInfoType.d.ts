/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { URLType } from './URLType';
/**
 * Web site address.
 * @export
 * @interface URLInfoType
 */
export interface URLInfoType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof URLInfoType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof URLInfoType
     */
    type?: string;
    /**
     *
     * @type {URLType}
     * @memberof URLInfoType
     */
    url?: URLType;
}
/**
 * Check if a given object implements the URLInfoType interface.
 */
export declare function instanceOfURLInfoType(value: object): boolean;
export declare function URLInfoTypeFromJSON(json: any): URLInfoType;
export declare function URLInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): URLInfoType;
export declare function URLInfoTypeToJSON(value?: URLInfoType | null): any;