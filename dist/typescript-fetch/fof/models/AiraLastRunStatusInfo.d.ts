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
 * Response of last execution status for AI Room Assignment
 * @export
 * @interface AiraLastRunStatusInfo
 */
export interface AiraLastRunStatusInfo {
    /**
     * Actual run status of an AI room assignment
     * @type {string}
     * @memberof AiraLastRunStatusInfo
     */
    actionValue?: string;
    /**
     * When the AI Room Assignment starts execution
     * @type {string}
     * @memberof AiraLastRunStatusInfo
     */
    insertDate?: string;
    /**
     *
     * @type {Links}
     * @memberof AiraLastRunStatusInfo
     */
    links?: Links;
    /**
     * Date time of updated status of an executions
     * @type {string}
     * @memberof AiraLastRunStatusInfo
     */
    updateDate?: string;
    /**
     *
     * @type {WarningsType}
     * @memberof AiraLastRunStatusInfo
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AiraLastRunStatusInfo interface.
 */
export declare function instanceOfAiraLastRunStatusInfo(value: object): boolean;
export declare function AiraLastRunStatusInfoFromJSON(json: any): AiraLastRunStatusInfo;
export declare function AiraLastRunStatusInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AiraLastRunStatusInfo;
export declare function AiraLastRunStatusInfoToJSON(value?: AiraLastRunStatusInfo | null): any;
