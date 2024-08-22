/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BedTypeType } from './BedTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating a new Bed Type.
 * @export
 * @interface BedTypesCriteria
 */
export interface BedTypesCriteria {
    /**
     * Bed Type Enumeration element.
     * @type {Array<BedTypeType>}
     * @memberof BedTypesCriteria
     */
    bedTypes?: Array<BedTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BedTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BedTypesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BedTypesCriteria interface.
 */
export declare function instanceOfBedTypesCriteria(value: object): boolean;
export declare function BedTypesCriteriaFromJSON(json: any): BedTypesCriteria;
export declare function BedTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTypesCriteria;
export declare function BedTypesCriteriaToJSON(value?: BedTypesCriteria | null): any;
