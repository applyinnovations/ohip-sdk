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
import type { CashierShiftDropLocationsType } from './CashierShiftDropLocationsType';
import {
    CashierShiftDropLocationsTypeFromJSON,
    CashierShiftDropLocationsTypeFromJSONTyped,
    CashierShiftDropLocationsTypeToJSON,
} from './CashierShiftDropLocationsType';
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
 * Request object for creating Cashier Shift Drop Locations.
 * @export
 * @interface CashierShiftDropLocationsCriteria
 */
export interface CashierShiftDropLocationsCriteria {
    /**
     * 
     * @type {CashierShiftDropLocationsType}
     * @memberof CashierShiftDropLocationsCriteria
     */
    cashierShiftDropLocations?: CashierShiftDropLocationsType;
    /**
     * 
     * @type {Links}
     * @memberof CashierShiftDropLocationsCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CashierShiftDropLocationsCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CashierShiftDropLocationsCriteria interface.
 */
export function instanceOfCashierShiftDropLocationsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashierShiftDropLocationsCriteriaFromJSON(json: any): CashierShiftDropLocationsCriteria {
    return CashierShiftDropLocationsCriteriaFromJSONTyped(json, false);
}

export function CashierShiftDropLocationsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierShiftDropLocationsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierShiftDropLocations': !exists(json, 'cashierShiftDropLocations') ? undefined : CashierShiftDropLocationsTypeFromJSON(json['cashierShiftDropLocations']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CashierShiftDropLocationsCriteriaToJSON(value?: CashierShiftDropLocationsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierShiftDropLocations': CashierShiftDropLocationsTypeToJSON(value.cashierShiftDropLocations),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
