/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CashierShiftDropLocationType } from './CashierShiftDropLocationType';
import {
    CashierShiftDropLocationTypeFromJSON,
    CashierShiftDropLocationTypeFromJSONTyped,
    CashierShiftDropLocationTypeToJSON,
} from './CashierShiftDropLocationType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating Cashier Shift Drop Locations.
 * @export
 * @interface CashierShiftDropLocationsCriteria
 */
export interface CashierShiftDropLocationsCriteria {
    /**
     * List of Cashier Shift Drop Locations.
     * @type {Array<CashierShiftDropLocationType>}
     * @memberof CashierShiftDropLocationsCriteria
     */
    cashierShiftDropLocations?: Array<CashierShiftDropLocationType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CashierShiftDropLocationsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CashierShiftDropLocationsCriteria
     */
    warnings?: Array<WarningType>;
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
        
        'cashierShiftDropLocations': !exists(json, 'cashierShiftDropLocations') ? undefined : ((json['cashierShiftDropLocations'] as Array<any>).map(CashierShiftDropLocationTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
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
        
        'cashierShiftDropLocations': value.cashierShiftDropLocations === undefined ? undefined : ((value.cashierShiftDropLocations as Array<any>).map(CashierShiftDropLocationTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
