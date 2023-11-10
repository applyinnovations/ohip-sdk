/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This type provided details of a function argument and the value it holds.
 * @export
 * @interface FunctionArgumentType
 */
export interface FunctionArgumentType {
    /**
     * Specifies the datatype of the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    dataType?: string;
    /**
     * Specifies the name of the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    name?: string;
    /**
     * Specifies the position of the function argument in the argument list.
     * @type {number}
     * @memberof FunctionArgumentType
     */
    position?: number;
    /**
     * Argument of the function mandatory or not.
     * @type {boolean}
     * @memberof FunctionArgumentType
     */
    required?: boolean;
    /**
     * Specifies the value held by the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    value?: string;
}
/**
 * Check if a given object implements the FunctionArgumentType interface.
 */
export declare function instanceOfFunctionArgumentType(value: object): boolean;
export declare function FunctionArgumentTypeFromJSON(json: any): FunctionArgumentType;
export declare function FunctionArgumentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionArgumentType;
export declare function FunctionArgumentTypeToJSON(value?: FunctionArgumentType | null): any;
