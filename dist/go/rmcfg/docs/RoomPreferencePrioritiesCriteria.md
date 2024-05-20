# RoomPreferencePrioritiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomPreferencePriorities** | Pointer to [**[]RoomPreferencePriorityType**](RoomPreferencePriorityType.md) | List of Room Preference Priorities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomPreferencePrioritiesCriteria

`func NewRoomPreferencePrioritiesCriteria() *RoomPreferencePrioritiesCriteria`

NewRoomPreferencePrioritiesCriteria instantiates a new RoomPreferencePrioritiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomPreferencePrioritiesCriteriaWithDefaults

`func NewRoomPreferencePrioritiesCriteriaWithDefaults() *RoomPreferencePrioritiesCriteria`

NewRoomPreferencePrioritiesCriteriaWithDefaults instantiates a new RoomPreferencePrioritiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomPreferencePrioritiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomPreferencePrioritiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomPreferencePrioritiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomPreferencePrioritiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomPreferencePriorities

`func (o *RoomPreferencePrioritiesCriteria) GetRoomPreferencePriorities() []RoomPreferencePriorityType`

GetRoomPreferencePriorities returns the RoomPreferencePriorities field if non-nil, zero value otherwise.

### GetRoomPreferencePrioritiesOk

`func (o *RoomPreferencePrioritiesCriteria) GetRoomPreferencePrioritiesOk() (*[]RoomPreferencePriorityType, bool)`

GetRoomPreferencePrioritiesOk returns a tuple with the RoomPreferencePriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPreferencePriorities

`func (o *RoomPreferencePrioritiesCriteria) SetRoomPreferencePriorities(v []RoomPreferencePriorityType)`

SetRoomPreferencePriorities sets RoomPreferencePriorities field to given value.

### HasRoomPreferencePriorities

`func (o *RoomPreferencePrioritiesCriteria) HasRoomPreferencePriorities() bool`

HasRoomPreferencePriorities returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomPreferencePrioritiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomPreferencePrioritiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomPreferencePrioritiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomPreferencePrioritiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


