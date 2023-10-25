/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

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
export function instanceOfCateringPackageResourceNoteType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringPackageResourceNoteTypeFromJSON(json: any): CateringPackageResourceNoteType {
    return CateringPackageResourceNoteTypeFromJSONTyped(json, false);
}

export function CateringPackageResourceNoteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackageResourceNoteType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'id': !exists(json, 'id') ? undefined : UniqueIDTypeFromJSON(json['id']),
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function CateringPackageResourceNoteTypeToJSON(value?: CateringPackageResourceNoteType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': value.comment,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'id': UniqueIDTypeToJSON(value.id),
        'internal': value.internal,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0,10)),
        'title': value.title,
    };
}

