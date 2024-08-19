/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface ExportMappingLinkedTypesDetails
 */
export interface ExportMappingLinkedTypesDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ExportMappingLinkedTypesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExportMappingLinkedTypesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ExportMappingLinkedTypesDetails interface.
 */
export declare function instanceOfExportMappingLinkedTypesDetails(value: object): boolean;
export declare function ExportMappingLinkedTypesDetailsFromJSON(json: any): ExportMappingLinkedTypesDetails;
export declare function ExportMappingLinkedTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingLinkedTypesDetails;
export declare function ExportMappingLinkedTypesDetailsToJSON(value?: ExportMappingLinkedTypesDetails | null): any;
