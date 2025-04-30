# RoomFeatureRatings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomFeatureRatingsInfo** | Pointer to [**[]RoomFeatureRatingInfoType**](RoomFeatureRatingInfoType.md) | Collection of rooms features and their ratings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomFeatureRatings

`func NewRoomFeatureRatings() *RoomFeatureRatings`

NewRoomFeatureRatings instantiates a new RoomFeatureRatings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomFeatureRatingsWithDefaults

`func NewRoomFeatureRatingsWithDefaults() *RoomFeatureRatings`

NewRoomFeatureRatingsWithDefaults instantiates a new RoomFeatureRatings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomFeatureRatingsInfo

`func (o *RoomFeatureRatings) GetRoomFeatureRatingsInfo() []RoomFeatureRatingInfoType`

GetRoomFeatureRatingsInfo returns the RoomFeatureRatingsInfo field if non-nil, zero value otherwise.

### GetRoomFeatureRatingsInfoOk

`func (o *RoomFeatureRatings) GetRoomFeatureRatingsInfoOk() (*[]RoomFeatureRatingInfoType, bool)`

GetRoomFeatureRatingsInfoOk returns a tuple with the RoomFeatureRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatureRatingsInfo

`func (o *RoomFeatureRatings) SetRoomFeatureRatingsInfo(v []RoomFeatureRatingInfoType)`

SetRoomFeatureRatingsInfo sets RoomFeatureRatingsInfo field to given value.

### HasRoomFeatureRatingsInfo

`func (o *RoomFeatureRatings) HasRoomFeatureRatingsInfo() bool`

HasRoomFeatureRatingsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *RoomFeatureRatings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomFeatureRatings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomFeatureRatings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomFeatureRatings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomFeatureRatings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomFeatureRatings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomFeatureRatings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomFeatureRatings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


