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
import type { CustomChargeExemptionConfigType } from './CustomChargeExemptionConfigType';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface CustomChargeExemptionsConfigToBeCreated
 */
export interface CustomChargeExemptionsConfigToBeCreated {
    /**
     * New one or more Custom Charge Exemptions to be created.
     * @type {Array<Array<CustomChargeExemptionConfigType>>}
     * @memberof CustomChargeExemptionsConfigToBeCreated
     */
    customChargeExemptionsConfig?: Array<Array<CustomChargeExemptionConfigType>>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CustomChargeExemptionsConfigToBeCreated
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CustomChargeExemptionsConfigToBeCreated interface.
 */
export declare function instanceOfCustomChargeExemptionsConfigToBeCreated(value: object): boolean;
export declare function CustomChargeExemptionsConfigToBeCreatedFromJSON(json: any): CustomChargeExemptionsConfigToBeCreated;
export declare function CustomChargeExemptionsConfigToBeCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeExemptionsConfigToBeCreated;
export declare function CustomChargeExemptionsConfigToBeCreatedToJSON(value?: CustomChargeExemptionsConfigToBeCreated | null): any;