/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GenerateFolioCriteriaType } from './GenerateFolioCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Generate Folio request can be used to create a folio for checked in reservation or reservation with open folios
 * @export
 * @interface FolioCriteria
 */
export interface FolioCriteria {
    /**
     *
     * @type {GenerateFolioCriteriaType}
     * @memberof FolioCriteria
     */
    criteria?: GenerateFolioCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof FolioCriteria
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FolioCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FolioCriteria interface.
 */
export declare function instanceOfFolioCriteria(value: object): boolean;
export declare function FolioCriteriaFromJSON(json: any): FolioCriteria;
export declare function FolioCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioCriteria;
export declare function FolioCriteriaToJSON(value?: FolioCriteria | null): any;