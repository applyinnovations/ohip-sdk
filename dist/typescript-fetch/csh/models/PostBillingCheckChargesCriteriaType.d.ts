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
import type { PostBillingCheckChargesItemsCriteriaType } from './PostBillingCheckChargesItemsCriteriaType';
import type { ReservationId } from './ReservationId';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details of the check with line item charges to post to a guest folio.
 * @export
 * @interface PostBillingCheckChargesCriteriaType
 */
export interface PostBillingCheckChargesCriteriaType {
    /**
     * Cashier Id of the Cashier.
     * @type {number}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    cashierId?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    checkId?: UniqueIDType;
    /**
     * Indicates the check number.
     * @type {string}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    checkNumber?: string;
    /**
     * Hotel code.
     * @type {string}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {PostBillingCheckChargesItemsCriteriaType}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    items?: PostBillingCheckChargesItemsCriteriaType;
    /**
     *
     * @type {ReservationId}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * The date against which charges are posted.
     * @type {Date}
     * @memberof PostBillingCheckChargesCriteriaType
     */
    revenueDate?: Date;
}
/**
 * Check if a given object implements the PostBillingCheckChargesCriteriaType interface.
 */
export declare function instanceOfPostBillingCheckChargesCriteriaType(value: object): boolean;
export declare function PostBillingCheckChargesCriteriaTypeFromJSON(json: any): PostBillingCheckChargesCriteriaType;
export declare function PostBillingCheckChargesCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBillingCheckChargesCriteriaType;
export declare function PostBillingCheckChargesCriteriaTypeToJSON(value?: PostBillingCheckChargesCriteriaType | null): any;
