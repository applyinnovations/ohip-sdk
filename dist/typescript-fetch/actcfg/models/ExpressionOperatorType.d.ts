/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ExpressionOperatorType
 */
export interface ExpressionOperatorType {
    /**
     *
     * @type {string}
     * @memberof ExpressionOperatorType
     */
    operatorDescription?: string;
    /**
     *
     * @type {string}
     * @memberof ExpressionOperatorType
     */
    operatorName?: string;
    /**
     *
     * @type {number}
     * @memberof ExpressionOperatorType
     */
    parameterSize?: number;
}
/**
 * Check if a given object implements the ExpressionOperatorType interface.
 */
export declare function instanceOfExpressionOperatorType(value: object): boolean;
export declare function ExpressionOperatorTypeFromJSON(json: any): ExpressionOperatorType;
export declare function ExpressionOperatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressionOperatorType;
export declare function ExpressionOperatorTypeToJSON(value?: ExpressionOperatorType | null): any;