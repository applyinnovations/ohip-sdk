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
import type { CodeListType } from './CodeListType';
import type { NameValueDataTypeType } from './NameValueDataTypeType';
import type { NameValueOriginType } from './NameValueOriginType';
/**
 * Contains name value pair.
 * @export
 * @interface NameValueType
 */
export interface NameValueType {
    /**
     *
     * @type {NameValueDataTypeType}
     * @memberof NameValueType
     */
    dataType?: NameValueDataTypeType;
    /**
     * Contains format string for values.
     * @type {string}
     * @memberof NameValueType
     */
    formatString?: string;
    /**
     * Contains unique key which represents for record field.
     * @type {string}
     * @memberof NameValueType
     */
    name?: string;
    /**
     *
     * @type {NameValueOriginType}
     * @memberof NameValueType
     */
    origin?: NameValueOriginType;
    /**
     *
     * @type {CodeListType}
     * @memberof NameValueType
     */
    usageInstruction?: CodeListType;
    /**
     * Contains value for the record/column.
     * @type {string}
     * @memberof NameValueType
     */
    value?: string;
}
/**
 * Check if a given object implements the NameValueType interface.
 */
export declare function instanceOfNameValueType(value: object): boolean;
export declare function NameValueTypeFromJSON(json: any): NameValueType;
export declare function NameValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameValueType;
export declare function NameValueTypeToJSON(value?: NameValueType | null): any;
