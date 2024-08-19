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
 * Response object after fetching Building details of the Hotel.
 * @export
 * @interface BuildingsDetails
 */
export interface BuildingsDetails {
    /**
     * Collection of Building details associated with Hotel.
     * @type {Array<BuildingType>}
     * @memberof BuildingsDetails
     */
    buildings?: Array<BuildingType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BuildingsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BuildingsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BuildingsDetails interface.
 */
export declare function instanceOfBuildingsDetails(value: object): boolean;
export declare function BuildingsDetailsFromJSON(json: any): BuildingsDetails;
export declare function BuildingsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingsDetails;
export declare function BuildingsDetailsToJSON(value?: BuildingsDetails | null): any;
