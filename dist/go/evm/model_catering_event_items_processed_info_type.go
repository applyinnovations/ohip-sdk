/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the CateringEventItemsProcessedInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringEventItemsProcessedInfoType{}

// CateringEventItemsProcessedInfoType Status/Info of the processed items.
type CateringEventItemsProcessedInfoType struct {
	BlockId *BlockId `json:"blockId,omitempty"`
	// Name of event where item will be copied.
	EventName *string `json:"eventName,omitempty"`
	// External Quantity of Item.
	ExternalQty *int32 `json:"externalQty,omitempty"`
	// Hotel code where item will be copied.
	HotelId *string `json:"hotelId,omitempty"`
	// Internal Quantity of Item.
	InternalQty *int32 `json:"internalQty,omitempty"`
	// Name of Item.
	ItemName *string `json:"itemName,omitempty"`
	// Quantity of Item.
	Quantity *int32 `json:"quantity,omitempty"`
	// Reason for not processing the item.
	Reason *string `json:"reason,omitempty"`
	// Status of the processed event. e.g Completed, Not Processed.
	Status *string `json:"status,omitempty"`
}

// NewCateringEventItemsProcessedInfoType instantiates a new CateringEventItemsProcessedInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringEventItemsProcessedInfoType() *CateringEventItemsProcessedInfoType {
	this := CateringEventItemsProcessedInfoType{}
	return &this
}

// NewCateringEventItemsProcessedInfoTypeWithDefaults instantiates a new CateringEventItemsProcessedInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringEventItemsProcessedInfoTypeWithDefaults() *CateringEventItemsProcessedInfoType {
	this := CateringEventItemsProcessedInfoType{}
	return &this
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *CateringEventItemsProcessedInfoType) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetEventName returns the EventName field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetEventName() string {
	if o == nil || IsNil(o.EventName) {
		var ret string
		return ret
	}
	return *o.EventName
}

// GetEventNameOk returns a tuple with the EventName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetEventNameOk() (*string, bool) {
	if o == nil || IsNil(o.EventName) {
		return nil, false
	}
	return o.EventName, true
}

// HasEventName returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasEventName() bool {
	if o != nil && !IsNil(o.EventName) {
		return true
	}

	return false
}

// SetEventName gets a reference to the given string and assigns it to the EventName field.
func (o *CateringEventItemsProcessedInfoType) SetEventName(v string) {
	o.EventName = &v
}

// GetExternalQty returns the ExternalQty field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetExternalQty() int32 {
	if o == nil || IsNil(o.ExternalQty) {
		var ret int32
		return ret
	}
	return *o.ExternalQty
}

// GetExternalQtyOk returns a tuple with the ExternalQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetExternalQtyOk() (*int32, bool) {
	if o == nil || IsNil(o.ExternalQty) {
		return nil, false
	}
	return o.ExternalQty, true
}

// HasExternalQty returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasExternalQty() bool {
	if o != nil && !IsNil(o.ExternalQty) {
		return true
	}

	return false
}

// SetExternalQty gets a reference to the given int32 and assigns it to the ExternalQty field.
func (o *CateringEventItemsProcessedInfoType) SetExternalQty(v int32) {
	o.ExternalQty = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CateringEventItemsProcessedInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInternalQty returns the InternalQty field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetInternalQty() int32 {
	if o == nil || IsNil(o.InternalQty) {
		var ret int32
		return ret
	}
	return *o.InternalQty
}

// GetInternalQtyOk returns a tuple with the InternalQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetInternalQtyOk() (*int32, bool) {
	if o == nil || IsNil(o.InternalQty) {
		return nil, false
	}
	return o.InternalQty, true
}

// HasInternalQty returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasInternalQty() bool {
	if o != nil && !IsNil(o.InternalQty) {
		return true
	}

	return false
}

// SetInternalQty gets a reference to the given int32 and assigns it to the InternalQty field.
func (o *CateringEventItemsProcessedInfoType) SetInternalQty(v int32) {
	o.InternalQty = &v
}

// GetItemName returns the ItemName field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetItemName() string {
	if o == nil || IsNil(o.ItemName) {
		var ret string
		return ret
	}
	return *o.ItemName
}

// GetItemNameOk returns a tuple with the ItemName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetItemNameOk() (*string, bool) {
	if o == nil || IsNil(o.ItemName) {
		return nil, false
	}
	return o.ItemName, true
}

// HasItemName returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasItemName() bool {
	if o != nil && !IsNil(o.ItemName) {
		return true
	}

	return false
}

// SetItemName gets a reference to the given string and assigns it to the ItemName field.
func (o *CateringEventItemsProcessedInfoType) SetItemName(v string) {
	o.ItemName = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *CateringEventItemsProcessedInfoType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *CateringEventItemsProcessedInfoType) SetReason(v string) {
	o.Reason = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *CateringEventItemsProcessedInfoType) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventItemsProcessedInfoType) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *CateringEventItemsProcessedInfoType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *CateringEventItemsProcessedInfoType) SetStatus(v string) {
	o.Status = &v
}

func (o CateringEventItemsProcessedInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringEventItemsProcessedInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.EventName) {
		toSerialize["eventName"] = o.EventName
	}
	if !IsNil(o.ExternalQty) {
		toSerialize["externalQty"] = o.ExternalQty
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InternalQty) {
		toSerialize["internalQty"] = o.InternalQty
	}
	if !IsNil(o.ItemName) {
		toSerialize["itemName"] = o.ItemName
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableCateringEventItemsProcessedInfoType struct {
	value *CateringEventItemsProcessedInfoType
	isSet bool
}

func (v NullableCateringEventItemsProcessedInfoType) Get() *CateringEventItemsProcessedInfoType {
	return v.value
}

func (v *NullableCateringEventItemsProcessedInfoType) Set(val *CateringEventItemsProcessedInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringEventItemsProcessedInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringEventItemsProcessedInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringEventItemsProcessedInfoType(val *CateringEventItemsProcessedInfoType) *NullableCateringEventItemsProcessedInfoType {
	return &NullableCateringEventItemsProcessedInfoType{value: val, isSet: true}
}

func (v NullableCateringEventItemsProcessedInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringEventItemsProcessedInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

