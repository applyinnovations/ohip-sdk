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
import type { CheckDetailsType } from './CheckDetailsType';
import type { Links } from './Links';
import type { ReservationId } from './ReservationId';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostGuestCheckDetailsRequest
 */
export interface PostGuestCheckDetailsRequest {
    /**
     *
     * @type {CheckDetailsType}
     * @memberof PostGuestCheckDetailsRequest
     */
    checkDetails?: CheckDetailsType;
    /**
     *
     * @type {Links}
     * @memberof PostGuestCheckDetailsRequest
     */
    links?: Links;
    /**
     *
     * @type {ReservationId}
     * @memberof PostGuestCheckDetailsRequest
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {WarningsType}
     * @memberof PostGuestCheckDetailsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostGuestCheckDetailsRequest interface.
 */
export declare function instanceOfPostGuestCheckDetailsRequest(value: object): boolean;
export declare function PostGuestCheckDetailsRequestFromJSON(json: any): PostGuestCheckDetailsRequest;
export declare function PostGuestCheckDetailsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostGuestCheckDetailsRequest;
export declare function PostGuestCheckDetailsRequestToJSON(value?: PostGuestCheckDetailsRequest | null): any;
