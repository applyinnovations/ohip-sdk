/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ECertificateConsumeSourceType } from './ECertificateConsumeSourceType';
import {
    ECertificateConsumeSourceTypeFromJSON,
    ECertificateConsumeSourceTypeFromJSONTyped,
    ECertificateConsumeSourceTypeToJSON,
} from './ECertificateConsumeSourceType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * E-Certificates details.
 * @export
 * @interface ECertificateConsumptionType
 */
export interface ECertificateConsumptionType {
    /**
     * Authorization code for consumption.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    authorizationCode?: string;
    /**
     * Date the certificate was consumed.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    date?: string;
    /**
     * Email of the person who consumed the certificate.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    email?: string;
    /**
     * First name of the person who consumed the certificate.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    firstName?: string;
    /**
     * Property where certificate was consumed for.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    hotelId?: string;
    /**
     * Consumption location type.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    locationType?: string;
    /**
     * Middle name of the person who consumed the certificate.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    middleName?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ECertificateConsumptionType
     */
    referenceId?: UniqueIDType;
    /**
     * Date on which the service is due (arrival date in case of reservation).
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    serviceDate?: string;
    /**
     * 
     * @type {ECertificateConsumeSourceType}
     * @memberof ECertificateConsumptionType
     */
    source?: ECertificateConsumeSourceType;
    /**
     * Last name of the person who consumed the certificate..
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    surname?: string;
    /**
     * Application user who created the consumption.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    userName?: string;
    /**
     * Any notes on the certificate entered at time of consumption.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    userNotes?: string;
}

/**
 * Check if a given object implements the ECertificateConsumptionType interface.
 */
export function instanceOfECertificateConsumptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateConsumptionTypeFromJSON(json: any): ECertificateConsumptionType {
    return ECertificateConsumptionTypeFromJSONTyped(json, false);
}

export function ECertificateConsumptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateConsumptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizationCode': !exists(json, 'authorizationCode') ? undefined : json['authorizationCode'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'locationType': !exists(json, 'locationType') ? undefined : json['locationType'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'referenceId': !exists(json, 'referenceId') ? undefined : UniqueIDTypeFromJSON(json['referenceId']),
        'serviceDate': !exists(json, 'serviceDate') ? undefined : json['serviceDate'],
        'source': !exists(json, 'source') ? undefined : ECertificateConsumeSourceTypeFromJSON(json['source']),
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'userNotes': !exists(json, 'userNotes') ? undefined : json['userNotes'],
    };
}

export function ECertificateConsumptionTypeToJSON(value?: ECertificateConsumptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorizationCode': value.authorizationCode,
        'date': value.date,
        'email': value.email,
        'firstName': value.firstName,
        'hotelId': value.hotelId,
        'locationType': value.locationType,
        'middleName': value.middleName,
        'referenceId': UniqueIDTypeToJSON(value.referenceId),
        'serviceDate': value.serviceDate,
        'source': ECertificateConsumeSourceTypeToJSON(value.source),
        'surname': value.surname,
        'userName': value.userName,
        'userNotes': value.userNotes,
    };
}

