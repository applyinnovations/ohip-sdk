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
import type { InstanceLink } from './InstanceLink';
import type { TemplateDeviceLocationType } from './TemplateDeviceLocationType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing template Device locations.
 * @export
 * @interface TemplateDeviceLocationsToBeChanged
 */
export interface TemplateDeviceLocationsToBeChanged {
    /**
     * List of Device locations at template level.
     * @type {Array<TemplateDeviceLocationType>}
     * @memberof TemplateDeviceLocationsToBeChanged
     */
    templateDeviceLocations?: Array<TemplateDeviceLocationType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateDeviceLocationsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateDeviceLocationsToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateDeviceLocationsToBeChanged interface.
 */
export declare function instanceOfTemplateDeviceLocationsToBeChanged(value: object): boolean;
export declare function TemplateDeviceLocationsToBeChangedFromJSON(json: any): TemplateDeviceLocationsToBeChanged;
export declare function TemplateDeviceLocationsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateDeviceLocationsToBeChanged;
export declare function TemplateDeviceLocationsToBeChangedToJSON(value?: TemplateDeviceLocationsToBeChanged | null): any;
