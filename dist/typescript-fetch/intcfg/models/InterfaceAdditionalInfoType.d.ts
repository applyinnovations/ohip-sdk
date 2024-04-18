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
import type { HotelInterfaceStatusType } from './HotelInterfaceStatusType';
import type { IfcMenuTypeType } from './IfcMenuTypeType';
import type { TelephoneChargeType } from './TelephoneChargeType';
/**
 *
 * @export
 * @interface InterfaceAdditionalInfoType
 */
export interface InterfaceAdditionalInfoType {
    /**
     *
     * @type {IfcMenuTypeType}
     * @memberof InterfaceAdditionalInfoType
     */
    menuType?: IfcMenuTypeType;
    /**
     * Name of the Interface sub-menu
     * @type {string}
     * @memberof InterfaceAdditionalInfoType
     */
    menuName?: string;
    /**
     * Opera IFC controller (server) port for the connecting clients.
     * @type {number}
     * @memberof InterfaceAdditionalInfoType
     */
    controllerPort?: number;
    /**
     * VNC server port for connecting to a VNC server.
     * @type {number}
     * @memberof InterfaceAdditionalInfoType
     */
    vncPort?: number;
    /**
     * Cashier Number.
     * @type {number}
     * @memberof InterfaceAdditionalInfoType
     */
    cashierId?: number;
    /**
     * Used if interface has to support more than one front office system.
     * @type {number}
     * @memberof InterfaceAdditionalInfoType
     */
    pathId1?: number;
    /**
     * Used by the Interface module. ( IFC7.exe )
     * @type {string}
     * @memberof InterfaceAdditionalInfoType
     */
    timeout?: string;
    /**
     * True if the interface will be displayed.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    displayFlag?: boolean;
    /**
     * Decides if the interface will be started automatically when the controller is restarted.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    autoStartFlag?: boolean;
    /**
     * Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    activeFlag?: boolean;
    /**
     *
     * @type {HotelInterfaceStatusType}
     * @memberof InterfaceAdditionalInfoType
     */
    interfaceStatus?: HotelInterfaceStatusType;
    /**
     * Version no. of each external interface that is installed
     * @type {string}
     * @memberof InterfaceAdditionalInfoType
     */
    version?: string;
    /**
     * (Internal Use) Message Expires After
     * @type {string}
     * @memberof InterfaceAdditionalInfoType
     */
    msgExpiresAfter?: string;
    /**
     *
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    useDataThroughFlag?: boolean;
    /**
     * Indicator if the Hotel Interface handles night audit commands.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    nAStart?: boolean;
    /**
     * Indicator if the Hotel Interface allows multiple room selection for keys.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    multipleRoomKey?: boolean;
    /**
     * Indicator if the Hotel Interface is an online key system.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    onlineKeySystem?: boolean;
    /**
     * Indicator if the Interface Keys will be deleted on KeyDelete.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    deleteIfcKeysOnKeyDelete?: boolean;
    /**
     * Indicator for Hotel Interface Send Track 1 Data.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    sendTrack1Data?: boolean;
    /**
     * Indicator for Hotel Interface Send Track 2 Data.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    sendTrack2Data?: boolean;
    /**
     * Indicator if the Room Status will be sent.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    sendRoomStatus?: boolean;
    /**
     *
     * @type {TelephoneChargeType}
     * @memberof InterfaceAdditionalInfoType
     */
    telephoneCharge?: TelephoneChargeType;
    /**
     * Maximum number of additional rooms allowed.
     * @type {number}
     * @memberof InterfaceAdditionalInfoType
     */
    additionalRoomsLimit?: number;
    /**
     * Indicator if the DLS Interface allows to send valid start date and time.
     * @type {boolean}
     * @memberof InterfaceAdditionalInfoType
     */
    sendValidStartDateTime?: boolean;
}
/**
 * Check if a given object implements the InterfaceAdditionalInfoType interface.
 */
export declare function instanceOfInterfaceAdditionalInfoType(value: object): boolean;
export declare function InterfaceAdditionalInfoTypeFromJSON(json: any): InterfaceAdditionalInfoType;
export declare function InterfaceAdditionalInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceAdditionalInfoType;
export declare function InterfaceAdditionalInfoTypeToJSON(value?: InterfaceAdditionalInfoType | null): any;