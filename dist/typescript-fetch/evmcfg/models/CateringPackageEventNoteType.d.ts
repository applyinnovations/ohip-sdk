/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Type used for managing Event Notes associated with a particular Catering Package Event.
 * @export
 * @interface CateringPackageEventNoteType
 */
export interface CateringPackageEventNoteType {
    /**
     * Comment associated the Catering Package Event Note.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    comment?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    creatorId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CateringPackageEventNoteType
     */
    id?: UniqueIDType;
    /**
     * Indiciates if this is Internal.
     * @type {boolean}
     * @memberof CateringPackageEventNoteType
     */
    internal?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    lastModifyDateTime?: string;
    /**
     * Note Code/Type of the Catering Package Event Note.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    noteCode?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    purgeDate?: string;
    /**
     * Title of the Catering Package Event Note.
     * @type {string}
     * @memberof CateringPackageEventNoteType
     */
    title?: string;
}
/**
 * Check if a given object implements the CateringPackageEventNoteType interface.
 */
export declare function instanceOfCateringPackageEventNoteType(value: object): boolean;
export declare function CateringPackageEventNoteTypeFromJSON(json: any): CateringPackageEventNoteType;
export declare function CateringPackageEventNoteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackageEventNoteType;
export declare function CateringPackageEventNoteTypeToJSON(value?: CateringPackageEventNoteType | null): any;
