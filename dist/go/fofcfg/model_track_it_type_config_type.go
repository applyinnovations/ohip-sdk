/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TrackItTypeConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrackItTypeConfigType{}

// TrackItTypeConfigType Track It Type Information Type.
type TrackItTypeConfigType struct {
	// Code of the Track It Type.
	Code *string `json:"code,omitempty"`
	// Description of the Track It Code.
	Description *string `json:"description,omitempty"`
	// Display Sequence.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Property to which the Track It Code is configured.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if the Track it Code is inactive.
	Inactive *bool `json:"inactive,omitempty"`
	// Indicator to send a message to the guest when a new trackit item is created.
	IncludePromptToSendMessage *bool `json:"includePromptToSendMessage,omitempty"`
	// Code of the Message to be sent.
	MessageCode *string `json:"messageCode,omitempty"`
	TrackItGroup *TrackItGroupType `json:"trackItGroup,omitempty"`
	// Website associated with Track it type.
	Website *string `json:"website,omitempty"`
}

// NewTrackItTypeConfigType instantiates a new TrackItTypeConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrackItTypeConfigType() *TrackItTypeConfigType {
	this := TrackItTypeConfigType{}
	return &this
}

// NewTrackItTypeConfigTypeWithDefaults instantiates a new TrackItTypeConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrackItTypeConfigTypeWithDefaults() *TrackItTypeConfigType {
	this := TrackItTypeConfigType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TrackItTypeConfigType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TrackItTypeConfigType) SetDescription(v string) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *TrackItTypeConfigType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TrackItTypeConfigType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *TrackItTypeConfigType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetIncludePromptToSendMessage returns the IncludePromptToSendMessage field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetIncludePromptToSendMessage() bool {
	if o == nil || IsNil(o.IncludePromptToSendMessage) {
		var ret bool
		return ret
	}
	return *o.IncludePromptToSendMessage
}

// GetIncludePromptToSendMessageOk returns a tuple with the IncludePromptToSendMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetIncludePromptToSendMessageOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludePromptToSendMessage) {
		return nil, false
	}
	return o.IncludePromptToSendMessage, true
}

// HasIncludePromptToSendMessage returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasIncludePromptToSendMessage() bool {
	if o != nil && !IsNil(o.IncludePromptToSendMessage) {
		return true
	}

	return false
}

// SetIncludePromptToSendMessage gets a reference to the given bool and assigns it to the IncludePromptToSendMessage field.
func (o *TrackItTypeConfigType) SetIncludePromptToSendMessage(v bool) {
	o.IncludePromptToSendMessage = &v
}

// GetMessageCode returns the MessageCode field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetMessageCode() string {
	if o == nil || IsNil(o.MessageCode) {
		var ret string
		return ret
	}
	return *o.MessageCode
}

// GetMessageCodeOk returns a tuple with the MessageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetMessageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MessageCode) {
		return nil, false
	}
	return o.MessageCode, true
}

// HasMessageCode returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasMessageCode() bool {
	if o != nil && !IsNil(o.MessageCode) {
		return true
	}

	return false
}

// SetMessageCode gets a reference to the given string and assigns it to the MessageCode field.
func (o *TrackItTypeConfigType) SetMessageCode(v string) {
	o.MessageCode = &v
}

// GetTrackItGroup returns the TrackItGroup field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetTrackItGroup() TrackItGroupType {
	if o == nil || IsNil(o.TrackItGroup) {
		var ret TrackItGroupType
		return ret
	}
	return *o.TrackItGroup
}

// GetTrackItGroupOk returns a tuple with the TrackItGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetTrackItGroupOk() (*TrackItGroupType, bool) {
	if o == nil || IsNil(o.TrackItGroup) {
		return nil, false
	}
	return o.TrackItGroup, true
}

// HasTrackItGroup returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasTrackItGroup() bool {
	if o != nil && !IsNil(o.TrackItGroup) {
		return true
	}

	return false
}

// SetTrackItGroup gets a reference to the given TrackItGroupType and assigns it to the TrackItGroup field.
func (o *TrackItTypeConfigType) SetTrackItGroup(v TrackItGroupType) {
	o.TrackItGroup = &v
}

// GetWebsite returns the Website field value if set, zero value otherwise.
func (o *TrackItTypeConfigType) GetWebsite() string {
	if o == nil || IsNil(o.Website) {
		var ret string
		return ret
	}
	return *o.Website
}

// GetWebsiteOk returns a tuple with the Website field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypeConfigType) GetWebsiteOk() (*string, bool) {
	if o == nil || IsNil(o.Website) {
		return nil, false
	}
	return o.Website, true
}

// HasWebsite returns a boolean if a field has been set.
func (o *TrackItTypeConfigType) HasWebsite() bool {
	if o != nil && !IsNil(o.Website) {
		return true
	}

	return false
}

// SetWebsite gets a reference to the given string and assigns it to the Website field.
func (o *TrackItTypeConfigType) SetWebsite(v string) {
	o.Website = &v
}

func (o TrackItTypeConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrackItTypeConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.IncludePromptToSendMessage) {
		toSerialize["includePromptToSendMessage"] = o.IncludePromptToSendMessage
	}
	if !IsNil(o.MessageCode) {
		toSerialize["messageCode"] = o.MessageCode
	}
	if !IsNil(o.TrackItGroup) {
		toSerialize["trackItGroup"] = o.TrackItGroup
	}
	if !IsNil(o.Website) {
		toSerialize["website"] = o.Website
	}
	return toSerialize, nil
}

type NullableTrackItTypeConfigType struct {
	value *TrackItTypeConfigType
	isSet bool
}

func (v NullableTrackItTypeConfigType) Get() *TrackItTypeConfigType {
	return v.value
}

func (v *NullableTrackItTypeConfigType) Set(val *TrackItTypeConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrackItTypeConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrackItTypeConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrackItTypeConfigType(val *TrackItTypeConfigType) *NullableTrackItTypeConfigType {
	return &NullableTrackItTypeConfigType{value: val, isSet: true}
}

func (v NullableTrackItTypeConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrackItTypeConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

