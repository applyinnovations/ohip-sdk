# HousekeepingRoomSchedulesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingRoomSchedules** | Pointer to [**[]ConfigHousekeepingRoomScheduleType**](ConfigHousekeepingRoomScheduleType.md) | This type holds a collection of housekeeping tasks attached to a room type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingRoomSchedulesDetails

`func NewHousekeepingRoomSchedulesDetails() *HousekeepingRoomSchedulesDetails`

NewHousekeepingRoomSchedulesDetails instantiates a new HousekeepingRoomSchedulesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingRoomSchedulesDetailsWithDefaults

`func NewHousekeepingRoomSchedulesDetailsWithDefaults() *HousekeepingRoomSchedulesDetails`

NewHousekeepingRoomSchedulesDetailsWithDefaults instantiates a new HousekeepingRoomSchedulesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRoomSchedules

`func (o *HousekeepingRoomSchedulesDetails) GetHousekeepingRoomSchedules() []ConfigHousekeepingRoomScheduleType`

GetHousekeepingRoomSchedules returns the HousekeepingRoomSchedules field if non-nil, zero value otherwise.

### GetHousekeepingRoomSchedulesOk

`func (o *HousekeepingRoomSchedulesDetails) GetHousekeepingRoomSchedulesOk() (*[]ConfigHousekeepingRoomScheduleType, bool)`

GetHousekeepingRoomSchedulesOk returns a tuple with the HousekeepingRoomSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomSchedules

`func (o *HousekeepingRoomSchedulesDetails) SetHousekeepingRoomSchedules(v []ConfigHousekeepingRoomScheduleType)`

SetHousekeepingRoomSchedules sets HousekeepingRoomSchedules field to given value.

### HasHousekeepingRoomSchedules

`func (o *HousekeepingRoomSchedulesDetails) HasHousekeepingRoomSchedules() bool`

HasHousekeepingRoomSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingRoomSchedulesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingRoomSchedulesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingRoomSchedulesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingRoomSchedulesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingRoomSchedulesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingRoomSchedulesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingRoomSchedulesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingRoomSchedulesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


