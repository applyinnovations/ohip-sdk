/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ImageCodeType } from './ImageCodeType';
import {
    ImageCodeTypeFromJSON,
    ImageCodeTypeFromJSONTyped,
    ImageCodeTypeToJSON,
} from './ImageCodeType';

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
export function instanceOfImageParameterType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageParameterTypeFromJSON(json: any): ImageParameterType {
    return ImageParameterTypeFromJSONTyped(json, false);
}

export function ImageParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageParameterType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageParameterCode': !exists(json, 'imageParameterCode') ? undefined : ImageCodeTypeFromJSON(json['imageParameterCode']),
        'imageParameterValue': !exists(json, 'imageParameterValue') ? undefined : json['imageParameterValue'],
    };
}

export function ImageParameterTypeToJSON(value?: ImageParameterType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageParameterCode': ImageCodeTypeToJSON(value.imageParameterCode),
        'imageParameterValue': value.imageParameterValue,
    };
}
