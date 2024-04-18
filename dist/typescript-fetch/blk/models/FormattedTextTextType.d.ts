/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Provides text and indicates whether it is formatted or not.
 * @export
 * @interface FormattedTextTextType
 */
export interface FormattedTextTextType {
    /**
     * Language identification.
     * @type {string}
     * @memberof FormattedTextTextType
     */
    language?: string;
    /**
     * Property Value
     * @type {string}
     * @memberof FormattedTextTextType
     */
    value?: string;
}
/**
 * Check if a given object implements the FormattedTextTextType interface.
 */
export declare function instanceOfFormattedTextTextType(value: object): boolean;
export declare function FormattedTextTextTypeFromJSON(json: any): FormattedTextTextType;
export declare function FormattedTextTextTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormattedTextTextType;
export declare function FormattedTextTextTypeToJSON(value?: FormattedTextTextType | null): any;