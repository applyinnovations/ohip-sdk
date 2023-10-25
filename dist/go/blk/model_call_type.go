/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CallType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CallType{}

// CallType Holds call information.
type CallType struct {
	Caller *CallerType `json:"caller,omitempty"`
	// Call comments.
	Comments *string `json:"comments,omitempty"`
	DateTimeSpan *DateTimeSpanType `json:"dateTimeSpan,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Used to identify the source of the identifier (e.g., IATA, ABTA).
	IdContext *string `json:"idContext,omitempty"`
	// Additional identifying value assigned by the creating system.
	IdExtension *int32 `json:"idExtension,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	Reservation *CallTypeReservation `json:"reservation,omitempty"`
	// Call turn away code.
	TurnawayCode *string `json:"turnawayCode,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
}

// NewCallType instantiates a new CallType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCallType() *CallType {
	this := CallType{}
	return &this
}

// NewCallTypeWithDefaults instantiates a new CallType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCallTypeWithDefaults() *CallType {
	this := CallType{}
	return &this
}

// GetCaller returns the Caller field value if set, zero value otherwise.
func (o *CallType) GetCaller() CallerType {
	if o == nil || IsNil(o.Caller) {
		var ret CallerType
		return ret
	}
	return *o.Caller
}

// GetCallerOk returns a tuple with the Caller field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetCallerOk() (*CallerType, bool) {
	if o == nil || IsNil(o.Caller) {
		return nil, false
	}
	return o.Caller, true
}

// HasCaller returns a boolean if a field has been set.
func (o *CallType) HasCaller() bool {
	if o != nil && !IsNil(o.Caller) {
		return true
	}

	return false
}

// SetCaller gets a reference to the given CallerType and assigns it to the Caller field.
func (o *CallType) SetCaller(v CallerType) {
	o.Caller = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *CallType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *CallType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *CallType) SetComments(v string) {
	o.Comments = &v
}

// GetDateTimeSpan returns the DateTimeSpan field value if set, zero value otherwise.
func (o *CallType) GetDateTimeSpan() DateTimeSpanType {
	if o == nil || IsNil(o.DateTimeSpan) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.DateTimeSpan
}

// GetDateTimeSpanOk returns a tuple with the DateTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetDateTimeSpanOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.DateTimeSpan) {
		return nil, false
	}
	return o.DateTimeSpan, true
}

// HasDateTimeSpan returns a boolean if a field has been set.
func (o *CallType) HasDateTimeSpan() bool {
	if o != nil && !IsNil(o.DateTimeSpan) {
		return true
	}

	return false
}

// SetDateTimeSpan gets a reference to the given DateTimeSpanType and assigns it to the DateTimeSpan field.
func (o *CallType) SetDateTimeSpan(v DateTimeSpanType) {
	o.DateTimeSpan = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *CallType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *CallType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *CallType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *CallType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *CallType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *CallType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *CallType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *CallType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *CallType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *CallType) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *CallType) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *CallType) SetInstance(v string) {
	o.Instance = &v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *CallType) GetReservation() CallTypeReservation {
	if o == nil || IsNil(o.Reservation) {
		var ret CallTypeReservation
		return ret
	}
	return *o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetReservationOk() (*CallTypeReservation, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *CallType) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given CallTypeReservation and assigns it to the Reservation field.
func (o *CallType) SetReservation(v CallTypeReservation) {
	o.Reservation = &v
}

// GetTurnawayCode returns the TurnawayCode field value if set, zero value otherwise.
func (o *CallType) GetTurnawayCode() string {
	if o == nil || IsNil(o.TurnawayCode) {
		var ret string
		return ret
	}
	return *o.TurnawayCode
}

// GetTurnawayCodeOk returns a tuple with the TurnawayCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetTurnawayCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TurnawayCode) {
		return nil, false
	}
	return o.TurnawayCode, true
}

// HasTurnawayCode returns a boolean if a field has been set.
func (o *CallType) HasTurnawayCode() bool {
	if o != nil && !IsNil(o.TurnawayCode) {
		return true
	}

	return false
}

// SetTurnawayCode gets a reference to the given string and assigns it to the TurnawayCode field.
func (o *CallType) SetTurnawayCode(v string) {
	o.TurnawayCode = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *CallType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *CallType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *CallType) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *CallType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *CallType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *CallType) SetUrl(v string) {
	o.Url = &v
}

func (o CallType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CallType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Caller) {
		toSerialize["caller"] = o.Caller
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.DateTimeSpan) {
		toSerialize["dateTimeSpan"] = o.DateTimeSpan
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
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.TurnawayCode) {
		toSerialize["turnawayCode"] = o.TurnawayCode
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableCallType struct {
	value *CallType
	isSet bool
}

func (v NullableCallType) Get() *CallType {
	return v.value
}

func (v *NullableCallType) Set(val *CallType) {
	v.value = val
	v.isSet = true
}

func (v NullableCallType) IsSet() bool {
	return v.isSet
}

func (v *NullableCallType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCallType(val *CallType) *NullableCallType {
	return &NullableCallType{value: val, isSet: true}
}

func (v NullableCallType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCallType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


