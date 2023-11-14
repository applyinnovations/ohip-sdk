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
import type { CorporateBusinessUnitsType } from './CorporateBusinessUnitsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing Corporate Business Units.
 * @export
 * @interface CorporateBusinessUnitsToBeChanged
 */
export interface CorporateBusinessUnitsToBeChanged {
    /**
     *
     * @type {CorporateBusinessUnitsType}
     * @memberof CorporateBusinessUnitsToBeChanged
     */
    corporateBusinessUnits?: CorporateBusinessUnitsType;
    /**
     *
     * @type {Links}
     * @memberof CorporateBusinessUnitsToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CorporateBusinessUnitsToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CorporateBusinessUnitsToBeChanged interface.
 */
export declare function instanceOfCorporateBusinessUnitsToBeChanged(value: object): boolean;
export declare function CorporateBusinessUnitsToBeChangedFromJSON(json: any): CorporateBusinessUnitsToBeChanged;
export declare function CorporateBusinessUnitsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorporateBusinessUnitsToBeChanged;
export declare function CorporateBusinessUnitsToBeChangedToJSON(value?: CorporateBusinessUnitsToBeChanged | null): any;