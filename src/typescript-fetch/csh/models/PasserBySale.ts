/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FolioWindowType } from './FolioWindowType';
import {
    FolioWindowTypeFromJSON,
    FolioWindowTypeFromJSONTyped,
    FolioWindowTypeToJSON,
} from './FolioWindowType';
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
 * Details of the folio created.
 * @export
 * @interface PasserBySale
 */
export interface PasserBySale {
    /**
     * 
     * @type {Array<FolioWindowType>}
     * @memberof PasserBySale
     */
    folioWindowDetails?: Array<FolioWindowType>;
    /**
     * 
     * @type {Links}
     * @memberof PasserBySale
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof PasserBySale
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the PasserBySale interface.
 */
export function instanceOfPasserBySale(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PasserBySaleFromJSON(json: any): PasserBySale {
    return PasserBySaleFromJSONTyped(json, false);
}

export function PasserBySaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasserBySale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioWindowDetails': !exists(json, 'folioWindowDetails') ? undefined : ((json['folioWindowDetails'] as Array<any>).map(FolioWindowTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function PasserBySaleToJSON(value?: PasserBySale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioWindowDetails': value.folioWindowDetails === undefined ? undefined : ((value.folioWindowDetails as Array<any>).map(FolioWindowTypeToJSON)),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
