/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FiscalRegionType } from './FiscalRegionType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Fiscal Regions.
 * @export
 * @interface FiscalRegionsToBeChanged
 */
export interface FiscalRegionsToBeChanged {
    /**
     * List of Fiscal Regions.
     * @type {Array<FiscalRegionType>}
     * @memberof FiscalRegionsToBeChanged
     */
    fiscalRegions?: Array<FiscalRegionType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FiscalRegionsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FiscalRegionsToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FiscalRegionsToBeChanged interface.
 */
export declare function instanceOfFiscalRegionsToBeChanged(value: object): boolean;
export declare function FiscalRegionsToBeChangedFromJSON(json: any): FiscalRegionsToBeChanged;
export declare function FiscalRegionsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalRegionsToBeChanged;
export declare function FiscalRegionsToBeChangedToJSON(value?: FiscalRegionsToBeChanged | null): any;
