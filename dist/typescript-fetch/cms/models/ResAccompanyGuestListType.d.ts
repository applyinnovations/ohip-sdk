/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ResAccompanyGuestInfoType } from './ResAccompanyGuestInfoType';
/**
 * Collection of accompany guests
 * @export
 * @interface ResAccompanyGuestListType
 */
export interface ResAccompanyGuestListType extends Array<ResAccompanyGuestInfoType> {
}
/**
 * Check if a given object implements the ResAccompanyGuestListType interface.
 */
export declare function instanceOfResAccompanyGuestListType(value: object): boolean;
export declare function ResAccompanyGuestListTypeFromJSON(json: any): ResAccompanyGuestListType;
export declare function ResAccompanyGuestListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAccompanyGuestListType;
export declare function ResAccompanyGuestListTypeToJSON(value?: ResAccompanyGuestListType | null): any;
