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
import type { Links } from './Links';
import type { UniqueIDType } from './UniqueIDType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface LinkReservationPackageAllowanceRequest
 */
export interface LinkReservationPackageAllowanceRequest {
    /**
     * If set to TRUE, the source reservation contributes its allowance(s) to the linked allowance pool and is able to draw from the allowances of the target reservation and/or any other source rooms linked to the target room.
     * @type {boolean}
     * @memberof LinkReservationPackageAllowanceRequest
     */
    consumeSharedAllowances?: boolean;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof LinkReservationPackageAllowanceRequest
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof LinkReservationPackageAllowanceRequest
     */
    linkFromReservationId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof LinkReservationPackageAllowanceRequest
     */
    linkToReservationId?: UniqueIDType;
    /**
     *
     * @type {Links}
     * @memberof LinkReservationPackageAllowanceRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof LinkReservationPackageAllowanceRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the LinkReservationPackageAllowanceRequest interface.
 */
export declare function instanceOfLinkReservationPackageAllowanceRequest(value: object): boolean;
export declare function LinkReservationPackageAllowanceRequestFromJSON(json: any): LinkReservationPackageAllowanceRequest;
export declare function LinkReservationPackageAllowanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkReservationPackageAllowanceRequest;
export declare function LinkReservationPackageAllowanceRequestToJSON(value?: LinkReservationPackageAllowanceRequest | null): any;
