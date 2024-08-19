/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { URLType } from './URLType';
/**
 * Identifies the kind of Parcel, Baggage, or Lost items or Valet-managed vehicles or services.
 * @export
 * @interface TrackItType
 */
export interface TrackItType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof TrackItType
     */
    type?: CodeDescriptionType;
    /**
     *
     * @type {URLType}
     * @memberof TrackItType
     */
    url?: URLType;
}
/**
 * Check if a given object implements the TrackItType interface.
 */
export declare function instanceOfTrackItType(value: object): boolean;
export declare function TrackItTypeFromJSON(json: any): TrackItType;
export declare function TrackItTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItType;
export declare function TrackItTypeToJSON(value?: TrackItType | null): any;
