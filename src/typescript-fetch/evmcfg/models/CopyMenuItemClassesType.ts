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
import type { CodeListType } from './CodeListType';
import {
    CodeListTypeFromJSON,
    CodeListTypeFromJSONTyped,
    CodeListTypeToJSON,
} from './CodeListType';
import type { CopyMenuItemClassesTypeCopyInstructions } from './CopyMenuItemClassesTypeCopyInstructions';
import {
    CopyMenuItemClassesTypeCopyInstructionsFromJSON,
    CopyMenuItemClassesTypeCopyInstructionsFromJSONTyped,
    CopyMenuItemClassesTypeCopyInstructionsToJSON,
} from './CopyMenuItemClassesTypeCopyInstructions';
import type { UniqueIDListType } from './UniqueIDListType';
import {
    UniqueIDListTypeFromJSON,
    UniqueIDListTypeFromJSONTyped,
    UniqueIDListTypeToJSON,
} from './UniqueIDListType';

/**
 * 
 * @export
 * @interface CopyMenuItemClassesType
 */
export interface CopyMenuItemClassesType {
    /**
     * 
     * @type {CopyMenuItemClassesTypeCopyInstructions}
     * @memberof CopyMenuItemClassesType
     */
    copyInstructions?: CopyMenuItemClassesTypeCopyInstructions;
    /**
     * 
     * @type {UniqueIDListType}
     * @memberof CopyMenuItemClassesType
     */
    itemClasses?: UniqueIDListType;
    /**
     * Source Hotel code from where menu item classes needs to be copied
     * @type {string}
     * @memberof CopyMenuItemClassesType
     */
    sourceHotelCode?: string;
    /**
     * 
     * @type {CodeListType}
     * @memberof CopyMenuItemClassesType
     */
    targetHotelCodes?: CodeListType;
}

/**
 * Check if a given object implements the CopyMenuItemClassesType interface.
 */
export function instanceOfCopyMenuItemClassesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyMenuItemClassesTypeFromJSON(json: any): CopyMenuItemClassesType {
    return CopyMenuItemClassesTypeFromJSONTyped(json, false);
}

export function CopyMenuItemClassesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyMenuItemClassesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyInstructions': !exists(json, 'copyInstructions') ? undefined : CopyMenuItemClassesTypeCopyInstructionsFromJSON(json['copyInstructions']),
        'itemClasses': !exists(json, 'itemClasses') ? undefined : UniqueIDListTypeFromJSON(json['itemClasses']),
        'sourceHotelCode': !exists(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
        'targetHotelCodes': !exists(json, 'targetHotelCodes') ? undefined : CodeListTypeFromJSON(json['targetHotelCodes']),
    };
}

export function CopyMenuItemClassesTypeToJSON(value?: CopyMenuItemClassesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyInstructions': CopyMenuItemClassesTypeCopyInstructionsToJSON(value.copyInstructions),
        'itemClasses': UniqueIDListTypeToJSON(value.itemClasses),
        'sourceHotelCode': value.sourceHotelCode,
        'targetHotelCodes': CodeListTypeToJSON(value.targetHotelCodes),
    };
}
