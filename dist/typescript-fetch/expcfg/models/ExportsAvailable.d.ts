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
import type { ExportListType } from './ExportListType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object including a list of available exports.
 * @export
 * @interface ExportsAvailable
 */
export interface ExportsAvailable {
    /**
     *
     * @type {ExportListType}
     * @memberof ExportsAvailable
     */
    exports?: ExportListType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ExportsAvailable
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExportsAvailable
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ExportsAvailable interface.
 */
export declare function instanceOfExportsAvailable(value: object): boolean;
export declare function ExportsAvailableFromJSON(json: any): ExportsAvailable;
export declare function ExportsAvailableFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportsAvailable;
export declare function ExportsAvailableToJSON(value?: ExportsAvailable | null): any;
