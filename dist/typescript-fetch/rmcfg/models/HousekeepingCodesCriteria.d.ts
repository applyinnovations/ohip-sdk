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
 * Add housekeeping codes configurations for property.
 * @export
 * @interface HousekeepingCodesCriteria
 */
export interface HousekeepingCodesCriteria {
    /**
     * List of the housekeeping codes to be configured or fetched
     * @type {Array<HousekeepingCodeConfigType>}
     * @memberof HousekeepingCodesCriteria
     */
    codes?: Array<HousekeepingCodeConfigType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingCodesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingCodesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the HousekeepingCodesCriteria interface.
 */
export declare function instanceOfHousekeepingCodesCriteria(value: object): boolean;
export declare function HousekeepingCodesCriteriaFromJSON(json: any): HousekeepingCodesCriteria;
export declare function HousekeepingCodesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCodesCriteria;
export declare function HousekeepingCodesCriteriaToJSON(value?: HousekeepingCodesCriteria | null): any;