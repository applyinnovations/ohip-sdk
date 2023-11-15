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
import type { CommentType } from './CommentType';
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
     * A reference to the type of object defined by the UniqueID elementSpace.
     * @type {string}
     * @memberof CommentInfoType
     */
    type?: string;
}
/**
 * Check if a given object implements the CommentInfoType interface.
 */
export declare function instanceOfCommentInfoType(value: object): boolean;
export declare function CommentInfoTypeFromJSON(json: any): CommentInfoType;
export declare function CommentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentInfoType;
export declare function CommentInfoTypeToJSON(value?: CommentInfoType | null): any;
