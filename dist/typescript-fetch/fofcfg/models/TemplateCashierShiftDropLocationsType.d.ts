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
import type { TemplateCashierShiftDropLocationType } from './TemplateCashierShiftDropLocationType';
/**
 * List of Template Cashier Shift Drop Locations.
 * @export
 * @interface TemplateCashierShiftDropLocationsType
 */
export interface TemplateCashierShiftDropLocationsType extends Array<TemplateCashierShiftDropLocationType> {
}
/**
 * Check if a given object implements the TemplateCashierShiftDropLocationsType interface.
 */
export declare function instanceOfTemplateCashierShiftDropLocationsType(value: object): boolean;
export declare function TemplateCashierShiftDropLocationsTypeFromJSON(json: any): TemplateCashierShiftDropLocationsType;
export declare function TemplateCashierShiftDropLocationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCashierShiftDropLocationsType;
export declare function TemplateCashierShiftDropLocationsTypeToJSON(value?: TemplateCashierShiftDropLocationsType | null): any;