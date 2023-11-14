/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FormattedTextTextType } from './FormattedTextTextType';
import {
    FormattedTextTextTypeFromJSON,
    FormattedTextTextTypeFromJSONTyped,
    FormattedTextTextTypeToJSON,
} from './FormattedTextTextType';

/**
 * An indication of a new paragraph for a sub-section of a formatted text message.
 * @export
 * @interface CommentType
 */
export interface CommentType {
    /**
     * Indicates at which date an action described in the comment must be taken.
     * @type {Date}
     * @memberof CommentType
     */
    actionDate?: Date;
    /**
     * Specifies type of action described in the comments.
     * @type {string}
     * @memberof CommentType
     */
    actionType?: string;
    /**
     * Specifies Comment's Title.
     * @type {string}
     * @memberof CommentType
     */
    commentTitle?: string;
    /**
     * When true, the comment may be confidential.
     * @type {boolean}
     * @memberof CommentType
     */
    confidential?: boolean;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof CommentType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof CommentType
     */
    creatorId?: string;
    /**
     * If specified comment belongs to the Hotel, otherwise it is a global comment.
     * @type {string}
     * @memberof CommentType
     */
    hotelId?: string;
    /**
     * When true, the comment may not be shown to the consumer. When false, the comment may be shown to the consumer.
     * @type {boolean}
     * @memberof CommentType
     */
    internal?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof CommentType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof CommentType
     */
    lastModifyDateTime?: string;
    /**
     * Notification Location associated with the Note.
     * @type {string}
     * @memberof CommentType
     */
    notificationLocation?: string;
    /**
     * When true, the note internal could be modified.
     * @type {boolean}
     * @memberof CommentType
     */
    overrideInternal?: boolean;
    /**
     * When true, the note title will be populated from the note type description and couldn't be modified.
     * @type {boolean}
     * @memberof CommentType
     */
    protectDescription?: boolean;
    /**
     * 
     * @type {FormattedTextTextType}
     * @memberof CommentType
     */
    text?: FormattedTextTextType;
    /**
     * Specifies type of the comment.
     * @type {string}
     * @memberof CommentType
     */
    type?: string;
    /**
     * Comment type Description.
     * @type {string}
     * @memberof CommentType
     */
    typeDescription?: string;
}

/**
 * Check if a given object implements the CommentType interface.
 */
export function instanceOfCommentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentTypeFromJSON(json: any): CommentType {
    return CommentTypeFromJSONTyped(json, false);
}

export function CommentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionDate': !exists(json, 'actionDate') ? undefined : (new Date(json['actionDate'])),
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'commentTitle': !exists(json, 'commentTitle') ? undefined : json['commentTitle'],
        'confidential': !exists(json, 'confidential') ? undefined : json['confidential'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'notificationLocation': !exists(json, 'notificationLocation') ? undefined : json['notificationLocation'],
        'overrideInternal': !exists(json, 'overrideInternal') ? undefined : json['overrideInternal'],
        'protectDescription': !exists(json, 'protectDescription') ? undefined : json['protectDescription'],
        'text': !exists(json, 'text') ? undefined : FormattedTextTextTypeFromJSON(json['text']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
    };
}

export function CommentTypeToJSON(value?: CommentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionDate': value.actionDate === undefined ? undefined : (value.actionDate.toISOString().substring(0,10)),
        'actionType': value.actionType,
        'commentTitle': value.commentTitle,
        'confidential': value.confidential,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'hotelId': value.hotelId,
        'internal': value.internal,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'notificationLocation': value.notificationLocation,
        'overrideInternal': value.overrideInternal,
        'protectDescription': value.protectDescription,
        'text': FormattedTextTextTypeToJSON(value.text),
        'type': value.type,
        'typeDescription': value.typeDescription,
    };
}
