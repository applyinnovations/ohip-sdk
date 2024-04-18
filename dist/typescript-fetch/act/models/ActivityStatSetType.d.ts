/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityStatType } from './ActivityStatType';
/**
 * Base statistic set holder which defines the span of the statistical data.
 * @export
 * @interface ActivityStatSetType
 */
export interface ActivityStatSetType {
    /**
     *
     * @type {string}
     * @memberof ActivityStatSetType
     */
    end?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityStatSetType
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityStatSetType
     */
    start?: string;
    /**
     *
     * @type {Array<ActivityStatType>}
     * @memberof ActivityStatSetType
     */
    stat?: Array<ActivityStatType>;
}
/**
 * Check if a given object implements the ActivityStatSetType interface.
 */
export declare function instanceOfActivityStatSetType(value: object): boolean;
export declare function ActivityStatSetTypeFromJSON(json: any): ActivityStatSetType;
export declare function ActivityStatSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityStatSetType;
export declare function ActivityStatSetTypeToJSON(value?: ActivityStatSetType | null): any;