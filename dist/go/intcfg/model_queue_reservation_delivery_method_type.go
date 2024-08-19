/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the QueueReservationDeliveryMethodType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &QueueReservationDeliveryMethodType{}

// QueueReservationDeliveryMethodType Queue reservation delivery method configuration, settings for Text Message Delivery of Queue Reservation status
type QueueReservationDeliveryMethodType struct {
	TextMessage *TextMessageDeliveryConfigurationType `json:"textMessage,omitempty"`
}

// NewQueueReservationDeliveryMethodType instantiates a new QueueReservationDeliveryMethodType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewQueueReservationDeliveryMethodType() *QueueReservationDeliveryMethodType {
	this := QueueReservationDeliveryMethodType{}
	return &this
}

// NewQueueReservationDeliveryMethodTypeWithDefaults instantiates a new QueueReservationDeliveryMethodType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewQueueReservationDeliveryMethodTypeWithDefaults() *QueueReservationDeliveryMethodType {
	this := QueueReservationDeliveryMethodType{}
	return &this
}

// GetTextMessage returns the TextMessage field value if set, zero value otherwise.
func (o *QueueReservationDeliveryMethodType) GetTextMessage() TextMessageDeliveryConfigurationType {
	if o == nil || IsNil(o.TextMessage) {
		var ret TextMessageDeliveryConfigurationType
		return ret
	}
	return *o.TextMessage
}

// GetTextMessageOk returns a tuple with the TextMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QueueReservationDeliveryMethodType) GetTextMessageOk() (*TextMessageDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.TextMessage) {
		return nil, false
	}
	return o.TextMessage, true
}

// HasTextMessage returns a boolean if a field has been set.
func (o *QueueReservationDeliveryMethodType) HasTextMessage() bool {
	if o != nil && !IsNil(o.TextMessage) {
		return true
	}

	return false
}

// SetTextMessage gets a reference to the given TextMessageDeliveryConfigurationType and assigns it to the TextMessage field.
func (o *QueueReservationDeliveryMethodType) SetTextMessage(v TextMessageDeliveryConfigurationType) {
	o.TextMessage = &v
}

func (o QueueReservationDeliveryMethodType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o QueueReservationDeliveryMethodType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.TextMessage) {
		toSerialize["textMessage"] = o.TextMessage
	}
	return toSerialize, nil
}

type NullableQueueReservationDeliveryMethodType struct {
	value *QueueReservationDeliveryMethodType
	isSet bool
}

func (v NullableQueueReservationDeliveryMethodType) Get() *QueueReservationDeliveryMethodType {
	return v.value
}

func (v *NullableQueueReservationDeliveryMethodType) Set(val *QueueReservationDeliveryMethodType) {
	v.value = val
	v.isSet = true
}

func (v NullableQueueReservationDeliveryMethodType) IsSet() bool {
	return v.isSet
}

func (v *NullableQueueReservationDeliveryMethodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableQueueReservationDeliveryMethodType(val *QueueReservationDeliveryMethodType) *NullableQueueReservationDeliveryMethodType {
	return &NullableQueueReservationDeliveryMethodType{value: val, isSet: true}
}

func (v NullableQueueReservationDeliveryMethodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableQueueReservationDeliveryMethodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


