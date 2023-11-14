/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { TemplateRoomFeaturesConfigType } from './TemplateRoomFeaturesConfigType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing template room features.
 * @export
 * @interface TemplateRoomFeaturesToBeChanged
 */
export interface TemplateRoomFeaturesToBeChanged {
    /**
     *
     * @type {Links}
     * @memberof TemplateRoomFeaturesToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {TemplateRoomFeaturesConfigType}
     * @memberof TemplateRoomFeaturesToBeChanged
     */
    templateRoomFeatures?: TemplateRoomFeaturesConfigType;
    /**
     *
     * @type {WarningsType}
     * @memberof TemplateRoomFeaturesToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TemplateRoomFeaturesToBeChanged interface.
 */
export declare function instanceOfTemplateRoomFeaturesToBeChanged(value: object): boolean;
export declare function TemplateRoomFeaturesToBeChangedFromJSON(json: any): TemplateRoomFeaturesToBeChanged;
export declare function TemplateRoomFeaturesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateRoomFeaturesToBeChanged;
export declare function TemplateRoomFeaturesToBeChangedToJSON(value?: TemplateRoomFeaturesToBeChanged | null): any;