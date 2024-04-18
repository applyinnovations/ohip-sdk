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

// checks if the RoomTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeType{}

// RoomTypeType This type represents the room type attributes.
type RoomTypeType struct {
	// Indicates if room type is accessible.
	Accessible *bool `json:"accessible,omitempty"`
	// Active date of the room type.
	ActiveDate *string `json:"activeDate,omitempty"`
	// Creates a new linked Reservation, and proceeds within check-in of the new reservation.
	AutoCheckin *bool `json:"autoCheckin,omitempty"`
	// Room type is automatically attached when new rate codes are created.
	AutoPopulate *bool `json:"autoPopulate,omitempty"`
	// Room number is automatically assigned when a reservation is made for this Room Type.
	AutoRoomAssign *bool `json:"autoRoomAssign,omitempty"`
	// Bed type of room type.
	BedType *string `json:"bedType,omitempty"`
	// Contains room components of a component room type.
	Components []RoomTypeComponentType `json:"components,omitempty"`
	// Default occupancy for the room type.
	DefaultOccupancy *float32 `json:"defaultOccupancy,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// A recurring element that identifies the room features.
	Features []RoomFeatureType `json:"features,omitempty"`
	// Indicates room type is generic.
	Generic *bool `json:"generic,omitempty"`
	// Room type shows in house keeping.
	HouseKeeping *bool `json:"houseKeeping,omitempty"`
	// Is Room type inactive?
	Inactive *bool `json:"inactive,omitempty"`
	// Room type info URL.
	InfoURL *string `json:"infoURL,omitempty"`
	// Indicates room type is available for maintenance request.
	Maintenance *bool `json:"maintenance,omitempty"`
	// Maximum Adults for the room type.
	MaxAdults *int32 `json:"maxAdults,omitempty"`
	// Maximum Children for the room type.
	MaxChildren *int32 `json:"maxChildren,omitempty"`
	// Maximum occupancy for the room type.
	MaximumOccupancy *int32 `json:"maximumOccupancy,omitempty"`
	// Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types.
	MeetingRoom *bool `json:"meetingRoom,omitempty"`
	// Minimum occupancy for the room type.
	MinimumOccupancy *int32 `json:"minimumOccupancy,omitempty"`
	// New Room type code. (Used in change template room type operation)
	NewRoomType *string `json:"newRoomType,omitempty"`
	// Number of rooms for this room type.
	NumberOfRooms *int32 `json:"numberOfRooms,omitempty"`
	// Indicates if room type is pseudo.
	Pseudo *bool `json:"pseudo,omitempty"`
	// This value will control the minimum amount that the selected room type can be sold
	RateFloor *float32 `json:"rateFloor,omitempty"`
	// Room class for the room type code.
	RoomClass *string `json:"roomClass,omitempty"`
	RoomType *string `json:"roomType,omitempty"`
	// Indicates room types sell sequence.
	SellSequence *float32 `json:"sellSequence,omitempty"`
	// Indicates room type is sent to interface.
	SendToInterface *bool `json:"sendToInterface,omitempty"`
	ShortDescription *TranslationTextType2000 `json:"shortDescription,omitempty"`
	// Specifies the smoking preference for this room type. I.E. SM, NS.
	SmokingPreference *string `json:"smokingPreference,omitempty"`
	Suite *RoomTypeTypeSuite `json:"suite,omitempty"`
	// Yield category for this room type (Available when a yield integration add-on license is active and when room type is Yieldable.)
	YieldCategory *string `json:"yieldCategory,omitempty"`
	YieldStatus *RoomTypeYieldableType `json:"yieldStatus,omitempty"`
}

// NewRoomTypeType instantiates a new RoomTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeType() *RoomTypeType {
	this := RoomTypeType{}
	return &this
}

// NewRoomTypeTypeWithDefaults instantiates a new RoomTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeTypeWithDefaults() *RoomTypeType {
	this := RoomTypeType{}
	return &this
}

// GetAccessible returns the Accessible field value if set, zero value otherwise.
func (o *RoomTypeType) GetAccessible() bool {
	if o == nil || IsNil(o.Accessible) {
		var ret bool
		return ret
	}
	return *o.Accessible
}

// GetAccessibleOk returns a tuple with the Accessible field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetAccessibleOk() (*bool, bool) {
	if o == nil || IsNil(o.Accessible) {
		return nil, false
	}
	return o.Accessible, true
}

// HasAccessible returns a boolean if a field has been set.
func (o *RoomTypeType) HasAccessible() bool {
	if o != nil && !IsNil(o.Accessible) {
		return true
	}

	return false
}

// SetAccessible gets a reference to the given bool and assigns it to the Accessible field.
func (o *RoomTypeType) SetAccessible(v bool) {
	o.Accessible = &v
}

// GetActiveDate returns the ActiveDate field value if set, zero value otherwise.
func (o *RoomTypeType) GetActiveDate() string {
	if o == nil || IsNil(o.ActiveDate) {
		var ret string
		return ret
	}
	return *o.ActiveDate
}

// GetActiveDateOk returns a tuple with the ActiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetActiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.ActiveDate) {
		return nil, false
	}
	return o.ActiveDate, true
}

// HasActiveDate returns a boolean if a field has been set.
func (o *RoomTypeType) HasActiveDate() bool {
	if o != nil && !IsNil(o.ActiveDate) {
		return true
	}

	return false
}

// SetActiveDate gets a reference to the given string and assigns it to the ActiveDate field.
func (o *RoomTypeType) SetActiveDate(v string) {
	o.ActiveDate = &v
}

// GetAutoCheckin returns the AutoCheckin field value if set, zero value otherwise.
func (o *RoomTypeType) GetAutoCheckin() bool {
	if o == nil || IsNil(o.AutoCheckin) {
		var ret bool
		return ret
	}
	return *o.AutoCheckin
}

// GetAutoCheckinOk returns a tuple with the AutoCheckin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetAutoCheckinOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoCheckin) {
		return nil, false
	}
	return o.AutoCheckin, true
}

// HasAutoCheckin returns a boolean if a field has been set.
func (o *RoomTypeType) HasAutoCheckin() bool {
	if o != nil && !IsNil(o.AutoCheckin) {
		return true
	}

	return false
}

// SetAutoCheckin gets a reference to the given bool and assigns it to the AutoCheckin field.
func (o *RoomTypeType) SetAutoCheckin(v bool) {
	o.AutoCheckin = &v
}

// GetAutoPopulate returns the AutoPopulate field value if set, zero value otherwise.
func (o *RoomTypeType) GetAutoPopulate() bool {
	if o == nil || IsNil(o.AutoPopulate) {
		var ret bool
		return ret
	}
	return *o.AutoPopulate
}

// GetAutoPopulateOk returns a tuple with the AutoPopulate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetAutoPopulateOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoPopulate) {
		return nil, false
	}
	return o.AutoPopulate, true
}

// HasAutoPopulate returns a boolean if a field has been set.
func (o *RoomTypeType) HasAutoPopulate() bool {
	if o != nil && !IsNil(o.AutoPopulate) {
		return true
	}

	return false
}

// SetAutoPopulate gets a reference to the given bool and assigns it to the AutoPopulate field.
func (o *RoomTypeType) SetAutoPopulate(v bool) {
	o.AutoPopulate = &v
}

// GetAutoRoomAssign returns the AutoRoomAssign field value if set, zero value otherwise.
func (o *RoomTypeType) GetAutoRoomAssign() bool {
	if o == nil || IsNil(o.AutoRoomAssign) {
		var ret bool
		return ret
	}
	return *o.AutoRoomAssign
}

// GetAutoRoomAssignOk returns a tuple with the AutoRoomAssign field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetAutoRoomAssignOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoRoomAssign) {
		return nil, false
	}
	return o.AutoRoomAssign, true
}

// HasAutoRoomAssign returns a boolean if a field has been set.
func (o *RoomTypeType) HasAutoRoomAssign() bool {
	if o != nil && !IsNil(o.AutoRoomAssign) {
		return true
	}

	return false
}

// SetAutoRoomAssign gets a reference to the given bool and assigns it to the AutoRoomAssign field.
func (o *RoomTypeType) SetAutoRoomAssign(v bool) {
	o.AutoRoomAssign = &v
}

// GetBedType returns the BedType field value if set, zero value otherwise.
func (o *RoomTypeType) GetBedType() string {
	if o == nil || IsNil(o.BedType) {
		var ret string
		return ret
	}
	return *o.BedType
}

// GetBedTypeOk returns a tuple with the BedType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetBedTypeOk() (*string, bool) {
	if o == nil || IsNil(o.BedType) {
		return nil, false
	}
	return o.BedType, true
}

// HasBedType returns a boolean if a field has been set.
func (o *RoomTypeType) HasBedType() bool {
	if o != nil && !IsNil(o.BedType) {
		return true
	}

	return false
}

// SetBedType gets a reference to the given string and assigns it to the BedType field.
func (o *RoomTypeType) SetBedType(v string) {
	o.BedType = &v
}

// GetComponents returns the Components field value if set, zero value otherwise.
func (o *RoomTypeType) GetComponents() []RoomTypeComponentType {
	if o == nil || IsNil(o.Components) {
		var ret []RoomTypeComponentType
		return ret
	}
	return o.Components
}

// GetComponentsOk returns a tuple with the Components field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetComponentsOk() ([]RoomTypeComponentType, bool) {
	if o == nil || IsNil(o.Components) {
		return nil, false
	}
	return o.Components, true
}

// HasComponents returns a boolean if a field has been set.
func (o *RoomTypeType) HasComponents() bool {
	if o != nil && !IsNil(o.Components) {
		return true
	}

	return false
}

// SetComponents gets a reference to the given []RoomTypeComponentType and assigns it to the Components field.
func (o *RoomTypeType) SetComponents(v []RoomTypeComponentType) {
	o.Components = v
}

// GetDefaultOccupancy returns the DefaultOccupancy field value if set, zero value otherwise.
func (o *RoomTypeType) GetDefaultOccupancy() float32 {
	if o == nil || IsNil(o.DefaultOccupancy) {
		var ret float32
		return ret
	}
	return *o.DefaultOccupancy
}

// GetDefaultOccupancyOk returns a tuple with the DefaultOccupancy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetDefaultOccupancyOk() (*float32, bool) {
	if o == nil || IsNil(o.DefaultOccupancy) {
		return nil, false
	}
	return o.DefaultOccupancy, true
}

// HasDefaultOccupancy returns a boolean if a field has been set.
func (o *RoomTypeType) HasDefaultOccupancy() bool {
	if o != nil && !IsNil(o.DefaultOccupancy) {
		return true
	}

	return false
}

// SetDefaultOccupancy gets a reference to the given float32 and assigns it to the DefaultOccupancy field.
func (o *RoomTypeType) SetDefaultOccupancy(v float32) {
	o.DefaultOccupancy = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomTypeType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomTypeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *RoomTypeType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetFeatures returns the Features field value if set, zero value otherwise.
func (o *RoomTypeType) GetFeatures() []RoomFeatureType {
	if o == nil || IsNil(o.Features) {
		var ret []RoomFeatureType
		return ret
	}
	return o.Features
}

// GetFeaturesOk returns a tuple with the Features field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetFeaturesOk() ([]RoomFeatureType, bool) {
	if o == nil || IsNil(o.Features) {
		return nil, false
	}
	return o.Features, true
}

// HasFeatures returns a boolean if a field has been set.
func (o *RoomTypeType) HasFeatures() bool {
	if o != nil && !IsNil(o.Features) {
		return true
	}

	return false
}

// SetFeatures gets a reference to the given []RoomFeatureType and assigns it to the Features field.
func (o *RoomTypeType) SetFeatures(v []RoomFeatureType) {
	o.Features = v
}

// GetGeneric returns the Generic field value if set, zero value otherwise.
func (o *RoomTypeType) GetGeneric() bool {
	if o == nil || IsNil(o.Generic) {
		var ret bool
		return ret
	}
	return *o.Generic
}

// GetGenericOk returns a tuple with the Generic field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetGenericOk() (*bool, bool) {
	if o == nil || IsNil(o.Generic) {
		return nil, false
	}
	return o.Generic, true
}

// HasGeneric returns a boolean if a field has been set.
func (o *RoomTypeType) HasGeneric() bool {
	if o != nil && !IsNil(o.Generic) {
		return true
	}

	return false
}

// SetGeneric gets a reference to the given bool and assigns it to the Generic field.
func (o *RoomTypeType) SetGeneric(v bool) {
	o.Generic = &v
}

// GetHouseKeeping returns the HouseKeeping field value if set, zero value otherwise.
func (o *RoomTypeType) GetHouseKeeping() bool {
	if o == nil || IsNil(o.HouseKeeping) {
		var ret bool
		return ret
	}
	return *o.HouseKeeping
}

// GetHouseKeepingOk returns a tuple with the HouseKeeping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetHouseKeepingOk() (*bool, bool) {
	if o == nil || IsNil(o.HouseKeeping) {
		return nil, false
	}
	return o.HouseKeeping, true
}

// HasHouseKeeping returns a boolean if a field has been set.
func (o *RoomTypeType) HasHouseKeeping() bool {
	if o != nil && !IsNil(o.HouseKeeping) {
		return true
	}

	return false
}

// SetHouseKeeping gets a reference to the given bool and assigns it to the HouseKeeping field.
func (o *RoomTypeType) SetHouseKeeping(v bool) {
	o.HouseKeeping = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *RoomTypeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *RoomTypeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *RoomTypeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetInfoURL returns the InfoURL field value if set, zero value otherwise.
func (o *RoomTypeType) GetInfoURL() string {
	if o == nil || IsNil(o.InfoURL) {
		var ret string
		return ret
	}
	return *o.InfoURL
}

// GetInfoURLOk returns a tuple with the InfoURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetInfoURLOk() (*string, bool) {
	if o == nil || IsNil(o.InfoURL) {
		return nil, false
	}
	return o.InfoURL, true
}

// HasInfoURL returns a boolean if a field has been set.
func (o *RoomTypeType) HasInfoURL() bool {
	if o != nil && !IsNil(o.InfoURL) {
		return true
	}

	return false
}

// SetInfoURL gets a reference to the given string and assigns it to the InfoURL field.
func (o *RoomTypeType) SetInfoURL(v string) {
	o.InfoURL = &v
}

// GetMaintenance returns the Maintenance field value if set, zero value otherwise.
func (o *RoomTypeType) GetMaintenance() bool {
	if o == nil || IsNil(o.Maintenance) {
		var ret bool
		return ret
	}
	return *o.Maintenance
}

// GetMaintenanceOk returns a tuple with the Maintenance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetMaintenanceOk() (*bool, bool) {
	if o == nil || IsNil(o.Maintenance) {
		return nil, false
	}
	return o.Maintenance, true
}

// HasMaintenance returns a boolean if a field has been set.
func (o *RoomTypeType) HasMaintenance() bool {
	if o != nil && !IsNil(o.Maintenance) {
		return true
	}

	return false
}

// SetMaintenance gets a reference to the given bool and assigns it to the Maintenance field.
func (o *RoomTypeType) SetMaintenance(v bool) {
	o.Maintenance = &v
}

// GetMaxAdults returns the MaxAdults field value if set, zero value otherwise.
func (o *RoomTypeType) GetMaxAdults() int32 {
	if o == nil || IsNil(o.MaxAdults) {
		var ret int32
		return ret
	}
	return *o.MaxAdults
}

// GetMaxAdultsOk returns a tuple with the MaxAdults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetMaxAdultsOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxAdults) {
		return nil, false
	}
	return o.MaxAdults, true
}

// HasMaxAdults returns a boolean if a field has been set.
func (o *RoomTypeType) HasMaxAdults() bool {
	if o != nil && !IsNil(o.MaxAdults) {
		return true
	}

	return false
}

// SetMaxAdults gets a reference to the given int32 and assigns it to the MaxAdults field.
func (o *RoomTypeType) SetMaxAdults(v int32) {
	o.MaxAdults = &v
}

// GetMaxChildren returns the MaxChildren field value if set, zero value otherwise.
func (o *RoomTypeType) GetMaxChildren() int32 {
	if o == nil || IsNil(o.MaxChildren) {
		var ret int32
		return ret
	}
	return *o.MaxChildren
}

// GetMaxChildrenOk returns a tuple with the MaxChildren field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetMaxChildrenOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxChildren) {
		return nil, false
	}
	return o.MaxChildren, true
}

// HasMaxChildren returns a boolean if a field has been set.
func (o *RoomTypeType) HasMaxChildren() bool {
	if o != nil && !IsNil(o.MaxChildren) {
		return true
	}

	return false
}

// SetMaxChildren gets a reference to the given int32 and assigns it to the MaxChildren field.
func (o *RoomTypeType) SetMaxChildren(v int32) {
	o.MaxChildren = &v
}

// GetMaximumOccupancy returns the MaximumOccupancy field value if set, zero value otherwise.
func (o *RoomTypeType) GetMaximumOccupancy() int32 {
	if o == nil || IsNil(o.MaximumOccupancy) {
		var ret int32
		return ret
	}
	return *o.MaximumOccupancy
}

// GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetMaximumOccupancyOk() (*int32, bool) {
	if o == nil || IsNil(o.MaximumOccupancy) {
		return nil, false
	}
	return o.MaximumOccupancy, true
}

// HasMaximumOccupancy returns a boolean if a field has been set.
func (o *RoomTypeType) HasMaximumOccupancy() bool {
	if o != nil && !IsNil(o.MaximumOccupancy) {
		return true
	}

	return false
}

// SetMaximumOccupancy gets a reference to the given int32 and assigns it to the MaximumOccupancy field.
func (o *RoomTypeType) SetMaximumOccupancy(v int32) {
	o.MaximumOccupancy = &v
}

// GetMeetingRoom returns the MeetingRoom field value if set, zero value otherwise.
func (o *RoomTypeType) GetMeetingRoom() bool {
	if o == nil || IsNil(o.MeetingRoom) {
		var ret bool
		return ret
	}
	return *o.MeetingRoom
}

// GetMeetingRoomOk returns a tuple with the MeetingRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetMeetingRoomOk() (*bool, bool) {
	if o == nil || IsNil(o.MeetingRoom) {
		return nil, false
	}
	return o.MeetingRoom, true
}

// HasMeetingRoom returns a boolean if a field has been set.
func (o *RoomTypeType) HasMeetingRoom() bool {
	if o != nil && !IsNil(o.MeetingRoom) {
		return true
	}

	return false
}

// SetMeetingRoom gets a reference to the given bool and assigns it to the MeetingRoom field.
func (o *RoomTypeType) SetMeetingRoom(v bool) {
	o.MeetingRoom = &v
}

// GetMinimumOccupancy returns the MinimumOccupancy field value if set, zero value otherwise.
func (o *RoomTypeType) GetMinimumOccupancy() int32 {
	if o == nil || IsNil(o.MinimumOccupancy) {
		var ret int32
		return ret
	}
	return *o.MinimumOccupancy
}

// GetMinimumOccupancyOk returns a tuple with the MinimumOccupancy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetMinimumOccupancyOk() (*int32, bool) {
	if o == nil || IsNil(o.MinimumOccupancy) {
		return nil, false
	}
	return o.MinimumOccupancy, true
}

// HasMinimumOccupancy returns a boolean if a field has been set.
func (o *RoomTypeType) HasMinimumOccupancy() bool {
	if o != nil && !IsNil(o.MinimumOccupancy) {
		return true
	}

	return false
}

// SetMinimumOccupancy gets a reference to the given int32 and assigns it to the MinimumOccupancy field.
func (o *RoomTypeType) SetMinimumOccupancy(v int32) {
	o.MinimumOccupancy = &v
}

// GetNewRoomType returns the NewRoomType field value if set, zero value otherwise.
func (o *RoomTypeType) GetNewRoomType() string {
	if o == nil || IsNil(o.NewRoomType) {
		var ret string
		return ret
	}
	return *o.NewRoomType
}

// GetNewRoomTypeOk returns a tuple with the NewRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetNewRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.NewRoomType) {
		return nil, false
	}
	return o.NewRoomType, true
}

// HasNewRoomType returns a boolean if a field has been set.
func (o *RoomTypeType) HasNewRoomType() bool {
	if o != nil && !IsNil(o.NewRoomType) {
		return true
	}

	return false
}

// SetNewRoomType gets a reference to the given string and assigns it to the NewRoomType field.
func (o *RoomTypeType) SetNewRoomType(v string) {
	o.NewRoomType = &v
}

// GetNumberOfRooms returns the NumberOfRooms field value if set, zero value otherwise.
func (o *RoomTypeType) GetNumberOfRooms() int32 {
	if o == nil || IsNil(o.NumberOfRooms) {
		var ret int32
		return ret
	}
	return *o.NumberOfRooms
}

// GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetNumberOfRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.NumberOfRooms) {
		return nil, false
	}
	return o.NumberOfRooms, true
}

// HasNumberOfRooms returns a boolean if a field has been set.
func (o *RoomTypeType) HasNumberOfRooms() bool {
	if o != nil && !IsNil(o.NumberOfRooms) {
		return true
	}

	return false
}

// SetNumberOfRooms gets a reference to the given int32 and assigns it to the NumberOfRooms field.
func (o *RoomTypeType) SetNumberOfRooms(v int32) {
	o.NumberOfRooms = &v
}

// GetPseudo returns the Pseudo field value if set, zero value otherwise.
func (o *RoomTypeType) GetPseudo() bool {
	if o == nil || IsNil(o.Pseudo) {
		var ret bool
		return ret
	}
	return *o.Pseudo
}

// GetPseudoOk returns a tuple with the Pseudo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetPseudoOk() (*bool, bool) {
	if o == nil || IsNil(o.Pseudo) {
		return nil, false
	}
	return o.Pseudo, true
}

// HasPseudo returns a boolean if a field has been set.
func (o *RoomTypeType) HasPseudo() bool {
	if o != nil && !IsNil(o.Pseudo) {
		return true
	}

	return false
}

// SetPseudo gets a reference to the given bool and assigns it to the Pseudo field.
func (o *RoomTypeType) SetPseudo(v bool) {
	o.Pseudo = &v
}

// GetRateFloor returns the RateFloor field value if set, zero value otherwise.
func (o *RoomTypeType) GetRateFloor() float32 {
	if o == nil || IsNil(o.RateFloor) {
		var ret float32
		return ret
	}
	return *o.RateFloor
}

// GetRateFloorOk returns a tuple with the RateFloor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetRateFloorOk() (*float32, bool) {
	if o == nil || IsNil(o.RateFloor) {
		return nil, false
	}
	return o.RateFloor, true
}

// HasRateFloor returns a boolean if a field has been set.
func (o *RoomTypeType) HasRateFloor() bool {
	if o != nil && !IsNil(o.RateFloor) {
		return true
	}

	return false
}

// SetRateFloor gets a reference to the given float32 and assigns it to the RateFloor field.
func (o *RoomTypeType) SetRateFloor(v float32) {
	o.RateFloor = &v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *RoomTypeType) GetRoomClass() string {
	if o == nil || IsNil(o.RoomClass) {
		var ret string
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *RoomTypeType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given string and assigns it to the RoomClass field.
func (o *RoomTypeType) SetRoomClass(v string) {
	o.RoomClass = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomTypeType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomTypeType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RoomTypeType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *RoomTypeType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *RoomTypeType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *RoomTypeType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

// GetSendToInterface returns the SendToInterface field value if set, zero value otherwise.
func (o *RoomTypeType) GetSendToInterface() bool {
	if o == nil || IsNil(o.SendToInterface) {
		var ret bool
		return ret
	}
	return *o.SendToInterface
}

// GetSendToInterfaceOk returns a tuple with the SendToInterface field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetSendToInterfaceOk() (*bool, bool) {
	if o == nil || IsNil(o.SendToInterface) {
		return nil, false
	}
	return o.SendToInterface, true
}

// HasSendToInterface returns a boolean if a field has been set.
func (o *RoomTypeType) HasSendToInterface() bool {
	if o != nil && !IsNil(o.SendToInterface) {
		return true
	}

	return false
}

// SetSendToInterface gets a reference to the given bool and assigns it to the SendToInterface field.
func (o *RoomTypeType) SetSendToInterface(v bool) {
	o.SendToInterface = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *RoomTypeType) GetShortDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.ShortDescription) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetShortDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *RoomTypeType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given TranslationTextType2000 and assigns it to the ShortDescription field.
func (o *RoomTypeType) SetShortDescription(v TranslationTextType2000) {
	o.ShortDescription = &v
}

// GetSmokingPreference returns the SmokingPreference field value if set, zero value otherwise.
func (o *RoomTypeType) GetSmokingPreference() string {
	if o == nil || IsNil(o.SmokingPreference) {
		var ret string
		return ret
	}
	return *o.SmokingPreference
}

// GetSmokingPreferenceOk returns a tuple with the SmokingPreference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetSmokingPreferenceOk() (*string, bool) {
	if o == nil || IsNil(o.SmokingPreference) {
		return nil, false
	}
	return o.SmokingPreference, true
}

// HasSmokingPreference returns a boolean if a field has been set.
func (o *RoomTypeType) HasSmokingPreference() bool {
	if o != nil && !IsNil(o.SmokingPreference) {
		return true
	}

	return false
}

// SetSmokingPreference gets a reference to the given string and assigns it to the SmokingPreference field.
func (o *RoomTypeType) SetSmokingPreference(v string) {
	o.SmokingPreference = &v
}

// GetSuite returns the Suite field value if set, zero value otherwise.
func (o *RoomTypeType) GetSuite() RoomTypeTypeSuite {
	if o == nil || IsNil(o.Suite) {
		var ret RoomTypeTypeSuite
		return ret
	}
	return *o.Suite
}

// GetSuiteOk returns a tuple with the Suite field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetSuiteOk() (*RoomTypeTypeSuite, bool) {
	if o == nil || IsNil(o.Suite) {
		return nil, false
	}
	return o.Suite, true
}

// HasSuite returns a boolean if a field has been set.
func (o *RoomTypeType) HasSuite() bool {
	if o != nil && !IsNil(o.Suite) {
		return true
	}

	return false
}

// SetSuite gets a reference to the given RoomTypeTypeSuite and assigns it to the Suite field.
func (o *RoomTypeType) SetSuite(v RoomTypeTypeSuite) {
	o.Suite = &v
}

// GetYieldCategory returns the YieldCategory field value if set, zero value otherwise.
func (o *RoomTypeType) GetYieldCategory() string {
	if o == nil || IsNil(o.YieldCategory) {
		var ret string
		return ret
	}
	return *o.YieldCategory
}

// GetYieldCategoryOk returns a tuple with the YieldCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetYieldCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.YieldCategory) {
		return nil, false
	}
	return o.YieldCategory, true
}

// HasYieldCategory returns a boolean if a field has been set.
func (o *RoomTypeType) HasYieldCategory() bool {
	if o != nil && !IsNil(o.YieldCategory) {
		return true
	}

	return false
}

// SetYieldCategory gets a reference to the given string and assigns it to the YieldCategory field.
func (o *RoomTypeType) SetYieldCategory(v string) {
	o.YieldCategory = &v
}

// GetYieldStatus returns the YieldStatus field value if set, zero value otherwise.
func (o *RoomTypeType) GetYieldStatus() RoomTypeYieldableType {
	if o == nil || IsNil(o.YieldStatus) {
		var ret RoomTypeYieldableType
		return ret
	}
	return *o.YieldStatus
}

// GetYieldStatusOk returns a tuple with the YieldStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeType) GetYieldStatusOk() (*RoomTypeYieldableType, bool) {
	if o == nil || IsNil(o.YieldStatus) {
		return nil, false
	}
	return o.YieldStatus, true
}

// HasYieldStatus returns a boolean if a field has been set.
func (o *RoomTypeType) HasYieldStatus() bool {
	if o != nil && !IsNil(o.YieldStatus) {
		return true
	}

	return false
}

// SetYieldStatus gets a reference to the given RoomTypeYieldableType and assigns it to the YieldStatus field.
func (o *RoomTypeType) SetYieldStatus(v RoomTypeYieldableType) {
	o.YieldStatus = &v
}

func (o RoomTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Accessible) {
		toSerialize["accessible"] = o.Accessible
	}
	if !IsNil(o.ActiveDate) {
		toSerialize["activeDate"] = o.ActiveDate
	}
	if !IsNil(o.AutoCheckin) {
		toSerialize["autoCheckin"] = o.AutoCheckin
	}
	if !IsNil(o.AutoPopulate) {
		toSerialize["autoPopulate"] = o.AutoPopulate
	}
	if !IsNil(o.AutoRoomAssign) {
		toSerialize["autoRoomAssign"] = o.AutoRoomAssign
	}
	if !IsNil(o.BedType) {
		toSerialize["bedType"] = o.BedType
	}
	if !IsNil(o.Components) {
		toSerialize["components"] = o.Components
	}
	if !IsNil(o.DefaultOccupancy) {
		toSerialize["defaultOccupancy"] = o.DefaultOccupancy
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Features) {
		toSerialize["features"] = o.Features
	}
	if !IsNil(o.Generic) {
		toSerialize["generic"] = o.Generic
	}
	if !IsNil(o.HouseKeeping) {
		toSerialize["houseKeeping"] = o.HouseKeeping
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.InfoURL) {
		toSerialize["infoURL"] = o.InfoURL
	}
	if !IsNil(o.Maintenance) {
		toSerialize["maintenance"] = o.Maintenance
	}
	if !IsNil(o.MaxAdults) {
		toSerialize["maxAdults"] = o.MaxAdults
	}
	if !IsNil(o.MaxChildren) {
		toSerialize["maxChildren"] = o.MaxChildren
	}
	if !IsNil(o.MaximumOccupancy) {
		toSerialize["maximumOccupancy"] = o.MaximumOccupancy
	}
	if !IsNil(o.MeetingRoom) {
		toSerialize["meetingRoom"] = o.MeetingRoom
	}
	if !IsNil(o.MinimumOccupancy) {
		toSerialize["minimumOccupancy"] = o.MinimumOccupancy
	}
	if !IsNil(o.NewRoomType) {
		toSerialize["newRoomType"] = o.NewRoomType
	}
	if !IsNil(o.NumberOfRooms) {
		toSerialize["numberOfRooms"] = o.NumberOfRooms
	}
	if !IsNil(o.Pseudo) {
		toSerialize["pseudo"] = o.Pseudo
	}
	if !IsNil(o.RateFloor) {
		toSerialize["rateFloor"] = o.RateFloor
	}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	if !IsNil(o.SendToInterface) {
		toSerialize["sendToInterface"] = o.SendToInterface
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	if !IsNil(o.SmokingPreference) {
		toSerialize["smokingPreference"] = o.SmokingPreference
	}
	if !IsNil(o.Suite) {
		toSerialize["suite"] = o.Suite
	}
	if !IsNil(o.YieldCategory) {
		toSerialize["yieldCategory"] = o.YieldCategory
	}
	if !IsNil(o.YieldStatus) {
		toSerialize["yieldStatus"] = o.YieldStatus
	}
	return toSerialize, nil
}

type NullableRoomTypeType struct {
	value *RoomTypeType
	isSet bool
}

func (v NullableRoomTypeType) Get() *RoomTypeType {
	return v.value
}

func (v *NullableRoomTypeType) Set(val *RoomTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeType(val *RoomTypeType) *NullableRoomTypeType {
	return &NullableRoomTypeType{value: val, isSet: true}
}

func (v NullableRoomTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

