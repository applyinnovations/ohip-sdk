/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ImageCodeType } from './ImageCodeType';
/**
 * Image parameter code/value pair
 * @export
 * @interface ImageParameterType
 */
export interface ImageParameterType {
    /**
     *
     * @type {ImageCodeType}
     * @memberof ImageParameterType
     */
    imageParameterCode?: ImageCodeType;
    /**
     * Image parameter value.
     * @type {string}
     * @memberof ImageParameterType
     */
    imageParameterValue?: string;
}
/**
 * Check if a given object implements the ImageParameterType interface.
 */
export declare function instanceOfImageParameterType(value: object): boolean;
export declare function ImageParameterTypeFromJSON(json: any): ImageParameterType;
export declare function ImageParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageParameterType;
export declare function ImageParameterTypeToJSON(value?: ImageParameterType | null): any;