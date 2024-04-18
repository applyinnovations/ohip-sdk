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
import type { DeviceConfigurationType } from './DeviceConfigurationType';
import type { DeviceMappingType } from './DeviceMappingType';
import type { SupportedExternalDeviceType } from './SupportedExternalDeviceType';
/**
 * Type for the configurations available to the device.
 * @export
 * @interface ExternalDeviceConfigurationType
 */
export interface ExternalDeviceConfigurationType {
    /**
     * Property for which the device is configured.
     * @type {string}
     * @memberof ExternalDeviceConfigurationType
     */
    hotelId?: string;
    /**
     *
     * @type {SupportedExternalDeviceType}
     * @memberof ExternalDeviceConfigurationType
     */
    device?: SupportedExternalDeviceType;
    /**
     *
     * @type {Array<DeviceConfigurationType>}
     * @memberof ExternalDeviceConfigurationType
     */
    deviceConfigurations?: Array<DeviceConfigurationType>;
    /**
     * Type that contains the mappings of the codes used in the external device to the code used in OPERA.
     * @type {Array<DeviceMappingType>}
     * @memberof ExternalDeviceConfigurationType
     */
    codeMappings?: Array<DeviceMappingType>;
}
/**
 * Check if a given object implements the ExternalDeviceConfigurationType interface.
 */
export declare function instanceOfExternalDeviceConfigurationType(value: object): boolean;
export declare function ExternalDeviceConfigurationTypeFromJSON(json: any): ExternalDeviceConfigurationType;
export declare function ExternalDeviceConfigurationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalDeviceConfigurationType;
export declare function ExternalDeviceConfigurationTypeToJSON(value?: ExternalDeviceConfigurationType | null): any;