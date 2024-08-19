# HousekeepingTaskTypeAttendant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActiveFlag** | Pointer to **string** | Indicates if the Attendant is active. | [optional] 
**AttendantId** | Pointer to **string** | Attendant&#39;s unique identifier. | [optional] 
**AttendantInstructions** | Pointer to **string** |  | [optional] 
**AttendantName** | Pointer to **string** | Attendant&#39;s name. | [optional] 
**Floor** | Pointer to **string** | The Floor which is assigned to the attendant. | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**HotelId** | Pointer to **string** | Property where the attendant belongs. | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**Section** | Pointer to [**HousekeepingSectionType**](HousekeepingSectionType.md) |  | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 

## Methods

### NewHousekeepingTaskTypeAttendant

`func NewHousekeepingTaskTypeAttendant() *HousekeepingTaskTypeAttendant`

NewHousekeepingTaskTypeAttendant instantiates a new HousekeepingTaskTypeAttendant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskTypeAttendantWithDefaults

`func NewHousekeepingTaskTypeAttendantWithDefaults() *HousekeepingTaskTypeAttendant`

NewHousekeepingTaskTypeAttendantWithDefaults instantiates a new HousekeepingTaskTypeAttendant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActiveFlag

`func (o *HousekeepingTaskTypeAttendant) GetActiveFlag() string`

GetActiveFlag returns the ActiveFlag field if non-nil, zero value otherwise.

### GetActiveFlagOk

`func (o *HousekeepingTaskTypeAttendant) GetActiveFlagOk() (*string, bool)`

GetActiveFlagOk returns a tuple with the ActiveFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveFlag

`func (o *HousekeepingTaskTypeAttendant) SetActiveFlag(v string)`

SetActiveFlag sets ActiveFlag field to given value.

### HasActiveFlag

`func (o *HousekeepingTaskTypeAttendant) HasActiveFlag() bool`

HasActiveFlag returns a boolean if a field has been set.

### GetAttendantId

`func (o *HousekeepingTaskTypeAttendant) GetAttendantId() string`

GetAttendantId returns the AttendantId field if non-nil, zero value otherwise.

### GetAttendantIdOk

`func (o *HousekeepingTaskTypeAttendant) GetAttendantIdOk() (*string, bool)`

GetAttendantIdOk returns a tuple with the AttendantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantId

`func (o *HousekeepingTaskTypeAttendant) SetAttendantId(v string)`

SetAttendantId sets AttendantId field to given value.

### HasAttendantId

`func (o *HousekeepingTaskTypeAttendant) HasAttendantId() bool`

HasAttendantId returns a boolean if a field has been set.

### GetAttendantInstructions

`func (o *HousekeepingTaskTypeAttendant) GetAttendantInstructions() string`

GetAttendantInstructions returns the AttendantInstructions field if non-nil, zero value otherwise.

### GetAttendantInstructionsOk

`func (o *HousekeepingTaskTypeAttendant) GetAttendantInstructionsOk() (*string, bool)`

GetAttendantInstructionsOk returns a tuple with the AttendantInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantInstructions

`func (o *HousekeepingTaskTypeAttendant) SetAttendantInstructions(v string)`

SetAttendantInstructions sets AttendantInstructions field to given value.

### HasAttendantInstructions

`func (o *HousekeepingTaskTypeAttendant) HasAttendantInstructions() bool`

HasAttendantInstructions returns a boolean if a field has been set.

### GetAttendantName

`func (o *HousekeepingTaskTypeAttendant) GetAttendantName() string`

GetAttendantName returns the AttendantName field if non-nil, zero value otherwise.

### GetAttendantNameOk

`func (o *HousekeepingTaskTypeAttendant) GetAttendantNameOk() (*string, bool)`

GetAttendantNameOk returns a tuple with the AttendantName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantName

`func (o *HousekeepingTaskTypeAttendant) SetAttendantName(v string)`

SetAttendantName sets AttendantName field to given value.

### HasAttendantName

`func (o *HousekeepingTaskTypeAttendant) HasAttendantName() bool`

HasAttendantName returns a boolean if a field has been set.

### GetFloor

`func (o *HousekeepingTaskTypeAttendant) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *HousekeepingTaskTypeAttendant) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *HousekeepingTaskTypeAttendant) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *HousekeepingTaskTypeAttendant) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFriday

`func (o *HousekeepingTaskTypeAttendant) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *HousekeepingTaskTypeAttendant) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *HousekeepingTaskTypeAttendant) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *HousekeepingTaskTypeAttendant) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetHotelId

`func (o *HousekeepingTaskTypeAttendant) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingTaskTypeAttendant) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingTaskTypeAttendant) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingTaskTypeAttendant) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMonday

`func (o *HousekeepingTaskTypeAttendant) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *HousekeepingTaskTypeAttendant) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *HousekeepingTaskTypeAttendant) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *HousekeepingTaskTypeAttendant) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetSaturday

`func (o *HousekeepingTaskTypeAttendant) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *HousekeepingTaskTypeAttendant) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *HousekeepingTaskTypeAttendant) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *HousekeepingTaskTypeAttendant) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetSection

`func (o *HousekeepingTaskTypeAttendant) GetSection() HousekeepingSectionType`

GetSection returns the Section field if non-nil, zero value otherwise.

### GetSectionOk

`func (o *HousekeepingTaskTypeAttendant) GetSectionOk() (*HousekeepingSectionType, bool)`

GetSectionOk returns a tuple with the Section field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSection

`func (o *HousekeepingTaskTypeAttendant) SetSection(v HousekeepingSectionType)`

SetSection sets Section field to given value.

### HasSection

`func (o *HousekeepingTaskTypeAttendant) HasSection() bool`

HasSection returns a boolean if a field has been set.

### GetSunday

`func (o *HousekeepingTaskTypeAttendant) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *HousekeepingTaskTypeAttendant) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *HousekeepingTaskTypeAttendant) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *HousekeepingTaskTypeAttendant) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetThursday

`func (o *HousekeepingTaskTypeAttendant) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *HousekeepingTaskTypeAttendant) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *HousekeepingTaskTypeAttendant) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *HousekeepingTaskTypeAttendant) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetTuesday

`func (o *HousekeepingTaskTypeAttendant) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *HousekeepingTaskTypeAttendant) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *HousekeepingTaskTypeAttendant) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *HousekeepingTaskTypeAttendant) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *HousekeepingTaskTypeAttendant) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *HousekeepingTaskTypeAttendant) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *HousekeepingTaskTypeAttendant) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *HousekeepingTaskTypeAttendant) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


