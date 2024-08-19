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
import type { InstanceLink } from './InstanceLink';
import type { TaxOfficeType } from './TaxOfficeType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Tax Offices.
 * @export
 * @interface TaxOfficesToBeChanged
 */
export interface TaxOfficesToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TaxOfficesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * List of Tax Offices.
     * @type {Array<TaxOfficeType>}
     * @memberof TaxOfficesToBeChanged
     */
    taxOffices?: Array<TaxOfficeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TaxOfficesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TaxOfficesToBeChanged interface.
 */
export declare function instanceOfTaxOfficesToBeChanged(value: object): boolean;
export declare function TaxOfficesToBeChangedFromJSON(json: any): TaxOfficesToBeChanged;
export declare function TaxOfficesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxOfficesToBeChanged;
export declare function TaxOfficesToBeChangedToJSON(value?: TaxOfficesToBeChanged | null): any;
