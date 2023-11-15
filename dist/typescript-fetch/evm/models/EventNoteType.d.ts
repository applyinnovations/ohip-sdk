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
import type { UniqueIDType } from './UniqueIDType';
/**
 * Pertain event's comment information.
 * @export
 * @interface EventNoteType
 */
export interface EventNoteType {
    /**
     * Pertain comment text.
     * @type {string}
     * @memberof EventNoteType
     */
    comment?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof EventNoteType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof EventNoteType
     */
    creatorId?: string;
    /**
     * Indicates if comment are internal use only.
     * @type {boolean}
     * @memberof EventNoteType
     */
    internal?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof EventNoteType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof EventNoteType
     */
    lastModifyDateTime?: string;
    /**
     * Note code.
     * @type {string}
     * @memberof EventNoteType
     */
    noteCode?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof EventNoteType
     */
    noteId?: UniqueIDType;
    /**
     * Pertain comment tile.
     * @type {string}
     * @memberof EventNoteType
     */
    noteTitle?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof EventNoteType
     */
    purgeDate?: string;
    /**
     * Pertain display sequence.
     * @type {number}
     * @memberof EventNoteType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the EventNoteType interface.
 */
export declare function instanceOfEventNoteType(value: object): boolean;
export declare function EventNoteTypeFromJSON(json: any): EventNoteType;
export declare function EventNoteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventNoteType;
export declare function EventNoteTypeToJSON(value?: EventNoteType | null): any;
