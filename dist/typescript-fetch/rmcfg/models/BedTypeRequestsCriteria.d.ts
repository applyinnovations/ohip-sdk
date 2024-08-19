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
import type { BedTypeRequestType } from './BedTypeRequestType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating Bed Type Requests.
 * @export
 * @interface BedTypeRequestsCriteria
 */
export interface BedTypeRequestsCriteria {
    /**
     * List of Bed Type Requests.
     * @type {Array<BedTypeRequestType>}
     * @memberof BedTypeRequestsCriteria
     */
    bedTypeRequests?: Array<BedTypeRequestType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BedTypeRequestsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BedTypeRequestsCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BedTypeRequestsCriteria interface.
 */
export declare function instanceOfBedTypeRequestsCriteria(value: object): boolean;
export declare function BedTypeRequestsCriteriaFromJSON(json: any): BedTypeRequestsCriteria;
export declare function BedTypeRequestsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTypeRequestsCriteria;
export declare function BedTypeRequestsCriteriaToJSON(value?: BedTypeRequestsCriteria | null): any;
