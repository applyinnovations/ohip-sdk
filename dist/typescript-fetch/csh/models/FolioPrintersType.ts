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
import type { FolioPrinterType } from './FolioPrinterType';
import {
    FolioPrinterTypeFromJSON,
    FolioPrinterTypeFromJSONTyped,
    FolioPrinterTypeToJSON,
} from './FolioPrinterType';

/**
 * List of Folio Printers.
 * @export
 * @interface FolioPrintersType
 */
export interface FolioPrintersType {
    /**
     * Name of the Folio Type.
     * @type {string}
     * @memberof FolioPrintersType
     */
    folioTypeName?: string;
    /**
     * Folio Printer Information.
     * @type {Array<FolioPrinterType>}
     * @memberof FolioPrintersType
     */
    printer?: Array<FolioPrinterType>;
}

/**
 * Check if a given object implements the FolioPrintersType interface.
 */
export function instanceOfFolioPrintersType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioPrintersTypeFromJSON(json: any): FolioPrintersType {
    return FolioPrintersTypeFromJSONTyped(json, false);
}

export function FolioPrintersTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioPrintersType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioTypeName': !exists(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'printer': !exists(json, 'printer') ? undefined : ((json['printer'] as Array<any>).map(FolioPrinterTypeFromJSON)),
    };
}

export function FolioPrintersTypeToJSON(value?: FolioPrintersType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioTypeName': value.folioTypeName,
        'printer': value.printer === undefined ? undefined : ((value.printer as Array<any>).map(FolioPrinterTypeToJSON)),
    };
}

