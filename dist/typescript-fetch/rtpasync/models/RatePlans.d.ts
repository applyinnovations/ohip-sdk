/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RatePlanType } from './RatePlanType';
import type { WarningsType } from './WarningsType';
/**
 * Request object to create rate plan.
 * @export
 * @interface RatePlans
 */
export interface RatePlans {
    /**
     *
     * @type {Links}
     * @memberof RatePlans
     */
    links?: Links;
    /**
     * Rate plan code details to be created.
     * @type {Array<RatePlanType>}
     * @memberof RatePlans
     */
    ratePlans?: Array<RatePlanType>;
    /**
     *
     * @type {WarningsType}
     * @memberof RatePlans
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RatePlans interface.
 */
export declare function instanceOfRatePlans(value: object): boolean;
export declare function RatePlansFromJSON(json: any): RatePlans;
export declare function RatePlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlans;
export declare function RatePlansToJSON(value?: RatePlans | null): any;