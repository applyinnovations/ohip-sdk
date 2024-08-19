/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ClassOfServiceType } from './ClassOfServiceType';
import {
    ClassOfServiceTypeFromJSON,
    ClassOfServiceTypeFromJSONTyped,
    ClassOfServiceTypeToJSON,
} from './ClassOfServiceType';
import type { GeneralInfoType } from './GeneralInfoType';
import {
    GeneralInfoTypeFromJSON,
    GeneralInfoTypeFromJSONTyped,
    GeneralInfoTypeToJSON,
} from './GeneralInfoType';
import type { ImportRoomsType } from './ImportRoomsType';
import {
    ImportRoomsTypeFromJSON,
    ImportRoomsTypeFromJSONTyped,
    ImportRoomsTypeToJSON,
} from './ImportRoomsType';
import type { InterfaceAdditionalInfoType } from './InterfaceAdditionalInfoType';
import {
    InterfaceAdditionalInfoTypeFromJSON,
    InterfaceAdditionalInfoTypeFromJSONTyped,
    InterfaceAdditionalInfoTypeToJSON,
} from './InterfaceAdditionalInfoType';
import type { InterfaceCommunicationInfoType } from './InterfaceCommunicationInfoType';
import {
    InterfaceCommunicationInfoTypeFromJSON,
    InterfaceCommunicationInfoTypeFromJSONTyped,
    InterfaceCommunicationInfoTypeToJSON,
} from './InterfaceCommunicationInfoType';
import type { InterfaceCustomDataInfoType } from './InterfaceCustomDataInfoType';
import {
    InterfaceCustomDataInfoTypeFromJSON,
    InterfaceCustomDataInfoTypeFromJSONTyped,
    InterfaceCustomDataInfoTypeToJSON,
} from './InterfaceCustomDataInfoType';
import type { InterfaceExportDataInfoType } from './InterfaceExportDataInfoType';
import {
    InterfaceExportDataInfoTypeFromJSON,
    InterfaceExportDataInfoTypeFromJSONTyped,
    InterfaceExportDataInfoTypeToJSON,
} from './InterfaceExportDataInfoType';
import type { InterfacePrimaryInfoType } from './InterfacePrimaryInfoType';
import {
    InterfacePrimaryInfoTypeFromJSON,
    InterfacePrimaryInfoTypeFromJSONTyped,
    InterfacePrimaryInfoTypeToJSON,
} from './InterfacePrimaryInfoType';
import type { InterfaceWorkstationType } from './InterfaceWorkstationType';
import {
    InterfaceWorkstationTypeFromJSON,
    InterfaceWorkstationTypeFromJSONTyped,
    InterfaceWorkstationTypeToJSON,
} from './InterfaceWorkstationType';
import type { PostingInfoType } from './PostingInfoType';
import {
    PostingInfoTypeFromJSON,
    PostingInfoTypeFromJSONTyped,
    PostingInfoTypeToJSON,
} from './PostingInfoType';
import type { TransactionCodeInfoType } from './TransactionCodeInfoType';
import {
    TransactionCodeInfoTypeFromJSON,
    TransactionCodeInfoTypeFromJSONTyped,
    TransactionCodeInfoTypeToJSON,
} from './TransactionCodeInfoType';
import type { TranslationType } from './TranslationType';
import {
    TranslationTypeFromJSON,
    TranslationTypeFromJSONTyped,
    TranslationTypeToJSON,
} from './TranslationType';

/**
 * 
 * @export
 * @interface HotelInterfaceDetailType
 */
export interface HotelInterfaceDetailType {
    /**
     * 
     * @type {InterfaceAdditionalInfoType}
     * @memberof HotelInterfaceDetailType
     */
    additionalInfo?: InterfaceAdditionalInfoType;
    /**
     * 
     * @type {ClassOfServiceType}
     * @memberof HotelInterfaceDetailType
     */
    classOfServiceInfo?: ClassOfServiceType;
    /**
     * 
     * @type {InterfaceCommunicationInfoType}
     * @memberof HotelInterfaceDetailType
     */
    communicationInfo?: InterfaceCommunicationInfoType;
    /**
     * 
     * @type {InterfaceCustomDataInfoType}
     * @memberof HotelInterfaceDetailType
     */
    customDataInfo?: InterfaceCustomDataInfoType;
    /**
     * 
     * @type {InterfaceExportDataInfoType}
     * @memberof HotelInterfaceDetailType
     */
    exportDataInfo?: InterfaceExportDataInfoType;
    /**
     * 
     * @type {GeneralInfoType}
     * @memberof HotelInterfaceDetailType
     */
    generalInfo?: GeneralInfoType;
    /**
     * 
     * @type {ImportRoomsType}
     * @memberof HotelInterfaceDetailType
     */
    importRoomsInfo?: ImportRoomsType;
    /**
     * 
     * @type {PostingInfoType}
     * @memberof HotelInterfaceDetailType
     */
    postingsInfo?: PostingInfoType;
    /**
     * 
     * @type {InterfacePrimaryInfoType}
     * @memberof HotelInterfaceDetailType
     */
    primaryInfo?: InterfacePrimaryInfoType;
    /**
     * 
     * @type {TransactionCodeInfoType}
     * @memberof HotelInterfaceDetailType
     */
    transactionsInfo?: TransactionCodeInfoType;
    /**
     * 
     * @type {TranslationType}
     * @memberof HotelInterfaceDetailType
     */
    translationInfo?: TranslationType;
    /**
     * List of workstations of a hotel interface.
     * @type {Array<InterfaceWorkstationType>}
     * @memberof HotelInterfaceDetailType
     */
    workstationSetupInfo?: Array<InterfaceWorkstationType>;
}

/**
 * Check if a given object implements the HotelInterfaceDetailType interface.
 */
export function instanceOfHotelInterfaceDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInterfaceDetailTypeFromJSON(json: any): HotelInterfaceDetailType {
    return HotelInterfaceDetailTypeFromJSONTyped(json, false);
}

export function HotelInterfaceDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalInfo': !exists(json, 'additionalInfo') ? undefined : InterfaceAdditionalInfoTypeFromJSON(json['additionalInfo']),
        'classOfServiceInfo': !exists(json, 'classOfServiceInfo') ? undefined : ClassOfServiceTypeFromJSON(json['classOfServiceInfo']),
        'communicationInfo': !exists(json, 'communicationInfo') ? undefined : InterfaceCommunicationInfoTypeFromJSON(json['communicationInfo']),
        'customDataInfo': !exists(json, 'customDataInfo') ? undefined : InterfaceCustomDataInfoTypeFromJSON(json['customDataInfo']),
        'exportDataInfo': !exists(json, 'exportDataInfo') ? undefined : InterfaceExportDataInfoTypeFromJSON(json['exportDataInfo']),
        'generalInfo': !exists(json, 'generalInfo') ? undefined : GeneralInfoTypeFromJSON(json['generalInfo']),
        'importRoomsInfo': !exists(json, 'importRoomsInfo') ? undefined : ImportRoomsTypeFromJSON(json['importRoomsInfo']),
        'postingsInfo': !exists(json, 'postingsInfo') ? undefined : PostingInfoTypeFromJSON(json['postingsInfo']),
        'primaryInfo': !exists(json, 'primaryInfo') ? undefined : InterfacePrimaryInfoTypeFromJSON(json['primaryInfo']),
        'transactionsInfo': !exists(json, 'transactionsInfo') ? undefined : TransactionCodeInfoTypeFromJSON(json['transactionsInfo']),
        'translationInfo': !exists(json, 'translationInfo') ? undefined : TranslationTypeFromJSON(json['translationInfo']),
        'workstationSetupInfo': !exists(json, 'workstationSetupInfo') ? undefined : ((json['workstationSetupInfo'] as Array<any>).map(InterfaceWorkstationTypeFromJSON)),
    };
}

export function HotelInterfaceDetailTypeToJSON(value?: HotelInterfaceDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalInfo': InterfaceAdditionalInfoTypeToJSON(value.additionalInfo),
        'classOfServiceInfo': ClassOfServiceTypeToJSON(value.classOfServiceInfo),
        'communicationInfo': InterfaceCommunicationInfoTypeToJSON(value.communicationInfo),
        'customDataInfo': InterfaceCustomDataInfoTypeToJSON(value.customDataInfo),
        'exportDataInfo': InterfaceExportDataInfoTypeToJSON(value.exportDataInfo),
        'generalInfo': GeneralInfoTypeToJSON(value.generalInfo),
        'importRoomsInfo': ImportRoomsTypeToJSON(value.importRoomsInfo),
        'postingsInfo': PostingInfoTypeToJSON(value.postingsInfo),
        'primaryInfo': InterfacePrimaryInfoTypeToJSON(value.primaryInfo),
        'transactionsInfo': TransactionCodeInfoTypeToJSON(value.transactionsInfo),
        'translationInfo': TranslationTypeToJSON(value.translationInfo),
        'workstationSetupInfo': value.workstationSetupInfo === undefined ? undefined : ((value.workstationSetupInfo as Array<any>).map(InterfaceWorkstationTypeToJSON)),
    };
}

