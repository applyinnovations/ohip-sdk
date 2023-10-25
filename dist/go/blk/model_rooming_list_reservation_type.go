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

// checks if the RoomingListReservationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomingListReservationType{}

// RoomingListReservationType This is used when changing block reservations in bulk.
type RoomingListReservationType struct {
	// An error that occurred during the processing of a message.
	Errors []ErrorType `json:"errors,omitempty"`
	HotelReservation *HotelReservationType `json:"hotelReservation,omitempty"`
	// Unique identifier that identifies the sequence of an individual rooming list reservation. The sequence will be maintained across every request and response.
	RoomingListSequence *int32 `json:"roomingListSequence,omitempty"`
	// A routing info object can either be of type Folio OR of type Room with its corresponding instructions.
	RoutingInstructions []RoutingInfoType `json:"routingInstructions,omitempty"`
	// Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors.
	Success map[string]interface{} `json:"success,omitempty"`
}

// NewRoomingListReservationType instantiates a new RoomingListReservationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomingListReservationType() *RoomingListReservationType {
	this := RoomingListReservationType{}
	return &this
}

// NewRoomingListReservationTypeWithDefaults instantiates a new RoomingListReservationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomingListReservationTypeWithDefaults() *RoomingListReservationType {
	this := RoomingListReservationType{}
	return &this
}

// GetErrors returns the Errors field value if set, zero value otherwise.
func (o *RoomingListReservationType) GetErrors() []ErrorType {
	if o == nil || IsNil(o.Errors) {
		var ret []ErrorType
		return ret
	}
	return o.Errors
}

// GetErrorsOk returns a tuple with the Errors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationType) GetErrorsOk() ([]ErrorType, bool) {
	if o == nil || IsNil(o.Errors) {
		return nil, false
	}
	return o.Errors, true
}

// HasErrors returns a boolean if a field has been set.
func (o *RoomingListReservationType) HasErrors() bool {
	if o != nil && !IsNil(o.Errors) {
		return true
	}

	return false
}

// SetErrors gets a reference to the given []ErrorType and assigns it to the Errors field.
func (o *RoomingListReservationType) SetErrors(v []ErrorType) {
	o.Errors = v
}

// GetHotelReservation returns the HotelReservation field value if set, zero value otherwise.
func (o *RoomingListReservationType) GetHotelReservation() HotelReservationType {
	if o == nil || IsNil(o.HotelReservation) {
		var ret HotelReservationType
		return ret
	}
	return *o.HotelReservation
}

// GetHotelReservationOk returns a tuple with the HotelReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationType) GetHotelReservationOk() (*HotelReservationType, bool) {
	if o == nil || IsNil(o.HotelReservation) {
		return nil, false
	}
	return o.HotelReservation, true
}

// HasHotelReservation returns a boolean if a field has been set.
func (o *RoomingListReservationType) HasHotelReservation() bool {
	if o != nil && !IsNil(o.HotelReservation) {
		return true
	}

	return false
}

// SetHotelReservation gets a reference to the given HotelReservationType and assigns it to the HotelReservation field.
func (o *RoomingListReservationType) SetHotelReservation(v HotelReservationType) {
	o.HotelReservation = &v
}

// GetRoomingListSequence returns the RoomingListSequence field value if set, zero value otherwise.
func (o *RoomingListReservationType) GetRoomingListSequence() int32 {
	if o == nil || IsNil(o.RoomingListSequence) {
		var ret int32
		return ret
	}
	return *o.RoomingListSequence
}

// GetRoomingListSequenceOk returns a tuple with the RoomingListSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationType) GetRoomingListSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomingListSequence) {
		return nil, false
	}
	return o.RoomingListSequence, true
}

// HasRoomingListSequence returns a boolean if a field has been set.
func (o *RoomingListReservationType) HasRoomingListSequence() bool {
	if o != nil && !IsNil(o.RoomingListSequence) {
		return true
	}

	return false
}

// SetRoomingListSequence gets a reference to the given int32 and assigns it to the RoomingListSequence field.
func (o *RoomingListReservationType) SetRoomingListSequence(v int32) {
	o.RoomingListSequence = &v
}

// GetRoutingInstructions returns the RoutingInstructions field value if set, zero value otherwise.
func (o *RoomingListReservationType) GetRoutingInstructions() []RoutingInfoType {
	if o == nil || IsNil(o.RoutingInstructions) {
		var ret []RoutingInfoType
		return ret
	}
	return o.RoutingInstructions
}

// GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationType) GetRoutingInstructionsOk() ([]RoutingInfoType, bool) {
	if o == nil || IsNil(o.RoutingInstructions) {
		return nil, false
	}
	return o.RoutingInstructions, true
}

// HasRoutingInstructions returns a boolean if a field has been set.
func (o *RoomingListReservationType) HasRoutingInstructions() bool {
	if o != nil && !IsNil(o.RoutingInstructions) {
		return true
	}

	return false
}

// SetRoutingInstructions gets a reference to the given []RoutingInfoType and assigns it to the RoutingInstructions field.
func (o *RoomingListReservationType) SetRoutingInstructions(v []RoutingInfoType) {
	o.RoutingInstructions = v
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *RoomingListReservationType) GetSuccess() map[string]interface{} {
	if o == nil || IsNil(o.Success) {
		var ret map[string]interface{}
		return ret
	}
	return o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomingListReservationType) GetSuccessOk() (map[string]interface{}, bool) {
	if o == nil || IsNil(o.Success) {
		return map[string]interface{}{}, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *RoomingListReservationType) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given map[string]interface{} and assigns it to the Success field.
func (o *RoomingListReservationType) SetSuccess(v map[string]interface{}) {
	o.Success = v
}

func (o RoomingListReservationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomingListReservationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Errors) {
		toSerialize["errors"] = o.Errors
	}
	if !IsNil(o.HotelReservation) {
		toSerialize["hotelReservation"] = o.HotelReservation
	}
	if !IsNil(o.RoomingListSequence) {
		toSerialize["roomingListSequence"] = o.RoomingListSequence
	}
	if !IsNil(o.RoutingInstructions) {
		toSerialize["routingInstructions"] = o.RoutingInstructions
	}
	if !IsNil(o.Success) {
		toSerialize["success"] = o.Success
	}
	return toSerialize, nil
}

type NullableRoomingListReservationType struct {
	value *RoomingListReservationType
	isSet bool
}

func (v NullableRoomingListReservationType) Get() *RoomingListReservationType {
	return v.value
}

func (v *NullableRoomingListReservationType) Set(val *RoomingListReservationType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomingListReservationType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomingListReservationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomingListReservationType(val *RoomingListReservationType) *NullableRoomingListReservationType {
	return &NullableRoomingListReservationType{value: val, isSet: true}
}

func (v NullableRoomingListReservationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomingListReservationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


