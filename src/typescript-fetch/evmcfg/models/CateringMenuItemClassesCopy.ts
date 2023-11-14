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
import type { CopyMenuItemClassesType } from './CopyMenuItemClassesType';
import {
    CopyMenuItemClassesTypeFromJSON,
    CopyMenuItemClassesTypeFromJSONTyped,
    CopyMenuItemClassesTypeToJSON,
} from './CopyMenuItemClassesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for Copying Menu Item Classes.
 * @export
 * @interface CateringMenuItemClassesCopy
 */
export interface CateringMenuItemClassesCopy {
    /**
     * 
     * @type {CopyMenuItemClassesType}
     * @memberof CateringMenuItemClassesCopy
     */
    copyMenuItemClasses?: CopyMenuItemClassesType;
    /**
     * 
     * @type {Links}
     * @memberof CateringMenuItemClassesCopy
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CateringMenuItemClassesCopy
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CateringMenuItemClassesCopy interface.
 */
export function instanceOfCateringMenuItemClassesCopy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuItemClassesCopyFromJSON(json: any): CateringMenuItemClassesCopy {
    return CateringMenuItemClassesCopyFromJSONTyped(json, false);
}

export function CateringMenuItemClassesCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuItemClassesCopy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyMenuItemClasses': !exists(json, 'copyMenuItemClasses') ? undefined : CopyMenuItemClassesTypeFromJSON(json['copyMenuItemClasses']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CateringMenuItemClassesCopyToJSON(value?: CateringMenuItemClassesCopy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyMenuItemClasses': CopyMenuItemClassesTypeToJSON(value.copyMenuItemClasses),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
