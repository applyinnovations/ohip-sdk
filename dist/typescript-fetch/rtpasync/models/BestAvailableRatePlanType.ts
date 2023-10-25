/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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
     * @type {Date}
     * @memberof BestAvailableRatePlanType
     */
    rateDate?: Date;
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
export function instanceOfBestAvailableRatePlanType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BestAvailableRatePlanTypeFromJSON(json: any): BestAvailableRatePlanType {
    return BestAvailableRatePlanTypeFromJSONTyped(json, false);
}

export function BestAvailableRatePlanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BestAvailableRatePlanType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'los1': !exists(json, 'los1') ? undefined : json['los1'],
        'los2': !exists(json, 'los2') ? undefined : json['los2'],
        'los3': !exists(json, 'los3') ? undefined : json['los3'],
        'los4': !exists(json, 'los4') ? undefined : json['los4'],
        'los5': !exists(json, 'los5') ? undefined : json['los5'],
        'los6': !exists(json, 'los6') ? undefined : json['los6'],
        'los7': !exists(json, 'los7') ? undefined : json['los7'],
        'los8': !exists(json, 'los8') ? undefined : json['los8'],
        'rateDate': !exists(json, 'rateDate') ? undefined : (new Date(json['rateDate'])),
        'ratePlanCodes': !exists(json, 'ratePlanCodes') ? undefined : json['ratePlanCodes'],
    };
}

export function BestAvailableRatePlanTypeToJSON(value?: BestAvailableRatePlanType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'los1': value.los1,
        'los2': value.los2,
        'los3': value.los3,
        'los4': value.los4,
        'los5': value.los5,
        'los6': value.los6,
        'los7': value.los7,
        'los8': value.los8,
        'rateDate': value.rateDate === undefined ? undefined : (value.rateDate.toISOString().substr(0,10)),
        'ratePlanCodes': value.ratePlanCodes,
    };
}

