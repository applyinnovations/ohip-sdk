/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DeviceType } from './DeviceType';
import type { HotelExternalDevicesType } from './HotelExternalDevicesType';
/**
 * Collection of hotels and the external devices that were configured for the hotel.
 * @export
 * @interface ConfiguredExternalDevices
 */
export interface ConfiguredExternalDevices {
    /**
     *
     * @type {DeviceType}
     * @memberof ConfiguredExternalDevices
     */
    deviceType?: DeviceType;
    /**
     *
     * @type {Array<HotelExternalDevicesType>}
     * @memberof ConfiguredExternalDevices
     */
    supportedExternalDevices?: Array<HotelExternalDevicesType>;
}
/**
 * Check if a given object implements the ConfiguredExternalDevices interface.
 */
export declare function instanceOfConfiguredExternalDevices(value: object): boolean;
export declare function ConfiguredExternalDevicesFromJSON(json: any): ConfiguredExternalDevices;
export declare function ConfiguredExternalDevicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfiguredExternalDevices;
export declare function ConfiguredExternalDevicesToJSON(value?: ConfiguredExternalDevices | null): any;
