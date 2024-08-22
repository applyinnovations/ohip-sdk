/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelInterfaceTypeType } from './HotelInterfaceTypeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface InterfacePrimaryInfoType
 */
export interface InterfacePrimaryInfoType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof InterfacePrimaryInfoType
     */
    interfaceId?: UniqueIDType;
    /**
     * Hotel Code
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    logo?: string;
    /**
     * Name of the Hotel Interface
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    interfaceName?: string;
    /**
     *
     * @type {HotelInterfaceTypeType}
     * @memberof InterfacePrimaryInfoType
     */
    interfaceType?: HotelInterfaceTypeType;
    /**
     * Three letter code that uniquely identifies the external interface.
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    productCode?: string;
    /**
     * Interface License code
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    licenseCode?: string;
    /**
     * The ID stored in IFC_MACHINES table.
     * @type {number}
     * @memberof InterfacePrimaryInfoType
     */
    machineId?: number;
    /**
     * Unique machine name of the running IFC.
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    machineName?: string;
    /**
     * FKT Logo required for the external interface.
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    interfaceProductCode?: string;
    /**
     * Stores the Outbound Code to identify the target system.
     * @type {string}
     * @memberof InterfacePrimaryInfoType
     */
    outboundCode?: string;
}
/**
 * Check if a given object implements the InterfacePrimaryInfoType interface.
 */
export declare function instanceOfInterfacePrimaryInfoType(value: object): boolean;
export declare function InterfacePrimaryInfoTypeFromJSON(json: any): InterfacePrimaryInfoType;
export declare function InterfacePrimaryInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfacePrimaryInfoType;
export declare function InterfacePrimaryInfoTypeToJSON(value?: InterfacePrimaryInfoType | null): any;
