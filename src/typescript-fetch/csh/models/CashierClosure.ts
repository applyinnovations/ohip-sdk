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
 * Request to close cashier's shift.
 * @export
 * @interface CashierClosure
 */
export interface CashierClosure {
    /**
     * The Cashier Lock Handle to pass along with operation which required cashier to be locked.
     * @type {number}
     * @memberof CashierClosure
     */
    cashierLockHandle?: number;
    /**
     * 
     * @type {CashierClosureType}
     * @memberof CashierClosure
     */
    criteria?: CashierClosureType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof CashierClosure
     */
    hotelId?: string;
    /**
     * 
     * @type {Links}
     * @memberof CashierClosure
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CashierClosure
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CashierClosure interface.
 */
export function instanceOfCashierClosure(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashierClosureFromJSON(json: any): CashierClosure {
    return CashierClosureFromJSONTyped(json, false);
}

export function CashierClosureFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierClosure {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierLockHandle': !exists(json, 'cashierLockHandle') ? undefined : json['cashierLockHandle'],
        'criteria': !exists(json, 'criteria') ? undefined : CashierClosureTypeFromJSON(json['criteria']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CashierClosureToJSON(value?: CashierClosure | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierLockHandle': value.cashierLockHandle,
        'criteria': CashierClosureTypeToJSON(value.criteria),
        'hotelId': value.hotelId,
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
