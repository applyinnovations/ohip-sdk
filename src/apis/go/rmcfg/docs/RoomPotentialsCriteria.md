# RoomPotentialsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomPotentials** | Pointer to [**[]RoomPotentialType**](RoomPotentialType.md) | List of Room Potentials. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomPotentialsCriteria

`func NewRoomPotentialsCriteria() *RoomPotentialsCriteria`

NewRoomPotentialsCriteria instantiates a new RoomPotentialsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomPotentialsCriteriaWithDefaults

`func NewRoomPotentialsCriteriaWithDefaults() *RoomPotentialsCriteria`

NewRoomPotentialsCriteriaWithDefaults instantiates a new RoomPotentialsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomPotentials

`func (o *RoomPotentialsCriteria) GetRoomPotentials() []RoomPotentialType`

GetRoomPotentials returns the RoomPotentials field if non-nil, zero value otherwise.

### GetRoomPotentialsOk

`func (o *RoomPotentialsCriteria) GetRoomPotentialsOk() (*[]RoomPotentialType, bool)`

GetRoomPotentialsOk returns a tuple with the RoomPotentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPotentials

`func (o *RoomPotentialsCriteria) SetRoomPotentials(v []RoomPotentialType)`

SetRoomPotentials sets RoomPotentials field to given value.

### HasRoomPotentials

`func (o *RoomPotentialsCriteria) HasRoomPotentials() bool`

HasRoomPotentials returns a boolean if a field has been set.

### GetLinks

`func (o *RoomPotentialsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomPotentialsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomPotentialsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomPotentialsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomPotentialsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomPotentialsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomPotentialsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomPotentialsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


