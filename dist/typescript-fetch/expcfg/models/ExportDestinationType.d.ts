/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FileDeliveryConfigType } from './FileDeliveryConfigType';
import type { TransportMethodType } from './TransportMethodType';
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
export declare function instanceOfExportDestinationType(value: object): boolean;
export declare function ExportDestinationTypeFromJSON(json: any): ExportDestinationType;
export declare function ExportDestinationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportDestinationType;
export declare function ExportDestinationTypeToJSON(value?: ExportDestinationType | null): any;
