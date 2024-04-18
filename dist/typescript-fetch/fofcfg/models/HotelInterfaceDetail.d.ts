/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelInterfaceDetailType } from './HotelInterfaceDetailType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Hotel Interface Data.
 * @export
 * @interface HotelInterfaceDetail
 */
export interface HotelInterfaceDetail {
    /**
     *
     * @type {HotelInterfaceDetailType}
     * @memberof HotelInterfaceDetail
     */
    details?: HotelInterfaceDetailType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof HotelInterfaceDetail
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HotelInterfaceDetail
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the HotelInterfaceDetail interface.
 */
export declare function instanceOfHotelInterfaceDetail(value: object): boolean;
export declare function HotelInterfaceDetailFromJSON(json: any): HotelInterfaceDetail;
export declare function HotelInterfaceDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceDetail;
export declare function HotelInterfaceDetailToJSON(value?: HotelInterfaceDetail | null): any;