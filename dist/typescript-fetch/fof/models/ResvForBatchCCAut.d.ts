/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { ReservationForCCAuthType } from './ReservationForCCAuthType';
import type { WarningType } from './WarningType';
/**
 * Response which contains a listing of reservations, and associated payment methods, that require credit card authorization.
 * @export
 * @interface ResvForBatchCCAut
 */
export interface ResvForBatchCCAut {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ResvForBatchCCAut
     */
    hotelId?: string;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ResvForBatchCCAut
     */
    links?: Array<InstanceLink>;
    /**
     * List of reservations with their payment methods.
     * @type {Array<ReservationForCCAuthType>}
     * @memberof ResvForBatchCCAut
     */
    reservations?: Array<ReservationForCCAuthType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ResvForBatchCCAut
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ResvForBatchCCAut interface.
 */
export declare function instanceOfResvForBatchCCAut(value: object): boolean;
export declare function ResvForBatchCCAutFromJSON(json: any): ResvForBatchCCAut;
export declare function ResvForBatchCCAutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvForBatchCCAut;
export declare function ResvForBatchCCAutToJSON(value?: ResvForBatchCCAut | null): any;
