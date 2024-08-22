/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Response for configured hurdle rates.
 * @export
 * @interface HurdleRatesStatus
 */
export interface HurdleRatesStatus {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof HurdleRatesStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HurdleRatesStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the HurdleRatesStatus interface.
 */
export declare function instanceOfHurdleRatesStatus(value: object): boolean;
export declare function HurdleRatesStatusFromJSON(json: any): HurdleRatesStatus;
export declare function HurdleRatesStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): HurdleRatesStatus;
export declare function HurdleRatesStatusToJSON(value?: HurdleRatesStatus | null): any;
