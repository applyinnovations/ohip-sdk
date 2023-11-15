/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AlertAreaType } from './AlertAreaType';
import {
    AlertAreaTypeFromJSON,
    AlertAreaTypeFromJSONTyped,
    AlertAreaTypeToJSON,
} from './AlertAreaType';
import type { AlertGuestInfoType } from './AlertGuestInfoType';
import {
    AlertGuestInfoTypeFromJSON,
    AlertGuestInfoTypeFromJSONTyped,
    AlertGuestInfoTypeToJSON,
} from './AlertGuestInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
import {
    UserDefinedFieldsTypeFromJSON,
    UserDefinedFieldsTypeFromJSONTyped,
    UserDefinedFieldsTypeToJSON,
} from './UserDefinedFieldsType';
import type { WelcomeOfferType } from './WelcomeOfferType';
import {
    WelcomeOfferTypeFromJSON,
    WelcomeOfferTypeFromJSONTyped,
    WelcomeOfferTypeToJSON,
} from './WelcomeOfferType';

/**
 * 
 * @export
 * @interface AlertType
 */
export interface AlertType {
    /**
     * 
     * @type {AlertAreaType}
     * @memberof AlertType
     */
    area?: AlertAreaType;
    /**
     * Code identifying the type of alert.
     * @type {string}
     * @memberof AlertType
     */
    code?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof AlertType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof AlertType
     */
    creatorId?: string;
    /**
     * The alert message.
     * @type {string}
     * @memberof AlertType
     */
    description?: string;
    /**
     * Indicate whether the alert is a global that is automatically and dynamically attached to all reservations that meet the alert criteria.
     * @type {boolean}
     * @memberof AlertType
     */
    global?: boolean;
    /**
     * 
     * @type {AlertGuestInfoType}
     * @memberof AlertType
     */
    guestInfo?: AlertGuestInfoType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof AlertType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof AlertType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof AlertType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof AlertType
     */
    instance?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof AlertType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof AlertType
     */
    lastModifyDateTime?: string;
    /**
     * Printer used to print the alert notification.
     * @type {string}
     * @memberof AlertType
     */
    printerName?: string;
    /**
     * Notify by sending the message to the printer.
     * @type {boolean}
     * @memberof AlertType
     */
    printerNotification?: boolean;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof AlertType
     */
    purgeDate?: string;
    /**
     * Report description. Mainly used for as a parameter for printing the alerts.
     * @type {string}
     * @memberof AlertType
     */
    reportDescription?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AlertType
     */
    reportId?: UniqueIDType;
    /**
     * Report name of the report type.
     * @type {string}
     * @memberof AlertType
     */
    reportName?: string;
    /**
     * Notify by showing the alert on the screen
     * @type {boolean}
     * @memberof AlertType
     */
    screenNotification?: boolean;
    /**
     * Indicates the Reservation Stop Check In/Check Out Global Alert.
     * @type {boolean}
     * @memberof AlertType
     */
    stopCheckInCheckOut?: boolean;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof AlertType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof AlertType
     */
    url?: string;
    /**
     * 
     * @type {UserDefinedFieldsType}
     * @memberof AlertType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     * 
     * @type {WelcomeOfferType}
     * @memberof AlertType
     */
    welcomeOffer?: WelcomeOfferType;
}

/**
 * Check if a given object implements the AlertType interface.
 */
export function instanceOfAlertType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlertTypeFromJSON(json: any): AlertType {
    return AlertTypeFromJSONTyped(json, false);
}

export function AlertTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'area': !exists(json, 'area') ? undefined : AlertAreaTypeFromJSON(json['area']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'global': !exists(json, 'global') ? undefined : json['global'],
        'guestInfo': !exists(json, 'guestInfo') ? undefined : AlertGuestInfoTypeFromJSON(json['guestInfo']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'printerName': !exists(json, 'printerName') ? undefined : json['printerName'],
        'printerNotification': !exists(json, 'printerNotification') ? undefined : json['printerNotification'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'reportDescription': !exists(json, 'reportDescription') ? undefined : json['reportDescription'],
        'reportId': !exists(json, 'reportId') ? undefined : UniqueIDTypeFromJSON(json['reportId']),
        'reportName': !exists(json, 'reportName') ? undefined : json['reportName'],
        'screenNotification': !exists(json, 'screenNotification') ? undefined : json['screenNotification'],
        'stopCheckInCheckOut': !exists(json, 'stopCheckInCheckOut') ? undefined : json['stopCheckInCheckOut'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'userDefinedFields': !exists(json, 'userDefinedFields') ? undefined : UserDefinedFieldsTypeFromJSON(json['userDefinedFields']),
        'welcomeOffer': !exists(json, 'welcomeOffer') ? undefined : WelcomeOfferTypeFromJSON(json['welcomeOffer']),
    };
}

export function AlertTypeToJSON(value?: AlertType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'area': AlertAreaTypeToJSON(value.area),
        'code': value.code,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'description': value.description,
        'global': value.global,
        'guestInfo': AlertGuestInfoTypeToJSON(value.guestInfo),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'printerName': value.printerName,
        'printerNotification': value.printerNotification,
        'purgeDate': value.purgeDate,
        'reportDescription': value.reportDescription,
        'reportId': UniqueIDTypeToJSON(value.reportId),
        'reportName': value.reportName,
        'screenNotification': value.screenNotification,
        'stopCheckInCheckOut': value.stopCheckInCheckOut,
        'type': value.type,
        'url': value.url,
        'userDefinedFields': UserDefinedFieldsTypeToJSON(value.userDefinedFields),
        'welcomeOffer': WelcomeOfferTypeToJSON(value.welcomeOffer),
    };
}

