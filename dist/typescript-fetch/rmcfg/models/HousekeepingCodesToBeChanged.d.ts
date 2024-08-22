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
import type { HousekeepingCodeConfigType } from './HousekeepingCodeConfigType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Modify housekeeping codes in resort configurations.
 * @export
 * @interface HousekeepingCodesToBeChanged
 */
export interface HousekeepingCodesToBeChanged {
    /**
     * List of the housekeeping codes to be configured or fetched
     * @type {Array<HousekeepingCodeConfigType>}
     * @memberof HousekeepingCodesToBeChanged
     */
    codes?: Array<HousekeepingCodeConfigType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingCodesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingCodesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the HousekeepingCodesToBeChanged interface.
 */
export declare function instanceOfHousekeepingCodesToBeChanged(value: object): boolean;
export declare function HousekeepingCodesToBeChangedFromJSON(json: any): HousekeepingCodesToBeChanged;
export declare function HousekeepingCodesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCodesToBeChanged;
export declare function HousekeepingCodesToBeChangedToJSON(value?: HousekeepingCodesToBeChanged | null): any;
