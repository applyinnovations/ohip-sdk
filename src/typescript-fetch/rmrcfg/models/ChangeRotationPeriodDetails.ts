/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ErrorsType } from './ErrorsType';
import {
    ErrorsTypeFromJSON,
    ErrorsTypeFromJSONTyped,
    ErrorsTypeToJSON,
} from './ErrorsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface ChangeRotationPeriodDetails
 */
export interface ChangeRotationPeriodDetails {
    /**
     * Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
     * @type {string}
     * @memberof ChangeRotationPeriodDetails
     */
    correlationId?: string;
    /**
     * A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
     * @type {string}
     * @memberof ChangeRotationPeriodDetails
     */
    echoToken?: string;
    /**
     * Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail.
     * @type {boolean}
     * @memberof ChangeRotationPeriodDetails
     */
    enforceAllowed?: boolean;
    /**
     * 
     * @type {ErrorsType}
     * @memberof ChangeRotationPeriodDetails
     */
    errors?: ErrorsType;
    /**
     * 
     * @type {Links}
     * @memberof ChangeRotationPeriodDetails
     */
    links?: Links;
    /**
     * Indicates if the operation supports the ability to retry the request.
     * @type {boolean}
     * @memberof ChangeRotationPeriodDetails
     */
    retryAllowed?: boolean;
    /**
     * Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors.
     * @type {object}
     * @memberof ChangeRotationPeriodDetails
     */
    success?: object;
    /**
     * Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
     * @type {string}
     * @memberof ChangeRotationPeriodDetails
     */
    timeStamp?: string;
    /**
     * This attribute carries the user selected confirmation value on confirmation popup.
     * @type {boolean}
     * @memberof ChangeRotationPeriodDetails
     */
    useLocalAllowed?: boolean;
    /**
     * For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
     * @type {string}
     * @memberof ChangeRotationPeriodDetails
     */
    version?: string;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChangeRotationPeriodDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChangeRotationPeriodDetails interface.
 */
export function instanceOfChangeRotationPeriodDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeRotationPeriodDetailsFromJSON(json: any): ChangeRotationPeriodDetails {
    return ChangeRotationPeriodDetailsFromJSONTyped(json, false);
}

export function ChangeRotationPeriodDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeRotationPeriodDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'correlationId': !exists(json, 'correlationId') ? undefined : json['correlationId'],
        'echoToken': !exists(json, 'echoToken') ? undefined : json['echoToken'],
        'enforceAllowed': !exists(json, 'enforceAllowed') ? undefined : json['enforceAllowed'],
        'errors': !exists(json, 'errors') ? undefined : ErrorsTypeFromJSON(json['errors']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'retryAllowed': !exists(json, 'retryAllowed') ? undefined : json['retryAllowed'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'timeStamp': !exists(json, 'timeStamp') ? undefined : json['timeStamp'],
        'useLocalAllowed': !exists(json, 'useLocalAllowed') ? undefined : json['useLocalAllowed'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChangeRotationPeriodDetailsToJSON(value?: ChangeRotationPeriodDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'correlationId': value.correlationId,
        'echoToken': value.echoToken,
        'enforceAllowed': value.enforceAllowed,
        'errors': ErrorsTypeToJSON(value.errors),
        'links': LinksToJSON(value.links),
        'retryAllowed': value.retryAllowed,
        'success': value.success,
        'timeStamp': value.timeStamp,
        'useLocalAllowed': value.useLocalAllowed,
        'version': value.version,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
