/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommentType } from './CommentType';
import {
    CommentTypeFromJSON,
    CommentTypeFromJSONTyped,
    CommentTypeToJSON,
} from './CommentType';

/**
 * Comment related to the profile/reservation.
 * @export
 * @interface CommentInfoType
 */
export interface CommentInfoType {
    /**
     * 
     * @type {CommentType}
     * @memberof CommentInfoType
     */
    comment?: CommentType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof CommentInfoType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof CommentInfoType
     */
    creatorId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof CommentInfoType
     */
    id?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof CommentInfoType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof CommentInfoType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof CommentInfoType
     */
    purgeDate?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof CommentInfoType
     */
    type?: string;
}

/**
 * Check if a given object implements the CommentInfoType interface.
 */
export function instanceOfCommentInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentInfoTypeFromJSON(json: any): CommentInfoType {
    return CommentInfoTypeFromJSONTyped(json, false);
}

export function CommentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': !exists(json, 'comment') ? undefined : CommentTypeFromJSON(json['comment']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CommentInfoTypeToJSON(value?: CommentInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': CommentTypeToJSON(value.comment),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'id': value.id,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate,
        'type': value.type,
    };
}

