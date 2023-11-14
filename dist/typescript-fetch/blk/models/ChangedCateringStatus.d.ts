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
import type { BlockType } from './BlockType';
import type { CancellationDetailsType } from './CancellationDetailsType';
import type { CateringEventsProcessedInfoList } from './CateringEventsProcessedInfoList';
import type { CateringNextStatusListType } from './CateringNextStatusListType';
import type { CateringStatusChangeHistoryType } from './CateringStatusChangeHistoryType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for the request to change catering status. Response contains information on the block whose status was successfully changed.
 * @export
 * @interface ChangedCateringStatus
 */
export interface ChangedCateringStatus {
    /**
     *
     * @type {BlockType}
     * @memberof ChangedCateringStatus
     */
    block?: BlockType;
    /**
     *
     * @type {CancellationDetailsType}
     * @memberof ChangedCateringStatus
     */
    cancellationDetails?: CancellationDetailsType;
    /**
     *
     * @type {CateringEventsProcessedInfoList}
     * @memberof ChangedCateringStatus
     */
    cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
    /**
     *
     * @type {CateringNextStatusListType}
     * @memberof ChangedCateringStatus
     */
    cateringNextStatusList?: CateringNextStatusListType;
    /**
     *
     * @type {CateringStatusChangeHistoryType}
     * @memberof ChangedCateringStatus
     */
    cateringStatusChangeHistory?: CateringStatusChangeHistoryType;
    /**
     *
     * @type {Links}
     * @memberof ChangedCateringStatus
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangedCateringStatus
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangedCateringStatus interface.
 */
export declare function instanceOfChangedCateringStatus(value: object): boolean;
export declare function ChangedCateringStatusFromJSON(json: any): ChangedCateringStatus;
export declare function ChangedCateringStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangedCateringStatus;
export declare function ChangedCateringStatusToJSON(value?: ChangedCateringStatus | null): any;