/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
/**
 * Identify carrier details of external system.
 * @export
 * @interface SystemCarrierType
 */
export interface SystemCarrierType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof SystemCarrierType
     */
    carrierCode?: CodeDescriptionType;
    /**
     * Indicates whether external system carrier is active or not.
     * @type {boolean}
     * @memberof SystemCarrierType
     */
    inactive?: boolean;
    /**
     * Indicates whether external system carrier is merchant or not.
     * @type {boolean}
     * @memberof SystemCarrierType
     */
    merchant?: boolean;
}
/**
 * Check if a given object implements the SystemCarrierType interface.
 */
export declare function instanceOfSystemCarrierType(value: object): boolean;
export declare function SystemCarrierTypeFromJSON(json: any): SystemCarrierType;
export declare function SystemCarrierTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemCarrierType;
export declare function SystemCarrierTypeToJSON(value?: SystemCarrierType | null): any;