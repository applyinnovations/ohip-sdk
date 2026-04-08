# RoomSpecialRatings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomSpecialRatingsInfo** | Pointer to [**[]RoomSpecialRatingInfoType**](RoomSpecialRatingInfoType.md) | Collection of rooms specials and their ratings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomSpecialRatings

`func NewRoomSpecialRatings() *RoomSpecialRatings`

NewRoomSpecialRatings instantiates a new RoomSpecialRatings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomSpecialRatingsWithDefaults

`func NewRoomSpecialRatingsWithDefaults() *RoomSpecialRatings`

NewRoomSpecialRatingsWithDefaults instantiates a new RoomSpecialRatings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomSpecialRatingsInfo

`func (o *RoomSpecialRatings) GetRoomSpecialRatingsInfo() []RoomSpecialRatingInfoType`

GetRoomSpecialRatingsInfo returns the RoomSpecialRatingsInfo field if non-nil, zero value otherwise.

### GetRoomSpecialRatingsInfoOk

`func (o *RoomSpecialRatings) GetRoomSpecialRatingsInfoOk() (*[]RoomSpecialRatingInfoType, bool)`

GetRoomSpecialRatingsInfoOk returns a tuple with the RoomSpecialRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSpecialRatingsInfo

`func (o *RoomSpecialRatings) SetRoomSpecialRatingsInfo(v []RoomSpecialRatingInfoType)`

SetRoomSpecialRatingsInfo sets RoomSpecialRatingsInfo field to given value.

### HasRoomSpecialRatingsInfo

`func (o *RoomSpecialRatings) HasRoomSpecialRatingsInfo() bool`

HasRoomSpecialRatingsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *RoomSpecialRatings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomSpecialRatings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomSpecialRatings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomSpecialRatings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomSpecialRatings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomSpecialRatings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomSpecialRatings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomSpecialRatings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


