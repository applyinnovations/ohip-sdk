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
 * Type used for managing Resource Notes associated with a particular Catering Package Resource.
 * @export
 * @interface CateringPackageResourceNoteType
 */
export interface CateringPackageResourceNoteType {
    /**
     * Comment associated the Catering Package Resource Note.
     * @type {string}
     * @memberof CateringPackageResourceNoteType
     */
    comment?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof CateringPackageResourceNoteType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof CateringPackageResourceNoteType
     */
    creatorId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CateringPackageResourceNoteType
     */
    id?: UniqueIDType;
    /**
     * Indiciates if this is Internal.
     * @type {boolean}
     * @memberof CateringPackageResourceNoteType
     */
    internal?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof CateringPackageResourceNoteType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof CateringPackageResourceNoteType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof CateringPackageResourceNoteType
     */
    purgeDate?: Date;
    /**
     * Title of the Catering Package Resource Note.
     * @type {string}
     * @memberof CateringPackageResourceNoteType
     */
    title?: string;
}
/**
 * Check if a given object implements the CateringPackageResourceNoteType interface.
 */
export declare function instanceOfCateringPackageResourceNoteType(value: object): boolean;
export declare function CateringPackageResourceNoteTypeFromJSON(json: any): CateringPackageResourceNoteType;
export declare function CateringPackageResourceNoteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackageResourceNoteType;
export declare function CateringPackageResourceNoteTypeToJSON(value?: CateringPackageResourceNoteType | null): any;