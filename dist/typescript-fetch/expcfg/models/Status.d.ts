/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface Status
 */
export interface Status {
    /**
     *
     * @type {Links}
     * @memberof Status
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof Status
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the Status interface.
 */
export declare function instanceOfStatus(value: object): boolean;
export declare function StatusFromJSON(json: any): Status;
export declare function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status;
export declare function StatusToJSON(value?: Status | null): any;
