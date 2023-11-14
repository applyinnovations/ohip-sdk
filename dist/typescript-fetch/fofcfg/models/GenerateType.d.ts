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
import type { GenerateCalcRuleType } from './GenerateCalcRuleType';
import type { GenerateCalculationBucketsType } from './GenerateCalculationBucketsType';
import type { GenerateLevelType } from './GenerateLevelType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Defines the Generate and its Calculation Rules
 * @export
 * @interface GenerateType
 */
export interface GenerateType {
    /**
     *
     * @type {GenerateCalculationBucketsType}
     * @memberof GenerateType
     */
    addGeneratedAmtTo?: GenerateCalculationBucketsType;
    /**
     * Code.
     * @type {string}
     * @memberof GenerateType
     */
    code?: string;
    /**
     * description.
     * @type {string}
     * @memberof GenerateType
     */
    description?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof GenerateType
     */
    generateId?: UniqueIDType;
    /**
     *
     * @type {GenerateLevelType}
     * @memberof GenerateType
     */
    level?: GenerateLevelType;
    /**
     *
     * @type {GenerateCalcRuleType}
     * @memberof GenerateType
     */
    rule?: GenerateCalcRuleType;
}
/**
 * Check if a given object implements the GenerateType interface.
 */
export declare function instanceOfGenerateType(value: object): boolean;
export declare function GenerateTypeFromJSON(json: any): GenerateType;
export declare function GenerateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateType;
export declare function GenerateTypeToJSON(value?: GenerateType | null): any;