/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FileDeliveryConfigType } from './FileDeliveryConfigType';
import {
    FileDeliveryConfigTypeFromJSON,
    FileDeliveryConfigTypeFromJSONTyped,
    FileDeliveryConfigTypeToJSON,
} from './FileDeliveryConfigType';
import type { TransportMethodType } from './TransportMethodType';
import {
    TransportMethodTypeFromJSON,
    TransportMethodTypeFromJSONTyped,
    TransportMethodTypeToJSON,
} from './TransportMethodType';

/**
 * Details of the export's destination and format.
 * @export
 * @interface ExportDestinationType
 */
export interface ExportDestinationType {
    /**
     * Key that will be used during export file encryption; this is only needed if an Encryption Type has been specified.
     * @type {string}
     * @memberof ExportDestinationType
     */
    encryptionKey?: string;
    /**
     * Name of an encryption algorithm that will be used to encrypt an export file upon generation. This is used for the Default transport method.
     * @type {string}
     * @memberof ExportDestinationType
     */
    encryptionType?: string;
    /**
     * 
     * @type {FileDeliveryConfigType}
     * @memberof ExportDestinationType
     */
    fileDeliveryConfig?: FileDeliveryConfigType;
    /**
     * Formula used to generate the extension of the export file.
     * @type {string}
     * @memberof ExportDestinationType
     */
    fileExtension?: string;
    /**
     * Formula used to generate the name of the export file.
     * @type {string}
     * @memberof ExportDestinationType
     */
    fileName?: string;
    /**
     * URL address of HTTP server which received export file.
     * @type {string}
     * @memberof ExportDestinationType
     */
    httpAddress?: string;
    /**
     * Interface ID from OXI, required if UploadType is not available.
     * @type {string}
     * @memberof ExportDestinationType
     */
    oXIInterfaceId?: string;
    /**
     * Protocol used to upload the export file to HTTP server.
     * @type {string}
     * @memberof ExportDestinationType
     */
    protocol?: string;
    /**
     * Soap Action information if SOAP protocol is used to upload the export file.
     * @type {string}
     * @memberof ExportDestinationType
     */
    sOAPActionInformation?: string;
    /**
     * 
     * @type {TransportMethodType}
     * @memberof ExportDestinationType
     */
    transportMethod?: TransportMethodType;
    /**
     * Protocol used to upload the export file to FTP server.
     * @type {string}
     * @memberof ExportDestinationType
     */
    uploadType?: string;
    /**
     * Specify if the OXI interface will be used for export file delivery.
     * @type {boolean}
     * @memberof ExportDestinationType
     */
    useOXIInterface?: boolean;
    /**
     * Main tag for the XML document.
     * @type {string}
     * @memberof ExportDestinationType
     */
    xMLDocumentName?: string;
    /**
     * The zip file location where the zip file is saved after being generated.
     * @type {string}
     * @memberof ExportDestinationType
     */
    zipFileLocation?: string;
    /**
     * The zip file name based on the formula used in the setup.
     * @type {string}
     * @memberof ExportDestinationType
     */
    zipFileName?: string;
}

/**
 * Check if a given object implements the ExportDestinationType interface.
 */
export function instanceOfExportDestinationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportDestinationTypeFromJSON(json: any): ExportDestinationType {
    return ExportDestinationTypeFromJSONTyped(json, false);
}

export function ExportDestinationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportDestinationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'encryptionKey': !exists(json, 'encryptionKey') ? undefined : json['encryptionKey'],
        'encryptionType': !exists(json, 'encryptionType') ? undefined : json['encryptionType'],
        'fileDeliveryConfig': !exists(json, 'fileDeliveryConfig') ? undefined : FileDeliveryConfigTypeFromJSON(json['fileDeliveryConfig']),
        'fileExtension': !exists(json, 'fileExtension') ? undefined : json['fileExtension'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'httpAddress': !exists(json, 'httpAddress') ? undefined : json['httpAddress'],
        'oXIInterfaceId': !exists(json, 'oXIInterfaceId') ? undefined : json['oXIInterfaceId'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
        'sOAPActionInformation': !exists(json, 'sOAPActionInformation') ? undefined : json['sOAPActionInformation'],
        'transportMethod': !exists(json, 'transportMethod') ? undefined : TransportMethodTypeFromJSON(json['transportMethod']),
        'uploadType': !exists(json, 'uploadType') ? undefined : json['uploadType'],
        'useOXIInterface': !exists(json, 'useOXIInterface') ? undefined : json['useOXIInterface'],
        'xMLDocumentName': !exists(json, 'xMLDocumentName') ? undefined : json['xMLDocumentName'],
        'zipFileLocation': !exists(json, 'zipFileLocation') ? undefined : json['zipFileLocation'],
        'zipFileName': !exists(json, 'zipFileName') ? undefined : json['zipFileName'],
    };
}

export function ExportDestinationTypeToJSON(value?: ExportDestinationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'encryptionKey': value.encryptionKey,
        'encryptionType': value.encryptionType,
        'fileDeliveryConfig': FileDeliveryConfigTypeToJSON(value.fileDeliveryConfig),
        'fileExtension': value.fileExtension,
        'fileName': value.fileName,
        'httpAddress': value.httpAddress,
        'oXIInterfaceId': value.oXIInterfaceId,
        'protocol': value.protocol,
        'sOAPActionInformation': value.sOAPActionInformation,
        'transportMethod': TransportMethodTypeToJSON(value.transportMethod),
        'uploadType': value.uploadType,
        'useOXIInterface': value.useOXIInterface,
        'xMLDocumentName': value.xMLDocumentName,
        'zipFileLocation': value.zipFileLocation,
        'zipFileName': value.zipFileName,
    };
}

