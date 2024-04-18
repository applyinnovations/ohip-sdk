/**
 * OPERA Cloud Integration Processor API
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote).
 * @export
 * @interface BusinessEventIDType
 */
export interface BusinessEventIDType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof BusinessEventIDType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof BusinessEventIDType
     */
    idContext?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof BusinessEventIDType
     */
    type?: string;
}
/**
 * Check if a given object implements the BusinessEventIDType interface.
 */
export declare function instanceOfBusinessEventIDType(value: object): boolean;
export declare function BusinessEventIDTypeFromJSON(json: any): BusinessEventIDType;
export declare function BusinessEventIDTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessEventIDType;
export declare function BusinessEventIDTypeToJSON(value?: BusinessEventIDType | null): any;