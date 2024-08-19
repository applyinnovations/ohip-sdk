# RoomTypePoolCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomPoolTypes** | Pointer to [**[]RoomTypePoolType**](RoomTypePoolType.md) | Collection of room type pool and associated room type(s). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypePoolCriteria

`func NewRoomTypePoolCriteria() *RoomTypePoolCriteria`

NewRoomTypePoolCriteria instantiates a new RoomTypePoolCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypePoolCriteriaWithDefaults

`func NewRoomTypePoolCriteriaWithDefaults() *RoomTypePoolCriteria`

NewRoomTypePoolCriteriaWithDefaults instantiates a new RoomTypePoolCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomTypePoolCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypePoolCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypePoolCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypePoolCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomPoolTypes

`func (o *RoomTypePoolCriteria) GetRoomPoolTypes() []RoomTypePoolType`

GetRoomPoolTypes returns the RoomPoolTypes field if non-nil, zero value otherwise.

### GetRoomPoolTypesOk

`func (o *RoomTypePoolCriteria) GetRoomPoolTypesOk() (*[]RoomTypePoolType, bool)`

GetRoomPoolTypesOk returns a tuple with the RoomPoolTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPoolTypes

`func (o *RoomTypePoolCriteria) SetRoomPoolTypes(v []RoomTypePoolType)`

SetRoomPoolTypes sets RoomPoolTypes field to given value.

### HasRoomPoolTypes

`func (o *RoomTypePoolCriteria) HasRoomPoolTypes() bool`

HasRoomPoolTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypePoolCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypePoolCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypePoolCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypePoolCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


