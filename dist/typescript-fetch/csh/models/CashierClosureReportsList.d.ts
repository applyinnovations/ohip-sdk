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
import type { CashierReportType } from './CashierReportType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Returns whether a particular report is applicable or not based on payment posting type. When no postings for a particular payment type is found, that report is marked as not applicable in the closure report.
 * @export
 * @interface CashierClosureReportsList
 */
export interface CashierClosureReportsList {
    /**
     *
     * @type {Array<CashierReportType>}
     * @memberof CashierClosureReportsList
     */
    cashierReportList?: Array<CashierReportType>;
    /**
     *
     * @type {Links}
     * @memberof CashierClosureReportsList
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CashierClosureReportsList
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CashierClosureReportsList interface.
 */
export declare function instanceOfCashierClosureReportsList(value: object): boolean;
export declare function CashierClosureReportsListFromJSON(json: any): CashierClosureReportsList;
export declare function CashierClosureReportsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierClosureReportsList;
export declare function CashierClosureReportsListToJSON(value?: CashierClosureReportsList | null): any;
