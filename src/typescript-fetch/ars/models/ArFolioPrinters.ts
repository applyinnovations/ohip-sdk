/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FolioPrintersType } from './FolioPrintersType';
import {
    FolioPrintersTypeFromJSON,
    FolioPrintersTypeFromJSONTyped,
    FolioPrintersTypeToJSON,
} from './FolioPrintersType';
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
 * Response to the request to fetch the Folio Printers applicable for a Folio, based on the
 * @export
 * @interface ArFolioPrinters
 */
export interface ArFolioPrinters {
    /**
     * 
     * @type {Links}
     * @memberof ArFolioPrinters
     */
    links?: Links;
    /**
     * 
     * @type {FolioPrintersType}
     * @memberof ArFolioPrinters
     */
    printers?: FolioPrintersType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ArFolioPrinters
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ArFolioPrinters interface.
 */
export function instanceOfArFolioPrinters(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArFolioPrintersFromJSON(json: any): ArFolioPrinters {
    return ArFolioPrintersFromJSONTyped(json, false);
}

export function ArFolioPrintersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArFolioPrinters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'printers': !exists(json, 'printers') ? undefined : FolioPrintersTypeFromJSON(json['printers']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ArFolioPrintersToJSON(value?: ArFolioPrinters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'printers': FolioPrintersTypeToJSON(value.printers),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
