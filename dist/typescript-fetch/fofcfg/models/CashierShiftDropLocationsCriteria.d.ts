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
import type { CashierShiftDropLocationsType } from './CashierShiftDropLocationsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
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
export declare function instanceOfCashierShiftDropLocationsCriteria(value: object): boolean;
export declare function CashierShiftDropLocationsCriteriaFromJSON(json: any): CashierShiftDropLocationsCriteria;
export declare function CashierShiftDropLocationsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierShiftDropLocationsCriteria;
export declare function CashierShiftDropLocationsCriteriaToJSON(value?: CashierShiftDropLocationsCriteria | null): any;
