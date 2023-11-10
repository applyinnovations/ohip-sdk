/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { PublishersType } from './PublishersType';
import type { WarningsType } from './WarningsType';
/**
 * Response to request to fetch the external systems
 * @export
 * @interface FetchedPublishers
 */
export interface FetchedPublishers {
    /**
     *
     * @type {Links}
     * @memberof FetchedPublishers
     */
    links?: Links;
    /**
     *
     * @type {PublishersType}
     * @memberof FetchedPublishers
     */
    publishers?: PublishersType;
    /**
     *
     * @type {WarningsType}
     * @memberof FetchedPublishers
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FetchedPublishers interface.
 */
export declare function instanceOfFetchedPublishers(value: object): boolean;
export declare function FetchedPublishersFromJSON(json: any): FetchedPublishers;
export declare function FetchedPublishersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchedPublishers;
export declare function FetchedPublishersToJSON(value?: FetchedPublishers | null): any;
