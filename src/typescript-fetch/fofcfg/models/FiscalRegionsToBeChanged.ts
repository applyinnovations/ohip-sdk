/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FiscalRegionsType } from './FiscalRegionsType';
import {
    FiscalRegionsTypeFromJSON,
    FiscalRegionsTypeFromJSONTyped,
    FiscalRegionsTypeToJSON,
} from './FiscalRegionsType';
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
 * Request object for changing Fiscal Regions.
 * @export
 * @interface FiscalRegionsToBeChanged
 */
export interface FiscalRegionsToBeChanged {
    /**
     * 
     * @type {FiscalRegionsType}
     * @memberof FiscalRegionsToBeChanged
     */
    fiscalRegions?: FiscalRegionsType;
    /**
     * 
     * @type {Links}
     * @memberof FiscalRegionsToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof FiscalRegionsToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the FiscalRegionsToBeChanged interface.
 */
export function instanceOfFiscalRegionsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalRegionsToBeChangedFromJSON(json: any): FiscalRegionsToBeChanged {
    return FiscalRegionsToBeChangedFromJSONTyped(json, false);
}

export function FiscalRegionsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalRegionsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalRegions': !exists(json, 'fiscalRegions') ? undefined : FiscalRegionsTypeFromJSON(json['fiscalRegions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function FiscalRegionsToBeChangedToJSON(value?: FiscalRegionsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalRegions': FiscalRegionsTypeToJSON(value.fiscalRegions),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
