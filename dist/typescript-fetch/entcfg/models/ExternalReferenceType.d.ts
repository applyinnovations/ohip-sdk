/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This type contains unique information of external reference.
 * @export
 * @interface ExternalReferenceType
 */
export interface ExternalReferenceType {
    /**
     * Unique ID of external reference.
     * @type {string}
     * @memberof ExternalReferenceType
     */
    id?: string;
    /**
     * ID extension for external reference.
     * @type {number}
     * @memberof ExternalReferenceType
     */
    idExtension?: number;
    /**
     * ID context for external reference.
     * @type {string}
     * @memberof ExternalReferenceType
     */
    idContext?: string;
}
/**
 * Check if a given object implements the ExternalReferenceType interface.
 */
export declare function instanceOfExternalReferenceType(value: object): boolean;
export declare function ExternalReferenceTypeFromJSON(json: any): ExternalReferenceType;
export declare function ExternalReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalReferenceType;
export declare function ExternalReferenceTypeToJSON(value?: ExternalReferenceType | null): any;
