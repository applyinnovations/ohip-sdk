# RoomClassCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomClass** | Pointer to [**RoomClassType**](RoomClassType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomClassCriteria

`func NewRoomClassCriteria() *RoomClassCriteria`

NewRoomClassCriteria instantiates a new RoomClassCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassCriteriaWithDefaults

`func NewRoomClassCriteriaWithDefaults() *RoomClassCriteria`

NewRoomClassCriteriaWithDefaults instantiates a new RoomClassCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomClass

`func (o *RoomClassCriteria) GetRoomClass() RoomClassType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomClassCriteria) GetRoomClassOk() (*RoomClassType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomClassCriteria) SetRoomClass(v RoomClassType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomClassCriteria) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetLinks

`func (o *RoomClassCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomClassCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomClassCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomClassCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomClassCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomClassCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomClassCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomClassCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


