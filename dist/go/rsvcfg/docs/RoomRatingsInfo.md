# RoomRatingsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomRatingsInfo** | Pointer to [**[]RoomRatingInfoType**](RoomRatingInfoType.md) | Collection of rooms and their ratings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomRatingsInfo

`func NewRoomRatingsInfo() *RoomRatingsInfo`

NewRoomRatingsInfo instantiates a new RoomRatingsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRatingsInfoWithDefaults

`func NewRoomRatingsInfoWithDefaults() *RoomRatingsInfo`

NewRoomRatingsInfoWithDefaults instantiates a new RoomRatingsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomRatingsInfo

`func (o *RoomRatingsInfo) GetRoomRatingsInfo() []RoomRatingInfoType`

GetRoomRatingsInfo returns the RoomRatingsInfo field if non-nil, zero value otherwise.

### GetRoomRatingsInfoOk

`func (o *RoomRatingsInfo) GetRoomRatingsInfoOk() (*[]RoomRatingInfoType, bool)`

GetRoomRatingsInfoOk returns a tuple with the RoomRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRatingsInfo

`func (o *RoomRatingsInfo) SetRoomRatingsInfo(v []RoomRatingInfoType)`

SetRoomRatingsInfo sets RoomRatingsInfo field to given value.

### HasRoomRatingsInfo

`func (o *RoomRatingsInfo) HasRoomRatingsInfo() bool`

HasRoomRatingsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *RoomRatingsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomRatingsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomRatingsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomRatingsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomRatingsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomRatingsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomRatingsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomRatingsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


