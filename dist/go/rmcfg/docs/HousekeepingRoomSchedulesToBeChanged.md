# HousekeepingRoomSchedulesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingRoomSchedules** | Pointer to [**[]ConfigHousekeepingRoomScheduleType**](ConfigHousekeepingRoomScheduleType.md) | This type holds a collection of housekeeping tasks attached to a room type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingRoomSchedulesToBeChanged

`func NewHousekeepingRoomSchedulesToBeChanged() *HousekeepingRoomSchedulesToBeChanged`

NewHousekeepingRoomSchedulesToBeChanged instantiates a new HousekeepingRoomSchedulesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingRoomSchedulesToBeChangedWithDefaults

`func NewHousekeepingRoomSchedulesToBeChangedWithDefaults() *HousekeepingRoomSchedulesToBeChanged`

NewHousekeepingRoomSchedulesToBeChangedWithDefaults instantiates a new HousekeepingRoomSchedulesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRoomSchedules

`func (o *HousekeepingRoomSchedulesToBeChanged) GetHousekeepingRoomSchedules() []ConfigHousekeepingRoomScheduleType`

GetHousekeepingRoomSchedules returns the HousekeepingRoomSchedules field if non-nil, zero value otherwise.

### GetHousekeepingRoomSchedulesOk

`func (o *HousekeepingRoomSchedulesToBeChanged) GetHousekeepingRoomSchedulesOk() (*[]ConfigHousekeepingRoomScheduleType, bool)`

GetHousekeepingRoomSchedulesOk returns a tuple with the HousekeepingRoomSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomSchedules

`func (o *HousekeepingRoomSchedulesToBeChanged) SetHousekeepingRoomSchedules(v []ConfigHousekeepingRoomScheduleType)`

SetHousekeepingRoomSchedules sets HousekeepingRoomSchedules field to given value.

### HasHousekeepingRoomSchedules

`func (o *HousekeepingRoomSchedulesToBeChanged) HasHousekeepingRoomSchedules() bool`

HasHousekeepingRoomSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingRoomSchedulesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingRoomSchedulesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingRoomSchedulesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingRoomSchedulesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingRoomSchedulesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingRoomSchedulesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingRoomSchedulesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingRoomSchedulesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


