/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import {
    CopyConfigurationCodeTypeFromJSON,
    CopyConfigurationCodeTypeFromJSONTyped,
    CopyConfigurationCodeTypeToJSON,
} from './CopyConfigurationCodeType';
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
 * 
 * @export
 * @interface CopyHousekeepingCodes
 */
export interface CopyHousekeepingCodes {
    /**
     * List of the housekeeping code(s) to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyHousekeepingCodes
     */
    housekeepingCodes?: Array<CopyConfigurationCodeType>;
    /**
     * 
     * @type {Links}
     * @memberof CopyHousekeepingCodes
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CopyHousekeepingCodes
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CopyHousekeepingCodes interface.
 */
export function instanceOfCopyHousekeepingCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyHousekeepingCodesFromJSON(json: any): CopyHousekeepingCodes {
    return CopyHousekeepingCodesFromJSONTyped(json, false);
}

export function CopyHousekeepingCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyHousekeepingCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'housekeepingCodes': !exists(json, 'housekeepingCodes') ? undefined : ((json['housekeepingCodes'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CopyHousekeepingCodesToJSON(value?: CopyHousekeepingCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'housekeepingCodes': value.housekeepingCodes === undefined ? undefined : ((value.housekeepingCodes as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
