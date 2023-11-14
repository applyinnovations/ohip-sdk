/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BillingInstructionsType } from './BillingInstructionsType';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
/**
 * The type contains routing instructions for the profile.
 * @export
 * @interface ProfileRoutingInstructionsType
 */
export interface ProfileRoutingInstructionsType {
    /**
     * A flag which determines whether the instructions has to be automatically populated for this profile or not.
     * @type {boolean}
     * @memberof ProfileRoutingInstructionsType
     */
    autoPopulateRouting?: boolean;
    /**
     *
     * @type {BillingInstructionsType}
     * @memberof ProfileRoutingInstructionsType
     */
    billingInstructions?: BillingInstructionsType;
    /**
     *
     * @type {TrxCodesInfoType}
     * @memberof ProfileRoutingInstructionsType
     */
    transactionCodes?: TrxCodesInfoType;
}
/**
 * Check if a given object implements the ProfileRoutingInstructionsType interface.
 */
export declare function instanceOfProfileRoutingInstructionsType(value: object): boolean;
export declare function ProfileRoutingInstructionsTypeFromJSON(json: any): ProfileRoutingInstructionsType;
export declare function ProfileRoutingInstructionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileRoutingInstructionsType;
export declare function ProfileRoutingInstructionsTypeToJSON(value?: ProfileRoutingInstructionsType | null): any;