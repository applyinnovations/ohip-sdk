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
import type { PersonNameType } from './PersonNameType';
/**
 * Room routing is applicable on the requested consumable.
 * @export
 * @interface CheckPostBillingChargesOptionsTypeInnerRoomRouting
 */
export interface CheckPostBillingChargesOptionsTypeInnerRoomRouting {
    /**
     *
     * @type {boolean}
     * @memberof CheckPostBillingChargesOptionsTypeInnerRoomRouting
     */
    applicable?: boolean;
    /**
     *
     * @type {PersonNameType}
     * @memberof CheckPostBillingChargesOptionsTypeInnerRoomRouting
     */
    guest?: PersonNameType;
    /**
     *
     * @type {string}
     * @memberof CheckPostBillingChargesOptionsTypeInnerRoomRouting
     */
    roomId?: string;
}
/**
 * Check if a given object implements the CheckPostBillingChargesOptionsTypeInnerRoomRouting interface.
 */
export declare function instanceOfCheckPostBillingChargesOptionsTypeInnerRoomRouting(value: object): boolean;
export declare function CheckPostBillingChargesOptionsTypeInnerRoomRoutingFromJSON(json: any): CheckPostBillingChargesOptionsTypeInnerRoomRouting;
export declare function CheckPostBillingChargesOptionsTypeInnerRoomRoutingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckPostBillingChargesOptionsTypeInnerRoomRouting;
export declare function CheckPostBillingChargesOptionsTypeInnerRoomRoutingToJSON(value?: CheckPostBillingChargesOptionsTypeInnerRoomRouting | null): any;