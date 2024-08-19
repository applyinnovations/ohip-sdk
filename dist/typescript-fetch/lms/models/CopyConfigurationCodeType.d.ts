/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information needed to copy configuration code from one property to the other.
 * @export
 * @interface CopyConfigurationCodeType
 */
export interface CopyConfigurationCodeType {
    /**
     * Source hotel code from which code is to be copied from.
     * @type {string}
     * @memberof CopyConfigurationCodeType
     */
    code?: string;
    /**
     * Code that is to be copied.
     * @type {string}
     * @memberof CopyConfigurationCodeType
     */
    sourceHotelCode?: string;
    /**
     * Property to which configuration code type to be copied to.
     * @type {Array<string>}
     * @memberof CopyConfigurationCodeType
     */
    targetHotelCode?: Array<string>;
}
/**
 * Check if a given object implements the CopyConfigurationCodeType interface.
 */
export declare function instanceOfCopyConfigurationCodeType(value: object): boolean;
export declare function CopyConfigurationCodeTypeFromJSON(json: any): CopyConfigurationCodeType;
export declare function CopyConfigurationCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyConfigurationCodeType;
export declare function CopyConfigurationCodeTypeToJSON(value?: CopyConfigurationCodeType | null): any;
