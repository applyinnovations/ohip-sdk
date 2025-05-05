# RoomTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to [**RoomTypesCriteriaRoomType**](RoomTypesCriteriaRoomType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypesCriteria

`func NewRoomTypesCriteria() *RoomTypesCriteria`

NewRoomTypesCriteria instantiates a new RoomTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypesCriteriaWithDefaults

`func NewRoomTypesCriteriaWithDefaults() *RoomTypesCriteria`

NewRoomTypesCriteriaWithDefaults instantiates a new RoomTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *RoomTypesCriteria) GetRoomType() RoomTypesCriteriaRoomType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypesCriteria) GetRoomTypeOk() (*RoomTypesCriteriaRoomType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypesCriteria) SetRoomType(v RoomTypesCriteriaRoomType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypesCriteria) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetLinks

`func (o *RoomTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


