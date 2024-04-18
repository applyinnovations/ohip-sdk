/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * ID that uniquely determines file attachment
 * @export
 * @interface FileAttachmentType
 */
export interface FileAttachmentType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof FileAttachmentType
     */
    attachmentId?: UniqueIDType;
    /**
     * File attachment in base64 binary format
     * @type {string}
     * @memberof FileAttachmentType
     */
    fileAttachment?: string;
    /**
     * Name of the attachment
     * @type {string}
     * @memberof FileAttachmentType
     */
    fileName?: string;
}

/**
 * Check if a given object implements the FileAttachmentType interface.
 */
export function instanceOfFileAttachmentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FileAttachmentTypeFromJSON(json: any): FileAttachmentType {
    return FileAttachmentTypeFromJSONTyped(json, false);
}

export function FileAttachmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileAttachmentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachmentId': !exists(json, 'attachmentId') ? undefined : UniqueIDTypeFromJSON(json['attachmentId']),
        'fileAttachment': !exists(json, 'fileAttachment') ? undefined : json['fileAttachment'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
    };
}

export function FileAttachmentTypeToJSON(value?: FileAttachmentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachmentId': UniqueIDTypeToJSON(value.attachmentId),
        'fileAttachment': value.fileAttachment,
        'fileName': value.fileName,
    };
}
