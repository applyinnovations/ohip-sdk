/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARProfileYearViewInfoType } from './ARProfileYearViewInfoType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response to the request to fetch the total Year View information for a Profile.
 * @export
 * @interface ProfileYearView
 */
export interface ProfileYearView {
    /**
     *
     * @type {ARProfileYearViewInfoType}
     * @memberof ProfileYearView
     */
    aRProfileYearView?: ARProfileYearViewInfoType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ProfileYearView
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ProfileYearView
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ProfileYearView interface.
 */
export declare function instanceOfProfileYearView(value: object): boolean;
export declare function ProfileYearViewFromJSON(json: any): ProfileYearView;
export declare function ProfileYearViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileYearView;
export declare function ProfileYearViewToJSON(value?: ProfileYearView | null): any;