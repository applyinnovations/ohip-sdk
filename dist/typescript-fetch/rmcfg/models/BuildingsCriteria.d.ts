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
import type { BuildingType } from './BuildingType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object to create Building details of the Hotel.
 * @export
 * @interface BuildingsCriteria
 */
export interface BuildingsCriteria {
    /**
     * Collection of Building details associated with Hotel.
     * @type {Array<BuildingType>}
     * @memberof BuildingsCriteria
     */
    buildings?: Array<BuildingType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BuildingsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BuildingsCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BuildingsCriteria interface.
 */
export declare function instanceOfBuildingsCriteria(value: object): boolean;
export declare function BuildingsCriteriaFromJSON(json: any): BuildingsCriteria;
export declare function BuildingsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingsCriteria;
export declare function BuildingsCriteriaToJSON(value?: BuildingsCriteria | null): any;