/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FormattedTextTextType } from './FormattedTextTextType';
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
     * An image for this paragraph.
     * @type {string}
     * @memberof CommentType
     */
    image?: string;
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
     * When true, the comment internal could be modified.
     * @type {boolean}
     * @memberof CommentType
     */
    overrideInternal?: boolean;
    /**
     * When true, the comment title will be populated from the comment type description and couldn't be modified.
     * @type {boolean}
     * @memberof CommentType
     */
    protectDescription?: boolean;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof CommentType
     */
    purgeDate?: Date;
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
    /**
     * A URL for this paragraph.
     * @type {string}
     * @memberof CommentType
     */
    url?: string;
}
/**
 * Check if a given object implements the CommentType interface.
 */
export declare function instanceOfCommentType(value: object): boolean;
export declare function CommentTypeFromJSON(json: any): CommentType;
export declare function CommentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentType;
export declare function CommentTypeToJSON(value?: CommentType | null): any;
