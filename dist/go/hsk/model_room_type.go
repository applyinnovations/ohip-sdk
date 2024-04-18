/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomType{}

// RoomType This type represents the primary room attributes.
type RoomType struct {
	Attendant []CurrentServicingAttendantType `json:"attendant,omitempty"`
	// Building associated with the room.
	Building *string `json:"building,omitempty"`
	// This flag indicates component room.
	ComponentRoomNumber *string `json:"componentRoomNumber,omitempty"`
	// List of component room numbers.
	ComponentRoomNumbers []string `json:"componentRoomNumbers,omitempty"`
	// Collection of rooms.
	ComponentRooms []RoomRoomType `json:"componentRooms,omitempty"`
	// Collection of rooms.
	ConnectingRooms []RoomRoomType `json:"connectingRooms,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Room Discrepancies between front office and housekeeping room status and number of persons in the room.
	Discrepancy []RoomDiscrepancyType `json:"discrepancy,omitempty"`
	// Floor of the Room.
	Floor *string `json:"floor,omitempty"`
	// Description for the Floor of the Room.
	FloorDescription *string `json:"floorDescription,omitempty"`
	Hold *RoomHoldType `json:"hold,omitempty"`
	Housekeeping *HousekeepingType `json:"housekeeping,omitempty"`
	// Indicates whether the room is accessibility compliant.
	IsAccessible *bool `json:"isAccessible,omitempty"`
	// Indicates whether the room is a Meeting Room
	MeetingRoom *bool `json:"meetingRoom,omitempty"`
	// Date Range and reasons for a room being Out of Order/Out Of Service (If the room is OO/OS).
	OutOfOrder []RoomOutOfOrderType `json:"outOfOrder,omitempty"`
	ResvInfo []ReservationShortInfoType `json:"resvInfo,omitempty"`
	RoomAssignmentRating *RatePlanRatingType `json:"roomAssignmentRating,omitempty"`
	// Detail Long Description Of The Room.
	RoomDescription *string `json:"roomDescription,omitempty"`
	// A recurring element that identifies the room features.
	RoomFeatures []RoomFeatureType `json:"roomFeatures,omitempty"`
	// Code of the room.
	RoomId *string `json:"roomId,omitempty"`
	RoomSection *RoomSectionType `json:"roomSection,omitempty"`
	RoomType *RoomTypeShortInfoType `json:"roomType,omitempty"`
	// This indicates room smoking preference.
	SmokingPreference *string `json:"smokingPreference,omitempty"`
	// This indicates the description of the room smoking preference.
	SmokingPreferenceDescription *string `json:"smokingPreferenceDescription,omitempty"`
	TurndownInfo *TurndownInfoType `json:"turndownInfo,omitempty"`
}

// NewRoomType instantiates a new RoomType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomType() *RoomType {
	this := RoomType{}
	return &this
}

// NewRoomTypeWithDefaults instantiates a new RoomType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeWithDefaults() *RoomType {
	this := RoomType{}
	return &this
}

// GetAttendant returns the Attendant field value if set, zero value otherwise.
func (o *RoomType) GetAttendant() []CurrentServicingAttendantType {
	if o == nil || IsNil(o.Attendant) {
		var ret []CurrentServicingAttendantType
		return ret
	}
	return o.Attendant
}

// GetAttendantOk returns a tuple with the Attendant field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetAttendantOk() ([]CurrentServicingAttendantType, bool) {
	if o == nil || IsNil(o.Attendant) {
		return nil, false
	}
	return o.Attendant, true
}

// HasAttendant returns a boolean if a field has been set.
func (o *RoomType) HasAttendant() bool {
	if o != nil && !IsNil(o.Attendant) {
		return true
	}

	return false
}

// SetAttendant gets a reference to the given []CurrentServicingAttendantType and assigns it to the Attendant field.
func (o *RoomType) SetAttendant(v []CurrentServicingAttendantType) {
	o.Attendant = v
}

// GetBuilding returns the Building field value if set, zero value otherwise.
func (o *RoomType) GetBuilding() string {
	if o == nil || IsNil(o.Building) {
		var ret string
		return ret
	}
	return *o.Building
}

// GetBuildingOk returns a tuple with the Building field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetBuildingOk() (*string, bool) {
	if o == nil || IsNil(o.Building) {
		return nil, false
	}
	return o.Building, true
}

// HasBuilding returns a boolean if a field has been set.
func (o *RoomType) HasBuilding() bool {
	if o != nil && !IsNil(o.Building) {
		return true
	}

	return false
}

// SetBuilding gets a reference to the given string and assigns it to the Building field.
func (o *RoomType) SetBuilding(v string) {
	o.Building = &v
}

// GetComponentRoomNumber returns the ComponentRoomNumber field value if set, zero value otherwise.
func (o *RoomType) GetComponentRoomNumber() string {
	if o == nil || IsNil(o.ComponentRoomNumber) {
		var ret string
		return ret
	}
	return *o.ComponentRoomNumber
}

// GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetComponentRoomNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ComponentRoomNumber) {
		return nil, false
	}
	return o.ComponentRoomNumber, true
}

// HasComponentRoomNumber returns a boolean if a field has been set.
func (o *RoomType) HasComponentRoomNumber() bool {
	if o != nil && !IsNil(o.ComponentRoomNumber) {
		return true
	}

	return false
}

// SetComponentRoomNumber gets a reference to the given string and assigns it to the ComponentRoomNumber field.
func (o *RoomType) SetComponentRoomNumber(v string) {
	o.ComponentRoomNumber = &v
}

// GetComponentRoomNumbers returns the ComponentRoomNumbers field value if set, zero value otherwise.
func (o *RoomType) GetComponentRoomNumbers() []string {
	if o == nil || IsNil(o.ComponentRoomNumbers) {
		var ret []string
		return ret
	}
	return o.ComponentRoomNumbers
}

// GetComponentRoomNumbersOk returns a tuple with the ComponentRoomNumbers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetComponentRoomNumbersOk() ([]string, bool) {
	if o == nil || IsNil(o.ComponentRoomNumbers) {
		return nil, false
	}
	return o.ComponentRoomNumbers, true
}

// HasComponentRoomNumbers returns a boolean if a field has been set.
func (o *RoomType) HasComponentRoomNumbers() bool {
	if o != nil && !IsNil(o.ComponentRoomNumbers) {
		return true
	}

	return false
}

// SetComponentRoomNumbers gets a reference to the given []string and assigns it to the ComponentRoomNumbers field.
func (o *RoomType) SetComponentRoomNumbers(v []string) {
	o.ComponentRoomNumbers = v
}

// GetComponentRooms returns the ComponentRooms field value if set, zero value otherwise.
func (o *RoomType) GetComponentRooms() []RoomRoomType {
	if o == nil || IsNil(o.ComponentRooms) {
		var ret []RoomRoomType
		return ret
	}
	return o.ComponentRooms
}

// GetComponentRoomsOk returns a tuple with the ComponentRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetComponentRoomsOk() ([]RoomRoomType, bool) {
	if o == nil || IsNil(o.ComponentRooms) {
		return nil, false
	}
	return o.ComponentRooms, true
}

// HasComponentRooms returns a boolean if a field has been set.
func (o *RoomType) HasComponentRooms() bool {
	if o != nil && !IsNil(o.ComponentRooms) {
		return true
	}

	return false
}

// SetComponentRooms gets a reference to the given []RoomRoomType and assigns it to the ComponentRooms field.
func (o *RoomType) SetComponentRooms(v []RoomRoomType) {
	o.ComponentRooms = v
}

// GetConnectingRooms returns the ConnectingRooms field value if set, zero value otherwise.
func (o *RoomType) GetConnectingRooms() []RoomRoomType {
	if o == nil || IsNil(o.ConnectingRooms) {
		var ret []RoomRoomType
		return ret
	}
	return o.ConnectingRooms
}

// GetConnectingRoomsOk returns a tuple with the ConnectingRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetConnectingRoomsOk() ([]RoomRoomType, bool) {
	if o == nil || IsNil(o.ConnectingRooms) {
		return nil, false
	}
	return o.ConnectingRooms, true
}

// HasConnectingRooms returns a boolean if a field has been set.
func (o *RoomType) HasConnectingRooms() bool {
	if o != nil && !IsNil(o.ConnectingRooms) {
		return true
	}

	return false
}

// SetConnectingRooms gets a reference to the given []RoomRoomType and assigns it to the ConnectingRooms field.
func (o *RoomType) SetConnectingRooms(v []RoomRoomType) {
	o.ConnectingRooms = v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *RoomType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDiscrepancy returns the Discrepancy field value if set, zero value otherwise.
func (o *RoomType) GetDiscrepancy() []RoomDiscrepancyType {
	if o == nil || IsNil(o.Discrepancy) {
		var ret []RoomDiscrepancyType
		return ret
	}
	return o.Discrepancy
}

// GetDiscrepancyOk returns a tuple with the Discrepancy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetDiscrepancyOk() ([]RoomDiscrepancyType, bool) {
	if o == nil || IsNil(o.Discrepancy) {
		return nil, false
	}
	return o.Discrepancy, true
}

// HasDiscrepancy returns a boolean if a field has been set.
func (o *RoomType) HasDiscrepancy() bool {
	if o != nil && !IsNil(o.Discrepancy) {
		return true
	}

	return false
}

// SetDiscrepancy gets a reference to the given []RoomDiscrepancyType and assigns it to the Discrepancy field.
func (o *RoomType) SetDiscrepancy(v []RoomDiscrepancyType) {
	o.Discrepancy = v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *RoomType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *RoomType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *RoomType) SetFloor(v string) {
	o.Floor = &v
}

// GetFloorDescription returns the FloorDescription field value if set, zero value otherwise.
func (o *RoomType) GetFloorDescription() string {
	if o == nil || IsNil(o.FloorDescription) {
		var ret string
		return ret
	}
	return *o.FloorDescription
}

// GetFloorDescriptionOk returns a tuple with the FloorDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetFloorDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.FloorDescription) {
		return nil, false
	}
	return o.FloorDescription, true
}

// HasFloorDescription returns a boolean if a field has been set.
func (o *RoomType) HasFloorDescription() bool {
	if o != nil && !IsNil(o.FloorDescription) {
		return true
	}

	return false
}

// SetFloorDescription gets a reference to the given string and assigns it to the FloorDescription field.
func (o *RoomType) SetFloorDescription(v string) {
	o.FloorDescription = &v
}

// GetHold returns the Hold field value if set, zero value otherwise.
func (o *RoomType) GetHold() RoomHoldType {
	if o == nil || IsNil(o.Hold) {
		var ret RoomHoldType
		return ret
	}
	return *o.Hold
}

// GetHoldOk returns a tuple with the Hold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetHoldOk() (*RoomHoldType, bool) {
	if o == nil || IsNil(o.Hold) {
		return nil, false
	}
	return o.Hold, true
}

// HasHold returns a boolean if a field has been set.
func (o *RoomType) HasHold() bool {
	if o != nil && !IsNil(o.Hold) {
		return true
	}

	return false
}

// SetHold gets a reference to the given RoomHoldType and assigns it to the Hold field.
func (o *RoomType) SetHold(v RoomHoldType) {
	o.Hold = &v
}

// GetHousekeeping returns the Housekeeping field value if set, zero value otherwise.
func (o *RoomType) GetHousekeeping() HousekeepingType {
	if o == nil || IsNil(o.Housekeeping) {
		var ret HousekeepingType
		return ret
	}
	return *o.Housekeeping
}

// GetHousekeepingOk returns a tuple with the Housekeeping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetHousekeepingOk() (*HousekeepingType, bool) {
	if o == nil || IsNil(o.Housekeeping) {
		return nil, false
	}
	return o.Housekeeping, true
}

// HasHousekeeping returns a boolean if a field has been set.
func (o *RoomType) HasHousekeeping() bool {
	if o != nil && !IsNil(o.Housekeeping) {
		return true
	}

	return false
}

// SetHousekeeping gets a reference to the given HousekeepingType and assigns it to the Housekeeping field.
func (o *RoomType) SetHousekeeping(v HousekeepingType) {
	o.Housekeeping = &v
}

// GetIsAccessible returns the IsAccessible field value if set, zero value otherwise.
func (o *RoomType) GetIsAccessible() bool {
	if o == nil || IsNil(o.IsAccessible) {
		var ret bool
		return ret
	}
	return *o.IsAccessible
}

// GetIsAccessibleOk returns a tuple with the IsAccessible field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetIsAccessibleOk() (*bool, bool) {
	if o == nil || IsNil(o.IsAccessible) {
		return nil, false
	}
	return o.IsAccessible, true
}

// HasIsAccessible returns a boolean if a field has been set.
func (o *RoomType) HasIsAccessible() bool {
	if o != nil && !IsNil(o.IsAccessible) {
		return true
	}

	return false
}

// SetIsAccessible gets a reference to the given bool and assigns it to the IsAccessible field.
func (o *RoomType) SetIsAccessible(v bool) {
	o.IsAccessible = &v
}

// GetMeetingRoom returns the MeetingRoom field value if set, zero value otherwise.
func (o *RoomType) GetMeetingRoom() bool {
	if o == nil || IsNil(o.MeetingRoom) {
		var ret bool
		return ret
	}
	return *o.MeetingRoom
}

// GetMeetingRoomOk returns a tuple with the MeetingRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetMeetingRoomOk() (*bool, bool) {
	if o == nil || IsNil(o.MeetingRoom) {
		return nil, false
	}
	return o.MeetingRoom, true
}

// HasMeetingRoom returns a boolean if a field has been set.
func (o *RoomType) HasMeetingRoom() bool {
	if o != nil && !IsNil(o.MeetingRoom) {
		return true
	}

	return false
}

// SetMeetingRoom gets a reference to the given bool and assigns it to the MeetingRoom field.
func (o *RoomType) SetMeetingRoom(v bool) {
	o.MeetingRoom = &v
}

// GetOutOfOrder returns the OutOfOrder field value if set, zero value otherwise.
func (o *RoomType) GetOutOfOrder() []RoomOutOfOrderType {
	if o == nil || IsNil(o.OutOfOrder) {
		var ret []RoomOutOfOrderType
		return ret
	}
	return o.OutOfOrder
}

// GetOutOfOrderOk returns a tuple with the OutOfOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetOutOfOrderOk() ([]RoomOutOfOrderType, bool) {
	if o == nil || IsNil(o.OutOfOrder) {
		return nil, false
	}
	return o.OutOfOrder, true
}

// HasOutOfOrder returns a boolean if a field has been set.
func (o *RoomType) HasOutOfOrder() bool {
	if o != nil && !IsNil(o.OutOfOrder) {
		return true
	}

	return false
}

// SetOutOfOrder gets a reference to the given []RoomOutOfOrderType and assigns it to the OutOfOrder field.
func (o *RoomType) SetOutOfOrder(v []RoomOutOfOrderType) {
	o.OutOfOrder = v
}

// GetResvInfo returns the ResvInfo field value if set, zero value otherwise.
func (o *RoomType) GetResvInfo() []ReservationShortInfoType {
	if o == nil || IsNil(o.ResvInfo) {
		var ret []ReservationShortInfoType
		return ret
	}
	return o.ResvInfo
}

// GetResvInfoOk returns a tuple with the ResvInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetResvInfoOk() ([]ReservationShortInfoType, bool) {
	if o == nil || IsNil(o.ResvInfo) {
		return nil, false
	}
	return o.ResvInfo, true
}

// HasResvInfo returns a boolean if a field has been set.
func (o *RoomType) HasResvInfo() bool {
	if o != nil && !IsNil(o.ResvInfo) {
		return true
	}

	return false
}

// SetResvInfo gets a reference to the given []ReservationShortInfoType and assigns it to the ResvInfo field.
func (o *RoomType) SetResvInfo(v []ReservationShortInfoType) {
	o.ResvInfo = v
}

// GetRoomAssignmentRating returns the RoomAssignmentRating field value if set, zero value otherwise.
func (o *RoomType) GetRoomAssignmentRating() RatePlanRatingType {
	if o == nil || IsNil(o.RoomAssignmentRating) {
		var ret RatePlanRatingType
		return ret
	}
	return *o.RoomAssignmentRating
}

// GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool) {
	if o == nil || IsNil(o.RoomAssignmentRating) {
		return nil, false
	}
	return o.RoomAssignmentRating, true
}

// HasRoomAssignmentRating returns a boolean if a field has been set.
func (o *RoomType) HasRoomAssignmentRating() bool {
	if o != nil && !IsNil(o.RoomAssignmentRating) {
		return true
	}

	return false
}

// SetRoomAssignmentRating gets a reference to the given RatePlanRatingType and assigns it to the RoomAssignmentRating field.
func (o *RoomType) SetRoomAssignmentRating(v RatePlanRatingType) {
	o.RoomAssignmentRating = &v
}

// GetRoomDescription returns the RoomDescription field value if set, zero value otherwise.
func (o *RoomType) GetRoomDescription() string {
	if o == nil || IsNil(o.RoomDescription) {
		var ret string
		return ret
	}
	return *o.RoomDescription
}

// GetRoomDescriptionOk returns a tuple with the RoomDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetRoomDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RoomDescription) {
		return nil, false
	}
	return o.RoomDescription, true
}

// HasRoomDescription returns a boolean if a field has been set.
func (o *RoomType) HasRoomDescription() bool {
	if o != nil && !IsNil(o.RoomDescription) {
		return true
	}

	return false
}

// SetRoomDescription gets a reference to the given string and assigns it to the RoomDescription field.
func (o *RoomType) SetRoomDescription(v string) {
	o.RoomDescription = &v
}

// GetRoomFeatures returns the RoomFeatures field value if set, zero value otherwise.
func (o *RoomType) GetRoomFeatures() []RoomFeatureType {
	if o == nil || IsNil(o.RoomFeatures) {
		var ret []RoomFeatureType
		return ret
	}
	return o.RoomFeatures
}

// GetRoomFeaturesOk returns a tuple with the RoomFeatures field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetRoomFeaturesOk() ([]RoomFeatureType, bool) {
	if o == nil || IsNil(o.RoomFeatures) {
		return nil, false
	}
	return o.RoomFeatures, true
}

// HasRoomFeatures returns a boolean if a field has been set.
func (o *RoomType) HasRoomFeatures() bool {
	if o != nil && !IsNil(o.RoomFeatures) {
		return true
	}

	return false
}

// SetRoomFeatures gets a reference to the given []RoomFeatureType and assigns it to the RoomFeatures field.
func (o *RoomType) SetRoomFeatures(v []RoomFeatureType) {
	o.RoomFeatures = v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *RoomType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *RoomType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *RoomType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetRoomSection returns the RoomSection field value if set, zero value otherwise.
func (o *RoomType) GetRoomSection() RoomSectionType {
	if o == nil || IsNil(o.RoomSection) {
		var ret RoomSectionType
		return ret
	}
	return *o.RoomSection
}

// GetRoomSectionOk returns a tuple with the RoomSection field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetRoomSectionOk() (*RoomSectionType, bool) {
	if o == nil || IsNil(o.RoomSection) {
		return nil, false
	}
	return o.RoomSection, true
}

// HasRoomSection returns a boolean if a field has been set.
func (o *RoomType) HasRoomSection() bool {
	if o != nil && !IsNil(o.RoomSection) {
		return true
	}

	return false
}

// SetRoomSection gets a reference to the given RoomSectionType and assigns it to the RoomSection field.
func (o *RoomType) SetRoomSection(v RoomSectionType) {
	o.RoomSection = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomType) GetRoomType() RoomTypeShortInfoType {
	if o == nil || IsNil(o.RoomType) {
		var ret RoomTypeShortInfoType
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given RoomTypeShortInfoType and assigns it to the RoomType field.
func (o *RoomType) SetRoomType(v RoomTypeShortInfoType) {
	o.RoomType = &v
}

// GetSmokingPreference returns the SmokingPreference field value if set, zero value otherwise.
func (o *RoomType) GetSmokingPreference() string {
	if o == nil || IsNil(o.SmokingPreference) {
		var ret string
		return ret
	}
	return *o.SmokingPreference
}

// GetSmokingPreferenceOk returns a tuple with the SmokingPreference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetSmokingPreferenceOk() (*string, bool) {
	if o == nil || IsNil(o.SmokingPreference) {
		return nil, false
	}
	return o.SmokingPreference, true
}

// HasSmokingPreference returns a boolean if a field has been set.
func (o *RoomType) HasSmokingPreference() bool {
	if o != nil && !IsNil(o.SmokingPreference) {
		return true
	}

	return false
}

// SetSmokingPreference gets a reference to the given string and assigns it to the SmokingPreference field.
func (o *RoomType) SetSmokingPreference(v string) {
	o.SmokingPreference = &v
}

// GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field value if set, zero value otherwise.
func (o *RoomType) GetSmokingPreferenceDescription() string {
	if o == nil || IsNil(o.SmokingPreferenceDescription) {
		var ret string
		return ret
	}
	return *o.SmokingPreferenceDescription
}

// GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetSmokingPreferenceDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.SmokingPreferenceDescription) {
		return nil, false
	}
	return o.SmokingPreferenceDescription, true
}

// HasSmokingPreferenceDescription returns a boolean if a field has been set.
func (o *RoomType) HasSmokingPreferenceDescription() bool {
	if o != nil && !IsNil(o.SmokingPreferenceDescription) {
		return true
	}

	return false
}

// SetSmokingPreferenceDescription gets a reference to the given string and assigns it to the SmokingPreferenceDescription field.
func (o *RoomType) SetSmokingPreferenceDescription(v string) {
	o.SmokingPreferenceDescription = &v
}

// GetTurndownInfo returns the TurndownInfo field value if set, zero value otherwise.
func (o *RoomType) GetTurndownInfo() TurndownInfoType {
	if o == nil || IsNil(o.TurndownInfo) {
		var ret TurndownInfoType
		return ret
	}
	return *o.TurndownInfo
}

// GetTurndownInfoOk returns a tuple with the TurndownInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomType) GetTurndownInfoOk() (*TurndownInfoType, bool) {
	if o == nil || IsNil(o.TurndownInfo) {
		return nil, false
	}
	return o.TurndownInfo, true
}

// HasTurndownInfo returns a boolean if a field has been set.
func (o *RoomType) HasTurndownInfo() bool {
	if o != nil && !IsNil(o.TurndownInfo) {
		return true
	}

	return false
}

// SetTurndownInfo gets a reference to the given TurndownInfoType and assigns it to the TurndownInfo field.
func (o *RoomType) SetTurndownInfo(v TurndownInfoType) {
	o.TurndownInfo = &v
}

func (o RoomType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attendant) {
		toSerialize["attendant"] = o.Attendant
	}
	if !IsNil(o.Building) {
		toSerialize["building"] = o.Building
	}
	if !IsNil(o.ComponentRoomNumber) {
		toSerialize["componentRoomNumber"] = o.ComponentRoomNumber
	}
	if !IsNil(o.ComponentRoomNumbers) {
		toSerialize["componentRoomNumbers"] = o.ComponentRoomNumbers
	}
	if !IsNil(o.ComponentRooms) {
		toSerialize["componentRooms"] = o.ComponentRooms
	}
	if !IsNil(o.ConnectingRooms) {
		toSerialize["connectingRooms"] = o.ConnectingRooms
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Discrepancy) {
		toSerialize["discrepancy"] = o.Discrepancy
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.FloorDescription) {
		toSerialize["floorDescription"] = o.FloorDescription
	}
	if !IsNil(o.Hold) {
		toSerialize["hold"] = o.Hold
	}
	if !IsNil(o.Housekeeping) {
		toSerialize["housekeeping"] = o.Housekeeping
	}
	if !IsNil(o.IsAccessible) {
		toSerialize["isAccessible"] = o.IsAccessible
	}
	if !IsNil(o.MeetingRoom) {
		toSerialize["meetingRoom"] = o.MeetingRoom
	}
	if !IsNil(o.OutOfOrder) {
		toSerialize["outOfOrder"] = o.OutOfOrder
	}
	if !IsNil(o.ResvInfo) {
		toSerialize["resvInfo"] = o.ResvInfo
	}
	if !IsNil(o.RoomAssignmentRating) {
		toSerialize["roomAssignmentRating"] = o.RoomAssignmentRating
	}
	if !IsNil(o.RoomDescription) {
		toSerialize["roomDescription"] = o.RoomDescription
	}
	if !IsNil(o.RoomFeatures) {
		toSerialize["roomFeatures"] = o.RoomFeatures
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.RoomSection) {
		toSerialize["roomSection"] = o.RoomSection
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.SmokingPreference) {
		toSerialize["smokingPreference"] = o.SmokingPreference
	}
	if !IsNil(o.SmokingPreferenceDescription) {
		toSerialize["smokingPreferenceDescription"] = o.SmokingPreferenceDescription
	}
	if !IsNil(o.TurndownInfo) {
		toSerialize["turndownInfo"] = o.TurndownInfo
	}
	return toSerialize, nil
}

type NullableRoomType struct {
	value *RoomType
	isSet bool
}

func (v NullableRoomType) Get() *RoomType {
	return v.value
}

func (v *NullableRoomType) Set(val *RoomType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomType(val *RoomType) *NullableRoomType {
	return &NullableRoomType{value: val, isSet: true}
}

func (v NullableRoomType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

