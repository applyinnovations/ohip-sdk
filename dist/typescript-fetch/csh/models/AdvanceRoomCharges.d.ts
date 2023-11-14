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
import type { AdvanceRoomChargesCriteriaType } from './AdvanceRoomChargesCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to post the Room Charges for a reservation in advance. This request posts the Room Charges for a reservation for tonight or for many nights starting from the last posted night. This can also be used to verify if the reservation has already been charged for the full stay. Setting the Verify flag will return details regarding the last Room Charge posted date and if there are any available dates for which the room charges can be posted in advance. Room Charges cannot be posted for dates prior to the business date of the resort. To make the actual posting, the verification flag should be false.
 * @export
 * @interface AdvanceRoomCharges
 */
export interface AdvanceRoomCharges {
    /**
     *
     * @type {AdvanceRoomChargesCriteriaType}
     * @memberof AdvanceRoomCharges
     */
    criteria?: AdvanceRoomChargesCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof AdvanceRoomCharges
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof AdvanceRoomCharges
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AdvanceRoomCharges interface.
 */
export declare function instanceOfAdvanceRoomCharges(value: object): boolean;
export declare function AdvanceRoomChargesFromJSON(json: any): AdvanceRoomCharges;
export declare function AdvanceRoomChargesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvanceRoomCharges;
export declare function AdvanceRoomChargesToJSON(value?: AdvanceRoomCharges | null): any;