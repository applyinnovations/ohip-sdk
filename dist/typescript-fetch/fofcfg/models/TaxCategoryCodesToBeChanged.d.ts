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
import type { TaxCategoryCodeType } from './TaxCategoryCodeType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Tax Category Codes.
 * @export
 * @interface TaxCategoryCodesToBeChanged
 */
export interface TaxCategoryCodesToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TaxCategoryCodesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * List of Tax Category Codes.
     * @type {Array<TaxCategoryCodeType>}
     * @memberof TaxCategoryCodesToBeChanged
     */
    taxCategoryCodes?: Array<TaxCategoryCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TaxCategoryCodesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TaxCategoryCodesToBeChanged interface.
 */
export declare function instanceOfTaxCategoryCodesToBeChanged(value: object): boolean;
export declare function TaxCategoryCodesToBeChangedFromJSON(json: any): TaxCategoryCodesToBeChanged;
export declare function TaxCategoryCodesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxCategoryCodesToBeChanged;
export declare function TaxCategoryCodesToBeChangedToJSON(value?: TaxCategoryCodesToBeChanged | null): any;
