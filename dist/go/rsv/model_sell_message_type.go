/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the SellMessageType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SellMessageType{}

// SellMessageType The SellMessagesType defines the standard attributes that will be retrieved with the sell message.
type SellMessageType struct {
	// This is the Begin date for the configured SellMessage.
	BeginDate *string `json:"beginDate,omitempty"`
	// This is the chain code.
	ChainCode *string `json:"chainCode,omitempty"`
	// This is the Central Reservation office code.
	CroCode *string `json:"croCode,omitempty"`
	// This is the hotel code or resort.
	HotelId *string `json:"hotelId,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Used to identify the source of the identifier (e.g., IATA, ABTA).
	IdContext *string `json:"idContext,omitempty"`
	// Additional identifying value assigned by the creating system.
	IdExtension *int32 `json:"idExtension,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	// This is the language code.
	LanguageCode *string `json:"languageCode,omitempty"`
	// This is the message text.
	Message *string `json:"message,omitempty"`
	// This represents the rate plan code of the room type.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// This represents the room type code.
	RoomType *string `json:"roomType,omitempty"`
	// Flag which tells if this message is Sticky (Y/N).
	StickyFlagYn *string `json:"stickyFlagYn,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
	UsedInModule *UsedInModuleType `json:"usedInModule,omitempty"`
}

// NewSellMessageType instantiates a new SellMessageType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSellMessageType() *SellMessageType {
	this := SellMessageType{}
	return &this
}

// NewSellMessageTypeWithDefaults instantiates a new SellMessageType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSellMessageTypeWithDefaults() *SellMessageType {
	this := SellMessageType{}
	return &this
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *SellMessageType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *SellMessageType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *SellMessageType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *SellMessageType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *SellMessageType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *SellMessageType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetCroCode returns the CroCode field value if set, zero value otherwise.
func (o *SellMessageType) GetCroCode() string {
	if o == nil || IsNil(o.CroCode) {
		var ret string
		return ret
	}
	return *o.CroCode
}

// GetCroCodeOk returns a tuple with the CroCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetCroCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CroCode) {
		return nil, false
	}
	return o.CroCode, true
}

// HasCroCode returns a boolean if a field has been set.
func (o *SellMessageType) HasCroCode() bool {
	if o != nil && !IsNil(o.CroCode) {
		return true
	}

	return false
}

// SetCroCode gets a reference to the given string and assigns it to the CroCode field.
func (o *SellMessageType) SetCroCode(v string) {
	o.CroCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *SellMessageType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *SellMessageType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *SellMessageType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *SellMessageType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *SellMessageType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *SellMessageType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *SellMessageType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *SellMessageType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *SellMessageType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *SellMessageType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *SellMessageType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *SellMessageType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *SellMessageType) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *SellMessageType) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *SellMessageType) SetInstance(v string) {
	o.Instance = &v
}

// GetLanguageCode returns the LanguageCode field value if set, zero value otherwise.
func (o *SellMessageType) GetLanguageCode() string {
	if o == nil || IsNil(o.LanguageCode) {
		var ret string
		return ret
	}
	return *o.LanguageCode
}

// GetLanguageCodeOk returns a tuple with the LanguageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetLanguageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.LanguageCode) {
		return nil, false
	}
	return o.LanguageCode, true
}

// HasLanguageCode returns a boolean if a field has been set.
func (o *SellMessageType) HasLanguageCode() bool {
	if o != nil && !IsNil(o.LanguageCode) {
		return true
	}

	return false
}

// SetLanguageCode gets a reference to the given string and assigns it to the LanguageCode field.
func (o *SellMessageType) SetLanguageCode(v string) {
	o.LanguageCode = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *SellMessageType) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *SellMessageType) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *SellMessageType) SetMessage(v string) {
	o.Message = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *SellMessageType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *SellMessageType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *SellMessageType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *SellMessageType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *SellMessageType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *SellMessageType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetStickyFlagYn returns the StickyFlagYn field value if set, zero value otherwise.
func (o *SellMessageType) GetStickyFlagYn() string {
	if o == nil || IsNil(o.StickyFlagYn) {
		var ret string
		return ret
	}
	return *o.StickyFlagYn
}

// GetStickyFlagYnOk returns a tuple with the StickyFlagYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetStickyFlagYnOk() (*string, bool) {
	if o == nil || IsNil(o.StickyFlagYn) {
		return nil, false
	}
	return o.StickyFlagYn, true
}

// HasStickyFlagYn returns a boolean if a field has been set.
func (o *SellMessageType) HasStickyFlagYn() bool {
	if o != nil && !IsNil(o.StickyFlagYn) {
		return true
	}

	return false
}

// SetStickyFlagYn gets a reference to the given string and assigns it to the StickyFlagYn field.
func (o *SellMessageType) SetStickyFlagYn(v string) {
	o.StickyFlagYn = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *SellMessageType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *SellMessageType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *SellMessageType) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *SellMessageType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *SellMessageType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *SellMessageType) SetUrl(v string) {
	o.Url = &v
}

// GetUsedInModule returns the UsedInModule field value if set, zero value otherwise.
func (o *SellMessageType) GetUsedInModule() UsedInModuleType {
	if o == nil || IsNil(o.UsedInModule) {
		var ret UsedInModuleType
		return ret
	}
	return *o.UsedInModule
}

// GetUsedInModuleOk returns a tuple with the UsedInModule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellMessageType) GetUsedInModuleOk() (*UsedInModuleType, bool) {
	if o == nil || IsNil(o.UsedInModule) {
		return nil, false
	}
	return o.UsedInModule, true
}

// HasUsedInModule returns a boolean if a field has been set.
func (o *SellMessageType) HasUsedInModule() bool {
	if o != nil && !IsNil(o.UsedInModule) {
		return true
	}

	return false
}

// SetUsedInModule gets a reference to the given UsedInModuleType and assigns it to the UsedInModule field.
func (o *SellMessageType) SetUsedInModule(v UsedInModuleType) {
	o.UsedInModule = &v
}

func (o SellMessageType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SellMessageType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.CroCode) {
		toSerialize["croCode"] = o.CroCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdContext) {
		toSerialize["idContext"] = o.IdContext
	}
	if !IsNil(o.IdExtension) {
		toSerialize["idExtension"] = o.IdExtension
	}
	if !IsNil(o.Instance) {
		toSerialize["instance"] = o.Instance
	}
	if !IsNil(o.LanguageCode) {
		toSerialize["languageCode"] = o.LanguageCode
	}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.StickyFlagYn) {
		toSerialize["stickyFlagYn"] = o.StickyFlagYn
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	if !IsNil(o.UsedInModule) {
		toSerialize["usedInModule"] = o.UsedInModule
	}
	return toSerialize, nil
}

type NullableSellMessageType struct {
	value *SellMessageType
	isSet bool
}

func (v NullableSellMessageType) Get() *SellMessageType {
	return v.value
}

func (v *NullableSellMessageType) Set(val *SellMessageType) {
	v.value = val
	v.isSet = true
}

func (v NullableSellMessageType) IsSet() bool {
	return v.isSet
}

func (v *NullableSellMessageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSellMessageType(val *SellMessageType) *NullableSellMessageType {
	return &NullableSellMessageType{value: val, isSet: true}
}

func (v NullableSellMessageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSellMessageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


