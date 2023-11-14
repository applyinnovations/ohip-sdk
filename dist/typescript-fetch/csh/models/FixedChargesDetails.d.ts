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
import type { FixedChargesType } from './FixedChargesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response that contains either the fixed charges list if fetch was successful or error(s) if not.
 * @export
 * @interface FixedChargesDetails
 */
export interface FixedChargesDetails {
    /**
     *
     * @type {FixedChargesType}
     * @memberof FixedChargesDetails
     */
    fixedCharges?: FixedChargesType;
    /**
     *
     * @type {Links}
     * @memberof FixedChargesDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FixedChargesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FixedChargesDetails interface.
 */
export declare function instanceOfFixedChargesDetails(value: object): boolean;
export declare function FixedChargesDetailsFromJSON(json: any): FixedChargesDetails;
export declare function FixedChargesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargesDetails;
export declare function FixedChargesDetailsToJSON(value?: FixedChargesDetails | null): any;