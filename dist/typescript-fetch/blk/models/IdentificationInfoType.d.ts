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
import type { IdentificationType } from './IdentificationType';
import type { WarningType } from './WarningType';
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
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof IdentificationInfoType
     */
    idContext?: string;
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
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof IdentificationInfoType
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the IdentificationInfoType interface.
 */
export declare function instanceOfIdentificationInfoType(value: object): boolean;
export declare function IdentificationInfoTypeFromJSON(json: any): IdentificationInfoType;
export declare function IdentificationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationInfoType;
export declare function IdentificationInfoTypeToJSON(value?: IdentificationInfoType | null): any;