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
/**
 * Defines best available rate plans.
 * @export
 * @interface BestAvailableRatePlanType
 */
export interface BestAvailableRatePlanType {
    /**
     * Indicates Length of Stay 1 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los1?: boolean;
    /**
     * Indicates Length of Stay 2 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los2?: boolean;
    /**
     * Indicates Length of Stay 3 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los3?: boolean;
    /**
     * Indicates Length of Stay 4 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los4?: boolean;
    /**
     * Indicates Length of Stay 5 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los5?: boolean;
    /**
     * Indicates Length of Stay 6 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los6?: boolean;
    /**
     * Indicates Length of Stay 7 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los7?: boolean;
    /**
     * Indicates Length of Stay 8 configuration.
     * @type {boolean}
     * @memberof BestAvailableRatePlanType
     */
    los8?: boolean;
    /**
     * Validity of best available rate plan.
     * @type {string}
     * @memberof BestAvailableRatePlanType
     */
    rateDate?: string;
    /**
     * Collection of best available rate codes.
     * @type {Array<string>}
     * @memberof BestAvailableRatePlanType
     */
    ratePlanCodes?: Array<string>;
}
/**
 * Check if a given object implements the BestAvailableRatePlanType interface.
 */
export declare function instanceOfBestAvailableRatePlanType(value: object): boolean;
export declare function BestAvailableRatePlanTypeFromJSON(json: any): BestAvailableRatePlanType;
export declare function BestAvailableRatePlanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BestAvailableRatePlanType;
export declare function BestAvailableRatePlanTypeToJSON(value?: BestAvailableRatePlanType | null): any;
