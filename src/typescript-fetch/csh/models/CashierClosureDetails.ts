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
import type { CashierClosureType } from './CashierClosureType';
import {
    CashierClosureTypeFromJSON,
    CashierClosureTypeFromJSONTyped,
    CashierClosureTypeToJSON,
} from './CashierClosureType';
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
 * Response for the fetch Cashier Closure information.
 * @export
 * @interface CashierClosureDetails
 */
export interface CashierClosureDetails {
    /**
     * 
     * @type {CashierClosureType}
     * @memberof CashierClosureDetails
     */
    cashierClosureInfo?: CashierClosureType;
    /**
     * 
     * @type {Links}
     * @memberof CashierClosureDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CashierClosureDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CashierClosureDetails interface.
 */
export function instanceOfCashierClosureDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashierClosureDetailsFromJSON(json: any): CashierClosureDetails {
    return CashierClosureDetailsFromJSONTyped(json, false);
}

export function CashierClosureDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierClosureDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierClosureInfo': !exists(json, 'cashierClosureInfo') ? undefined : CashierClosureTypeFromJSON(json['cashierClosureInfo']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CashierClosureDetailsToJSON(value?: CashierClosureDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierClosureInfo': CashierClosureTypeToJSON(value.cashierClosureInfo),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
