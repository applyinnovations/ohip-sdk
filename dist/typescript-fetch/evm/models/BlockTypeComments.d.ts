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
import type { CommentInfoType } from './CommentInfoType';
/**
 * List of notes for the Block.
 * @export
 * @interface BlockTypeComments
 */
export interface BlockTypeComments {
    /**
     *
     * @type {Array<CommentInfoType>}
     * @memberof BlockTypeComments
     */
    commentInfo?: Array<CommentInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof BlockTypeComments
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof BlockTypeComments
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof BlockTypeComments
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the BlockTypeComments interface.
 */
export declare function instanceOfBlockTypeComments(value: object): boolean;
export declare function BlockTypeCommentsFromJSON(json: any): BlockTypeComments;
export declare function BlockTypeCommentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockTypeComments;
export declare function BlockTypeCommentsToJSON(value?: BlockTypeComments | null): any;
