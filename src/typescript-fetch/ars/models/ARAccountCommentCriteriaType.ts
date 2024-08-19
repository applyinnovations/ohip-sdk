/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * The comments on the AR Account.
 * @export
 * @interface ARAccountCommentCriteriaType
 */
export interface ARAccountCommentCriteriaType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ARAccountCommentCriteriaType
     */
    accountId?: UniqueIDType;
    /**
     * Account Number for the AR Account.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    accountNo?: string;
    /**
     * 
     * @type {CommentType}
     * @memberof ARAccountCommentCriteriaType
     */
    comment?: CommentType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    creatorId?: string;
    /**
     * The resort where the AR Account exists.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    id?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    lastModifyDateTime?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof ARAccountCommentCriteriaType
     */
    profileId?: ProfileId;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    purgeDate?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ARAccountCommentCriteriaType
     */
    type?: string;
}

/**
 * Check if a given object implements the ARAccountCommentCriteriaType interface.
 */
export function instanceOfARAccountCommentCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARAccountCommentCriteriaTypeFromJSON(json: any): ARAccountCommentCriteriaType {
    return ARAccountCommentCriteriaTypeFromJSONTyped(json, false);
}

export function ARAccountCommentCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountCommentCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : UniqueIDTypeFromJSON(json['accountId']),
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'comment': !exists(json, 'comment') ? undefined : CommentTypeFromJSON(json['comment']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ARAccountCommentCriteriaTypeToJSON(value?: ARAccountCommentCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': UniqueIDTypeToJSON(value.accountId),
        'accountNo': value.accountNo,
        'comment': CommentTypeToJSON(value.comment),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'hotelId': value.hotelId,
        'id': value.id,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'profileId': ProfileIdToJSON(value.profileId),
        'purgeDate': value.purgeDate,
        'type': value.type,
    };
}

