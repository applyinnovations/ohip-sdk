/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * @type {Date}
     * @memberof CommentInfoType
     */
    purgeDate?: Date;
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
export declare function instanceOfCommentInfoType(value: object): boolean;
export declare function CommentInfoTypeFromJSON(json: any): CommentInfoType;
export declare function CommentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentInfoType;
export declare function CommentInfoTypeToJSON(value?: CommentInfoType | null): any;
