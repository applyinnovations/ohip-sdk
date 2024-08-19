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
import type { ClassOfServiceConfigType } from './ClassOfServiceConfigType';
import type { DirectInwardDialType } from './DirectInwardDialType';
import type { DoNotDisturbType } from './DoNotDisturbType';
import type { MaskDialNumberType } from './MaskDialNumberType';
import type { MessageWaitingType } from './MessageWaitingType';
/**
 *
 * @export
 * @interface RoomMaskSetupType
 */
export interface RoomMaskSetupType {
    /**
     * Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number.
     * @type {boolean}
     * @memberof RoomMaskSetupType
     */
    wakeUpCall?: boolean;
    /**
     *
     * @type {DoNotDisturbType}
     * @memberof RoomMaskSetupType
     */
    doNotDisturb?: DoNotDisturbType;
    /**
     *
     * @type {ClassOfServiceConfigType}
     * @memberof RoomMaskSetupType
     */
    classOfService?: ClassOfServiceConfigType;
    /**
     *
     * @type {DirectInwardDialType}
     * @memberof RoomMaskSetupType
     */
    directInwardDial?: DirectInwardDialType;
    /**
     *
     * @type {MessageWaitingType}
     * @memberof RoomMaskSetupType
     */
    messageWaiting?: MessageWaitingType;
    /**
     *
     * @type {MaskDialNumberType}
     * @memberof RoomMaskSetupType
     */
    maskDialNumber?: MaskDialNumberType;
}
/**
 * Check if a given object implements the RoomMaskSetupType interface.
 */
export declare function instanceOfRoomMaskSetupType(value: object): boolean;
export declare function RoomMaskSetupTypeFromJSON(json: any): RoomMaskSetupType;
export declare function RoomMaskSetupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomMaskSetupType;
export declare function RoomMaskSetupTypeToJSON(value?: RoomMaskSetupType | null): any;
