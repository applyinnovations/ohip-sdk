/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomTypeInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeInfoType{}

// RoomTypeInfoType struct for RoomTypeInfoType
type RoomTypeInfoType struct {
	// Indicates whether room type is accessible or not.
	Accessible *bool `json:"accessible,omitempty"`
	BedType *BedTypeInfoType `json:"bedType,omitempty"`
	// Bed type code associated with room.
	BedTypeCodes []string `json:"bedTypeCodes,omitempty"`
	// Booking Channels mapping for the Room Type.
	BookingChannelMappings []BookingChannelMappingType `json:"bookingChannelMappings,omitempty"`
	// Indicates room type is a Component Room.
	Component *bool `json:"component,omitempty"`
	Description *string `json:"description,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	// Block code.
	InvBlockCode *string `json:"invBlockCode,omitempty"`
	// Detail description of the Room Type.
	LongDescription *string `json:"longDescription,omitempty"`
	// Represents the promotional code.
	PromotionCode *string `json:"promotionCode,omitempty"`
	RoomClass *string `json:"roomClass,omitempty"`
	// A recurring element that identifies the room features.
	RoomFeatures []RoomFeatureType `json:"roomFeatures,omitempty"`
	// Represents the room qualifier code like Deluxe,Economy,Suite etc.
	RoomQualifierCode *string `json:"roomQualifierCode,omitempty"`
	// Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code.
	RoomQualifierMatchIndicator *string `json:"roomQualifierMatchIndicator,omitempty"`
	RoomType *string `json:"roomType,omitempty"`
	RoomTypeAttributes *RoomTypeAttributesType `json:"roomTypeAttributes,omitempty"`
	// Represents the room view code like City view, River view, Ocean view etc.
	RoomViewCode *string `json:"roomViewCode,omitempty"`
	// Indicates room type is a suite.
	Suite *bool `json:"suite,omitempty"`
	// Name corresponding to a RoomType.
	WebName *string `json:"webName,omitempty"`
	// URL providing more information about the Room Type.
	WebPage *string `json:"webPage,omitempty"`
}

// NewRoomTypeInfoType instantiates a new RoomTypeInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeInfoType() *RoomTypeInfoType {
	this := RoomTypeInfoType{}
	return &this
}

// NewRoomTypeInfoTypeWithDefaults instantiates a new RoomTypeInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeInfoTypeWithDefaults() *RoomTypeInfoType {
	this := RoomTypeInfoType{}
	return &this
}

// GetAccessible returns the Accessible field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetAccessible() bool {
	if o == nil || IsNil(o.Accessible) {
		var ret bool
		return ret
	}
	return *o.Accessible
}

// GetAccessibleOk returns a tuple with the Accessible field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetAccessibleOk() (*bool, bool) {
	if o == nil || IsNil(o.Accessible) {
		return nil, false
	}
	return o.Accessible, true
}

// HasAccessible returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasAccessible() bool {
	if o != nil && !IsNil(o.Accessible) {
		return true
	}

	return false
}

// SetAccessible gets a reference to the given bool and assigns it to the Accessible field.
func (o *RoomTypeInfoType) SetAccessible(v bool) {
	o.Accessible = &v
}

// GetBedType returns the BedType field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetBedType() BedTypeInfoType {
	if o == nil || IsNil(o.BedType) {
		var ret BedTypeInfoType
		return ret
	}
	return *o.BedType
}

// GetBedTypeOk returns a tuple with the BedType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetBedTypeOk() (*BedTypeInfoType, bool) {
	if o == nil || IsNil(o.BedType) {
		return nil, false
	}
	return o.BedType, true
}

// HasBedType returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasBedType() bool {
	if o != nil && !IsNil(o.BedType) {
		return true
	}

	return false
}

// SetBedType gets a reference to the given BedTypeInfoType and assigns it to the BedType field.
func (o *RoomTypeInfoType) SetBedType(v BedTypeInfoType) {
	o.BedType = &v
}

// GetBedTypeCodes returns the BedTypeCodes field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetBedTypeCodes() []string {
	if o == nil || IsNil(o.BedTypeCodes) {
		var ret []string
		return ret
	}
	return o.BedTypeCodes
}

// GetBedTypeCodesOk returns a tuple with the BedTypeCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetBedTypeCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.BedTypeCodes) {
		return nil, false
	}
	return o.BedTypeCodes, true
}

// HasBedTypeCodes returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasBedTypeCodes() bool {
	if o != nil && !IsNil(o.BedTypeCodes) {
		return true
	}

	return false
}

// SetBedTypeCodes gets a reference to the given []string and assigns it to the BedTypeCodes field.
func (o *RoomTypeInfoType) SetBedTypeCodes(v []string) {
	o.BedTypeCodes = v
}

// GetBookingChannelMappings returns the BookingChannelMappings field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetBookingChannelMappings() []BookingChannelMappingType {
	if o == nil || IsNil(o.BookingChannelMappings) {
		var ret []BookingChannelMappingType
		return ret
	}
	return o.BookingChannelMappings
}

// GetBookingChannelMappingsOk returns a tuple with the BookingChannelMappings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetBookingChannelMappingsOk() ([]BookingChannelMappingType, bool) {
	if o == nil || IsNil(o.BookingChannelMappings) {
		return nil, false
	}
	return o.BookingChannelMappings, true
}

// HasBookingChannelMappings returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasBookingChannelMappings() bool {
	if o != nil && !IsNil(o.BookingChannelMappings) {
		return true
	}

	return false
}

// SetBookingChannelMappings gets a reference to the given []BookingChannelMappingType and assigns it to the BookingChannelMappings field.
func (o *RoomTypeInfoType) SetBookingChannelMappings(v []BookingChannelMappingType) {
	o.BookingChannelMappings = v
}

// GetComponent returns the Component field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetComponent() bool {
	if o == nil || IsNil(o.Component) {
		var ret bool
		return ret
	}
	return *o.Component
}

// GetComponentOk returns a tuple with the Component field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetComponentOk() (*bool, bool) {
	if o == nil || IsNil(o.Component) {
		return nil, false
	}
	return o.Component, true
}

// HasComponent returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasComponent() bool {
	if o != nil && !IsNil(o.Component) {
		return true
	}

	return false
}

// SetComponent gets a reference to the given bool and assigns it to the Component field.
func (o *RoomTypeInfoType) SetComponent(v bool) {
	o.Component = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RoomTypeInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomTypeInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInvBlockCode returns the InvBlockCode field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetInvBlockCode() string {
	if o == nil || IsNil(o.InvBlockCode) {
		var ret string
		return ret
	}
	return *o.InvBlockCode
}

// GetInvBlockCodeOk returns a tuple with the InvBlockCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetInvBlockCodeOk() (*string, bool) {
	if o == nil || IsNil(o.InvBlockCode) {
		return nil, false
	}
	return o.InvBlockCode, true
}

// HasInvBlockCode returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasInvBlockCode() bool {
	if o != nil && !IsNil(o.InvBlockCode) {
		return true
	}

	return false
}

// SetInvBlockCode gets a reference to the given string and assigns it to the InvBlockCode field.
func (o *RoomTypeInfoType) SetInvBlockCode(v string) {
	o.InvBlockCode = &v
}

// GetLongDescription returns the LongDescription field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetLongDescription() string {
	if o == nil || IsNil(o.LongDescription) {
		var ret string
		return ret
	}
	return *o.LongDescription
}

// GetLongDescriptionOk returns a tuple with the LongDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetLongDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.LongDescription) {
		return nil, false
	}
	return o.LongDescription, true
}

// HasLongDescription returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasLongDescription() bool {
	if o != nil && !IsNil(o.LongDescription) {
		return true
	}

	return false
}

// SetLongDescription gets a reference to the given string and assigns it to the LongDescription field.
func (o *RoomTypeInfoType) SetLongDescription(v string) {
	o.LongDescription = &v
}

// GetPromotionCode returns the PromotionCode field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetPromotionCode() string {
	if o == nil || IsNil(o.PromotionCode) {
		var ret string
		return ret
	}
	return *o.PromotionCode
}

// GetPromotionCodeOk returns a tuple with the PromotionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetPromotionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PromotionCode) {
		return nil, false
	}
	return o.PromotionCode, true
}

// HasPromotionCode returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasPromotionCode() bool {
	if o != nil && !IsNil(o.PromotionCode) {
		return true
	}

	return false
}

// SetPromotionCode gets a reference to the given string and assigns it to the PromotionCode field.
func (o *RoomTypeInfoType) SetPromotionCode(v string) {
	o.PromotionCode = &v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomClass() string {
	if o == nil || IsNil(o.RoomClass) {
		var ret string
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given string and assigns it to the RoomClass field.
func (o *RoomTypeInfoType) SetRoomClass(v string) {
	o.RoomClass = &v
}

// GetRoomFeatures returns the RoomFeatures field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomFeatures() []RoomFeatureType {
	if o == nil || IsNil(o.RoomFeatures) {
		var ret []RoomFeatureType
		return ret
	}
	return o.RoomFeatures
}

// GetRoomFeaturesOk returns a tuple with the RoomFeatures field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomFeaturesOk() ([]RoomFeatureType, bool) {
	if o == nil || IsNil(o.RoomFeatures) {
		return nil, false
	}
	return o.RoomFeatures, true
}

// HasRoomFeatures returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomFeatures() bool {
	if o != nil && !IsNil(o.RoomFeatures) {
		return true
	}

	return false
}

// SetRoomFeatures gets a reference to the given []RoomFeatureType and assigns it to the RoomFeatures field.
func (o *RoomTypeInfoType) SetRoomFeatures(v []RoomFeatureType) {
	o.RoomFeatures = v
}

// GetRoomQualifierCode returns the RoomQualifierCode field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomQualifierCode() string {
	if o == nil || IsNil(o.RoomQualifierCode) {
		var ret string
		return ret
	}
	return *o.RoomQualifierCode
}

// GetRoomQualifierCodeOk returns a tuple with the RoomQualifierCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomQualifierCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomQualifierCode) {
		return nil, false
	}
	return o.RoomQualifierCode, true
}

// HasRoomQualifierCode returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomQualifierCode() bool {
	if o != nil && !IsNil(o.RoomQualifierCode) {
		return true
	}

	return false
}

// SetRoomQualifierCode gets a reference to the given string and assigns it to the RoomQualifierCode field.
func (o *RoomTypeInfoType) SetRoomQualifierCode(v string) {
	o.RoomQualifierCode = &v
}

// GetRoomQualifierMatchIndicator returns the RoomQualifierMatchIndicator field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomQualifierMatchIndicator() string {
	if o == nil || IsNil(o.RoomQualifierMatchIndicator) {
		var ret string
		return ret
	}
	return *o.RoomQualifierMatchIndicator
}

// GetRoomQualifierMatchIndicatorOk returns a tuple with the RoomQualifierMatchIndicator field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomQualifierMatchIndicatorOk() (*string, bool) {
	if o == nil || IsNil(o.RoomQualifierMatchIndicator) {
		return nil, false
	}
	return o.RoomQualifierMatchIndicator, true
}

// HasRoomQualifierMatchIndicator returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomQualifierMatchIndicator() bool {
	if o != nil && !IsNil(o.RoomQualifierMatchIndicator) {
		return true
	}

	return false
}

// SetRoomQualifierMatchIndicator gets a reference to the given string and assigns it to the RoomQualifierMatchIndicator field.
func (o *RoomTypeInfoType) SetRoomQualifierMatchIndicator(v string) {
	o.RoomQualifierMatchIndicator = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RoomTypeInfoType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRoomTypeAttributes returns the RoomTypeAttributes field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomTypeAttributes() RoomTypeAttributesType {
	if o == nil || IsNil(o.RoomTypeAttributes) {
		var ret RoomTypeAttributesType
		return ret
	}
	return *o.RoomTypeAttributes
}

// GetRoomTypeAttributesOk returns a tuple with the RoomTypeAttributes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomTypeAttributesOk() (*RoomTypeAttributesType, bool) {
	if o == nil || IsNil(o.RoomTypeAttributes) {
		return nil, false
	}
	return o.RoomTypeAttributes, true
}

// HasRoomTypeAttributes returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomTypeAttributes() bool {
	if o != nil && !IsNil(o.RoomTypeAttributes) {
		return true
	}

	return false
}

// SetRoomTypeAttributes gets a reference to the given RoomTypeAttributesType and assigns it to the RoomTypeAttributes field.
func (o *RoomTypeInfoType) SetRoomTypeAttributes(v RoomTypeAttributesType) {
	o.RoomTypeAttributes = &v
}

// GetRoomViewCode returns the RoomViewCode field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetRoomViewCode() string {
	if o == nil || IsNil(o.RoomViewCode) {
		var ret string
		return ret
	}
	return *o.RoomViewCode
}

// GetRoomViewCodeOk returns a tuple with the RoomViewCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetRoomViewCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomViewCode) {
		return nil, false
	}
	return o.RoomViewCode, true
}

// HasRoomViewCode returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasRoomViewCode() bool {
	if o != nil && !IsNil(o.RoomViewCode) {
		return true
	}

	return false
}

// SetRoomViewCode gets a reference to the given string and assigns it to the RoomViewCode field.
func (o *RoomTypeInfoType) SetRoomViewCode(v string) {
	o.RoomViewCode = &v
}

// GetSuite returns the Suite field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetSuite() bool {
	if o == nil || IsNil(o.Suite) {
		var ret bool
		return ret
	}
	return *o.Suite
}

// GetSuiteOk returns a tuple with the Suite field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetSuiteOk() (*bool, bool) {
	if o == nil || IsNil(o.Suite) {
		return nil, false
	}
	return o.Suite, true
}

// HasSuite returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasSuite() bool {
	if o != nil && !IsNil(o.Suite) {
		return true
	}

	return false
}

// SetSuite gets a reference to the given bool and assigns it to the Suite field.
func (o *RoomTypeInfoType) SetSuite(v bool) {
	o.Suite = &v
}

// GetWebName returns the WebName field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetWebName() string {
	if o == nil || IsNil(o.WebName) {
		var ret string
		return ret
	}
	return *o.WebName
}

// GetWebNameOk returns a tuple with the WebName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetWebNameOk() (*string, bool) {
	if o == nil || IsNil(o.WebName) {
		return nil, false
	}
	return o.WebName, true
}

// HasWebName returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasWebName() bool {
	if o != nil && !IsNil(o.WebName) {
		return true
	}

	return false
}

// SetWebName gets a reference to the given string and assigns it to the WebName field.
func (o *RoomTypeInfoType) SetWebName(v string) {
	o.WebName = &v
}

// GetWebPage returns the WebPage field value if set, zero value otherwise.
func (o *RoomTypeInfoType) GetWebPage() string {
	if o == nil || IsNil(o.WebPage) {
		var ret string
		return ret
	}
	return *o.WebPage
}

// GetWebPageOk returns a tuple with the WebPage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeInfoType) GetWebPageOk() (*string, bool) {
	if o == nil || IsNil(o.WebPage) {
		return nil, false
	}
	return o.WebPage, true
}

// HasWebPage returns a boolean if a field has been set.
func (o *RoomTypeInfoType) HasWebPage() bool {
	if o != nil && !IsNil(o.WebPage) {
		return true
	}

	return false
}

// SetWebPage gets a reference to the given string and assigns it to the WebPage field.
func (o *RoomTypeInfoType) SetWebPage(v string) {
	o.WebPage = &v
}

func (o RoomTypeInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Accessible) {
		toSerialize["accessible"] = o.Accessible
	}
	if !IsNil(o.BedType) {
		toSerialize["bedType"] = o.BedType
	}
	if !IsNil(o.BedTypeCodes) {
		toSerialize["bedTypeCodes"] = o.BedTypeCodes
	}
	if !IsNil(o.BookingChannelMappings) {
		toSerialize["bookingChannelMappings"] = o.BookingChannelMappings
	}
	if !IsNil(o.Component) {
		toSerialize["component"] = o.Component
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InvBlockCode) {
		toSerialize["invBlockCode"] = o.InvBlockCode
	}
	if !IsNil(o.LongDescription) {
		toSerialize["longDescription"] = o.LongDescription
	}
	if !IsNil(o.PromotionCode) {
		toSerialize["promotionCode"] = o.PromotionCode
	}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.RoomFeatures) {
		toSerialize["roomFeatures"] = o.RoomFeatures
	}
	if !IsNil(o.RoomQualifierCode) {
		toSerialize["roomQualifierCode"] = o.RoomQualifierCode
	}
	if !IsNil(o.RoomQualifierMatchIndicator) {
		toSerialize["roomQualifierMatchIndicator"] = o.RoomQualifierMatchIndicator
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RoomTypeAttributes) {
		toSerialize["roomTypeAttributes"] = o.RoomTypeAttributes
	}
	if !IsNil(o.RoomViewCode) {
		toSerialize["roomViewCode"] = o.RoomViewCode
	}
	if !IsNil(o.Suite) {
		toSerialize["suite"] = o.Suite
	}
	if !IsNil(o.WebName) {
		toSerialize["webName"] = o.WebName
	}
	if !IsNil(o.WebPage) {
		toSerialize["webPage"] = o.WebPage
	}
	return toSerialize, nil
}

type NullableRoomTypeInfoType struct {
	value *RoomTypeInfoType
	isSet bool
}

func (v NullableRoomTypeInfoType) Get() *RoomTypeInfoType {
	return v.value
}

func (v *NullableRoomTypeInfoType) Set(val *RoomTypeInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeInfoType(val *RoomTypeInfoType) *NullableRoomTypeInfoType {
	return &NullableRoomTypeInfoType{value: val, isSet: true}
}

func (v NullableRoomTypeInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


