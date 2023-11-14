/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { IdentificationType } from './IdentificationType';
/**
 * Information on the identification of the customer.
 * @export
 * @interface IdentificationInfoType
 */
export interface IdentificationInfoType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof IdentificationInfoType
     */
    id?: string;
    /**
     *
     * @type {IdentificationType}
     * @memberof IdentificationInfoType
     */
    identification?: IdentificationType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof IdentificationInfoType
     */
    type?: string;
}
/**
 * Check if a given object implements the IdentificationInfoType interface.
 */
export declare function instanceOfIdentificationInfoType(value: object): boolean;
export declare function IdentificationInfoTypeFromJSON(json: any): IdentificationInfoType;
export declare function IdentificationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationInfoType;
export declare function IdentificationInfoTypeToJSON(value?: IdentificationInfoType | null): any;