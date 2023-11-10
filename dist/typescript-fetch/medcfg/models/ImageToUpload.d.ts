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
import type { ImageUploadInfoType } from './ImageUploadInfoType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to upload an image.
 * @export
 * @interface ImageToUpload
 */
export interface ImageToUpload {
    /**
     *
     * @type {ImageUploadInfoType}
     * @memberof ImageToUpload
     */
    images?: ImageUploadInfoType;
    /**
     *
     * @type {Links}
     * @memberof ImageToUpload
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ImageToUpload
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ImageToUpload interface.
 */
export declare function instanceOfImageToUpload(value: object): boolean;
export declare function ImageToUploadFromJSON(json: any): ImageToUpload;
export declare function ImageToUploadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageToUpload;
export declare function ImageToUploadToJSON(value?: ImageToUpload | null): any;
