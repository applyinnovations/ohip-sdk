/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * Contains report id, batch id (for check payments) or export file (for eft payments)
 * @export
 * @interface CommissionPaymentReportType
 */
export interface CommissionPaymentReportType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof CommissionPaymentReportType
     */
    batchId?: UniqueIDType;
    /**
     * If payment method is EFT, batch name of the payments.
     * @type {string}
     * @memberof CommissionPaymentReportType
     */
    batchName?: string;
    /**
     * If payment method is EFT, Export BLOB file from database in base64 binary format.
     * @type {string}
     * @memberof CommissionPaymentReportType
     */
    exportBlobFile?: string;
    /**
     * If payment method is EFT, file location of the file generated.
     * @type {string}
     * @memberof CommissionPaymentReportType
     */
    exportFile?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CommissionPaymentReportType
     */
    reportId?: UniqueIDType;
}
/**
 * Check if a given object implements the CommissionPaymentReportType interface.
 */
export declare function instanceOfCommissionPaymentReportType(value: object): boolean;
export declare function CommissionPaymentReportTypeFromJSON(json: any): CommissionPaymentReportType;
export declare function CommissionPaymentReportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionPaymentReportType;
export declare function CommissionPaymentReportTypeToJSON(value?: CommissionPaymentReportType | null): any;