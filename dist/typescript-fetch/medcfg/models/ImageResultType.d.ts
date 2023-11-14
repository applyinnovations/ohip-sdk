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
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface ImageResultType
 */
export interface ImageResultType {
    /**
     * Base64Image image content of the file.
     * @type {string}
     * @memberof ImageResultType
     */
    base64Image?: string;
    /**
     * Image file to upload.
     * @type {string}
     * @memberof ImageResultType
     */
    image?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ImageResultType
     */
    imageId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ImageResultType
     */
    imageLinkId?: UniqueIDType;
    /**
     * Image set describing path of image.
     * @type {string}
     * @memberof ImageResultType
     */
    imageSet?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ImageResultType
     */
    linkId?: UniqueIDType;
    /**
     * Mime type of the Image.
     * @type {string}
     * @memberof ImageResultType
     */
    mimeType?: string;
}
/**
 * Check if a given object implements the ImageResultType interface.
 */
export declare function instanceOfImageResultType(value: object): boolean;
export declare function ImageResultTypeFromJSON(json: any): ImageResultType;
export declare function ImageResultTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageResultType;
export declare function ImageResultTypeToJSON(value?: ImageResultType | null): any;