/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the HotelAttractionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelAttractionType{}

// HotelAttractionType Information about the attractions near the hotel.
type HotelAttractionType struct {
	Address *AddressType `json:"address,omitempty"`
	// The class of the attraction.
	Class *string `json:"class,omitempty"`
	Code *string `json:"code,omitempty"`
	// Display sequence of the attraction.
	DisplaySeq *int32 `json:"displaySeq,omitempty"`
	// Directions to the attraction from the hotel.
	GeneralDirections *string `json:"generalDirections,omitempty"`
	Name *TranslationTextType2000 `json:"name,omitempty"`
	// Price range for the attraction.
	OperationHours *string `json:"operationHours,omitempty"`
	// Price range for the attraction.
	PriceRange *string `json:"priceRange,omitempty"`
	RelativePosition *RelativePositionType `json:"relativePosition,omitempty"`
	// The type of the attraction.
	Type *string `json:"type,omitempty"`
	Website *URLType `json:"website,omitempty"`
}

// NewHotelAttractionType instantiates a new HotelAttractionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelAttractionType() *HotelAttractionType {
	this := HotelAttractionType{}
	return &this
}

// NewHotelAttractionTypeWithDefaults instantiates a new HotelAttractionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelAttractionTypeWithDefaults() *HotelAttractionType {
	this := HotelAttractionType{}
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *HotelAttractionType) GetAddress() AddressType {
	if o == nil || IsNil(o.Address) {
		var ret AddressType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetAddressOk() (*AddressType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *HotelAttractionType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given AddressType and assigns it to the Address field.
func (o *HotelAttractionType) SetAddress(v AddressType) {
	o.Address = &v
}

// GetClass returns the Class field value if set, zero value otherwise.
func (o *HotelAttractionType) GetClass() string {
	if o == nil || IsNil(o.Class) {
		var ret string
		return ret
	}
	return *o.Class
}

// GetClassOk returns a tuple with the Class field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetClassOk() (*string, bool) {
	if o == nil || IsNil(o.Class) {
		return nil, false
	}
	return o.Class, true
}

// HasClass returns a boolean if a field has been set.
func (o *HotelAttractionType) HasClass() bool {
	if o != nil && !IsNil(o.Class) {
		return true
	}

	return false
}

// SetClass gets a reference to the given string and assigns it to the Class field.
func (o *HotelAttractionType) SetClass(v string) {
	o.Class = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelAttractionType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelAttractionType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelAttractionType) SetCode(v string) {
	o.Code = &v
}

// GetDisplaySeq returns the DisplaySeq field value if set, zero value otherwise.
func (o *HotelAttractionType) GetDisplaySeq() int32 {
	if o == nil || IsNil(o.DisplaySeq) {
		var ret int32
		return ret
	}
	return *o.DisplaySeq
}

// GetDisplaySeqOk returns a tuple with the DisplaySeq field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetDisplaySeqOk() (*int32, bool) {
	if o == nil || IsNil(o.DisplaySeq) {
		return nil, false
	}
	return o.DisplaySeq, true
}

// HasDisplaySeq returns a boolean if a field has been set.
func (o *HotelAttractionType) HasDisplaySeq() bool {
	if o != nil && !IsNil(o.DisplaySeq) {
		return true
	}

	return false
}

// SetDisplaySeq gets a reference to the given int32 and assigns it to the DisplaySeq field.
func (o *HotelAttractionType) SetDisplaySeq(v int32) {
	o.DisplaySeq = &v
}

// GetGeneralDirections returns the GeneralDirections field value if set, zero value otherwise.
func (o *HotelAttractionType) GetGeneralDirections() string {
	if o == nil || IsNil(o.GeneralDirections) {
		var ret string
		return ret
	}
	return *o.GeneralDirections
}

// GetGeneralDirectionsOk returns a tuple with the GeneralDirections field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetGeneralDirectionsOk() (*string, bool) {
	if o == nil || IsNil(o.GeneralDirections) {
		return nil, false
	}
	return o.GeneralDirections, true
}

// HasGeneralDirections returns a boolean if a field has been set.
func (o *HotelAttractionType) HasGeneralDirections() bool {
	if o != nil && !IsNil(o.GeneralDirections) {
		return true
	}

	return false
}

// SetGeneralDirections gets a reference to the given string and assigns it to the GeneralDirections field.
func (o *HotelAttractionType) SetGeneralDirections(v string) {
	o.GeneralDirections = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *HotelAttractionType) GetName() TranslationTextType2000 {
	if o == nil || IsNil(o.Name) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetNameOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *HotelAttractionType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given TranslationTextType2000 and assigns it to the Name field.
func (o *HotelAttractionType) SetName(v TranslationTextType2000) {
	o.Name = &v
}

// GetOperationHours returns the OperationHours field value if set, zero value otherwise.
func (o *HotelAttractionType) GetOperationHours() string {
	if o == nil || IsNil(o.OperationHours) {
		var ret string
		return ret
	}
	return *o.OperationHours
}

// GetOperationHoursOk returns a tuple with the OperationHours field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetOperationHoursOk() (*string, bool) {
	if o == nil || IsNil(o.OperationHours) {
		return nil, false
	}
	return o.OperationHours, true
}

// HasOperationHours returns a boolean if a field has been set.
func (o *HotelAttractionType) HasOperationHours() bool {
	if o != nil && !IsNil(o.OperationHours) {
		return true
	}

	return false
}

// SetOperationHours gets a reference to the given string and assigns it to the OperationHours field.
func (o *HotelAttractionType) SetOperationHours(v string) {
	o.OperationHours = &v
}

// GetPriceRange returns the PriceRange field value if set, zero value otherwise.
func (o *HotelAttractionType) GetPriceRange() string {
	if o == nil || IsNil(o.PriceRange) {
		var ret string
		return ret
	}
	return *o.PriceRange
}

// GetPriceRangeOk returns a tuple with the PriceRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetPriceRangeOk() (*string, bool) {
	if o == nil || IsNil(o.PriceRange) {
		return nil, false
	}
	return o.PriceRange, true
}

// HasPriceRange returns a boolean if a field has been set.
func (o *HotelAttractionType) HasPriceRange() bool {
	if o != nil && !IsNil(o.PriceRange) {
		return true
	}

	return false
}

// SetPriceRange gets a reference to the given string and assigns it to the PriceRange field.
func (o *HotelAttractionType) SetPriceRange(v string) {
	o.PriceRange = &v
}

// GetRelativePosition returns the RelativePosition field value if set, zero value otherwise.
func (o *HotelAttractionType) GetRelativePosition() RelativePositionType {
	if o == nil || IsNil(o.RelativePosition) {
		var ret RelativePositionType
		return ret
	}
	return *o.RelativePosition
}

// GetRelativePositionOk returns a tuple with the RelativePosition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetRelativePositionOk() (*RelativePositionType, bool) {
	if o == nil || IsNil(o.RelativePosition) {
		return nil, false
	}
	return o.RelativePosition, true
}

// HasRelativePosition returns a boolean if a field has been set.
func (o *HotelAttractionType) HasRelativePosition() bool {
	if o != nil && !IsNil(o.RelativePosition) {
		return true
	}

	return false
}

// SetRelativePosition gets a reference to the given RelativePositionType and assigns it to the RelativePosition field.
func (o *HotelAttractionType) SetRelativePosition(v RelativePositionType) {
	o.RelativePosition = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *HotelAttractionType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *HotelAttractionType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *HotelAttractionType) SetType(v string) {
	o.Type = &v
}

// GetWebsite returns the Website field value if set, zero value otherwise.
func (o *HotelAttractionType) GetWebsite() URLType {
	if o == nil || IsNil(o.Website) {
		var ret URLType
		return ret
	}
	return *o.Website
}

// GetWebsiteOk returns a tuple with the Website field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelAttractionType) GetWebsiteOk() (*URLType, bool) {
	if o == nil || IsNil(o.Website) {
		return nil, false
	}
	return o.Website, true
}

// HasWebsite returns a boolean if a field has been set.
func (o *HotelAttractionType) HasWebsite() bool {
	if o != nil && !IsNil(o.Website) {
		return true
	}

	return false
}

// SetWebsite gets a reference to the given URLType and assigns it to the Website field.
func (o *HotelAttractionType) SetWebsite(v URLType) {
	o.Website = &v
}

func (o HotelAttractionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelAttractionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.Class) {
		toSerialize["class"] = o.Class
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DisplaySeq) {
		toSerialize["displaySeq"] = o.DisplaySeq
	}
	if !IsNil(o.GeneralDirections) {
		toSerialize["generalDirections"] = o.GeneralDirections
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.OperationHours) {
		toSerialize["operationHours"] = o.OperationHours
	}
	if !IsNil(o.PriceRange) {
		toSerialize["priceRange"] = o.PriceRange
	}
	if !IsNil(o.RelativePosition) {
		toSerialize["relativePosition"] = o.RelativePosition
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Website) {
		toSerialize["website"] = o.Website
	}
	return toSerialize, nil
}

type NullableHotelAttractionType struct {
	value *HotelAttractionType
	isSet bool
}

func (v NullableHotelAttractionType) Get() *HotelAttractionType {
	return v.value
}

func (v *NullableHotelAttractionType) Set(val *HotelAttractionType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelAttractionType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelAttractionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelAttractionType(val *HotelAttractionType) *NullableHotelAttractionType {
	return &NullableHotelAttractionType{value: val, isSet: true}
}

func (v NullableHotelAttractionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelAttractionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


