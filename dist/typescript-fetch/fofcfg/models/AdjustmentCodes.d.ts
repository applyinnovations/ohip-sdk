/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AdjustmentCodesType } from './AdjustmentCodesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface AdjustmentCodes
 */
export interface AdjustmentCodes {
    /**
     *
     * @type {AdjustmentCodesType}
     * @memberof AdjustmentCodes
     */
    adjustmentCodes?: AdjustmentCodesType;
    /**
     *
     * @type {Links}
     * @memberof AdjustmentCodes
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof AdjustmentCodes
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AdjustmentCodes interface.
 */
export declare function instanceOfAdjustmentCodes(value: object): boolean;
export declare function AdjustmentCodesFromJSON(json: any): AdjustmentCodes;
export declare function AdjustmentCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdjustmentCodes;
export declare function AdjustmentCodesToJSON(value?: AdjustmentCodes | null): any;
