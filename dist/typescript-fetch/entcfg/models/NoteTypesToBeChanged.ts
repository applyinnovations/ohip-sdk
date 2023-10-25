/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { NoteTypeType } from './NoteTypeType';
import {
    NoteTypeTypeFromJSON,
    NoteTypeTypeFromJSONTyped,
    NoteTypeTypeToJSON,
} from './NoteTypeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing existing Note Types.
 * @export
 * @interface NoteTypesToBeChanged
 */
export interface NoteTypesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof NoteTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Note Types Collection element.
     * @type {Array<NoteTypeType>}
     * @memberof NoteTypesToBeChanged
     */
    noteTypes?: Array<NoteTypeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof NoteTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the NoteTypesToBeChanged interface.
 */
export function instanceOfNoteTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NoteTypesToBeChangedFromJSON(json: any): NoteTypesToBeChanged {
    return NoteTypesToBeChangedFromJSONTyped(json, false);
}

export function NoteTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'noteTypes': !exists(json, 'noteTypes') ? undefined : ((json['noteTypes'] as Array<any>).map(NoteTypeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function NoteTypesToBeChangedToJSON(value?: NoteTypesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'noteTypes': value.noteTypes === undefined ? undefined : ((value.noteTypes as Array<any>).map(NoteTypeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

