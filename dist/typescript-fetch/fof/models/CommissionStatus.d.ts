/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface CommissionStatus
 */
export interface CommissionStatus {
    /**
     *
     * @type {Links}
     * @memberof CommissionStatus
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CommissionStatus
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CommissionStatus interface.
 */
export declare function instanceOfCommissionStatus(value: object): boolean;
export declare function CommissionStatusFromJSON(json: any): CommissionStatus;
export declare function CommissionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionStatus;
export declare function CommissionStatusToJSON(value?: CommissionStatus | null): any;
