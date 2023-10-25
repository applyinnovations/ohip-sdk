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
import type { ImageUploadType } from './ImageUploadType';
import {
    ImageUploadTypeFromJSON,
    ImageUploadTypeFromJSONTyped,
    ImageUploadTypeToJSON,
} from './ImageUploadType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface UploadImageRequest
 */
export interface UploadImageRequest {
    /**
     * List of Image details to upload including image to upload.
     * @type {Array<ImageUploadType>}
     * @memberof UploadImageRequest
     */
    images?: Array<ImageUploadType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof UploadImageRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof UploadImageRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the UploadImageRequest interface.
 */
export function instanceOfUploadImageRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UploadImageRequestFromJSON(json: any): UploadImageRequest {
    return UploadImageRequestFromJSONTyped(json, false);
}

export function UploadImageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadImageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(ImageUploadTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function UploadImageRequestToJSON(value?: UploadImageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(ImageUploadTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

