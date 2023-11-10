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
import type { CustomCharUDFsType } from './CustomCharUDFsType';
import type { CustomDateUDFsType } from './CustomDateUDFsType';
import type { CustomNumericUDFsType } from './CustomNumericUDFsType';
/**
 * A common type used to hold custom user defined fields(UDFs). This type should be used to handle custom UDFs on RReservation, Profiles, tc.
 * @export
 * @interface CustomFieldsType
 */
export interface CustomFieldsType {
    /**
     *
     * @type {CustomCharUDFsType}
     * @memberof CustomFieldsType
     */
    customCharUDFs?: CustomCharUDFsType;
    /**
     *
     * @type {CustomDateUDFsType}
     * @memberof CustomFieldsType
     */
    customDateUDFs?: CustomDateUDFsType;
    /**
     *
     * @type {CustomNumericUDFsType}
     * @memberof CustomFieldsType
     */
    customNumericUDFs?: CustomNumericUDFsType;
}
/**
 * Check if a given object implements the CustomFieldsType interface.
 */
export declare function instanceOfCustomFieldsType(value: object): boolean;
export declare function CustomFieldsTypeFromJSON(json: any): CustomFieldsType;
export declare function CustomFieldsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomFieldsType;
export declare function CustomFieldsTypeToJSON(value?: CustomFieldsType | null): any;
