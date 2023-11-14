/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelCodeListType } from './HotelCodeListType';
import type { TraceTextsType } from './TraceTextsType';
/**
 * Copy Trace texts criteria type to copy multiple trace texts from one Hotel to another Hotel.
 * @export
 * @interface CopyTraceTextsCriteriaType
 */
export interface CopyTraceTextsCriteriaType {
    /**
     *
     * @type {HotelCodeListType}
     * @memberof CopyTraceTextsCriteriaType
     */
    targetHotels?: HotelCodeListType;
    /**
     *
     * @type {TraceTextsType}
     * @memberof CopyTraceTextsCriteriaType
     */
    traceTexts?: TraceTextsType;
}
/**
 * Check if a given object implements the CopyTraceTextsCriteriaType interface.
 */
export declare function instanceOfCopyTraceTextsCriteriaType(value: object): boolean;
export declare function CopyTraceTextsCriteriaTypeFromJSON(json: any): CopyTraceTextsCriteriaType;
export declare function CopyTraceTextsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTraceTextsCriteriaType;
export declare function CopyTraceTextsCriteriaTypeToJSON(value?: CopyTraceTextsCriteriaType | null): any;