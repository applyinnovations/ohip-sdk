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
import type { FiscalGuestTypeType } from './FiscalGuestTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Fiscal Guest Types.
 * @export
 * @interface FiscalGuestTypesToBeChanged
 */
export interface FiscalGuestTypesToBeChanged {
    /**
     * List of Fiscal Guest Types.
     * @type {Array<FiscalGuestTypeType>}
     * @memberof FiscalGuestTypesToBeChanged
     */
    fiscalGuestTypes?: Array<FiscalGuestTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FiscalGuestTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FiscalGuestTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FiscalGuestTypesToBeChanged interface.
 */
export declare function instanceOfFiscalGuestTypesToBeChanged(value: object): boolean;
export declare function FiscalGuestTypesToBeChangedFromJSON(json: any): FiscalGuestTypesToBeChanged;
export declare function FiscalGuestTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalGuestTypesToBeChanged;
export declare function FiscalGuestTypesToBeChangedToJSON(value?: FiscalGuestTypesToBeChanged | null): any;
