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
import type { AlertsType } from './AlertsType';
import type { CommentInfoType } from './CommentInfoType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response with the fetched alerts, includes global alerts.
 * @export
 * @interface AlertNotices
 */
export interface AlertNotices {
    /**
     *
     * @type {AlertsType}
     * @memberof AlertNotices
     */
    alerts?: AlertsType;
    /**
     * List of Notes for the Guest related to the reservation.
     * @type {Array<CommentInfoType>}
     * @memberof AlertNotices
     */
    comments?: Array<CommentInfoType>;
    /**
     *
     * @type {Links}
     * @memberof AlertNotices
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof AlertNotices
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AlertNotices interface.
 */
export declare function instanceOfAlertNotices(value: object): boolean;
export declare function AlertNoticesFromJSON(json: any): AlertNotices;
export declare function AlertNoticesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertNotices;
export declare function AlertNoticesToJSON(value?: AlertNotices | null): any;