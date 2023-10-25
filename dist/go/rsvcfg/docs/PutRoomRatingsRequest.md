# PutRoomRatingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomRatingsInfo** | Pointer to [**[]RoomRatingInfoType**](RoomRatingInfoType.md) | Collection of rooms and their ratings. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRoomRatingsRequest

`func NewPutRoomRatingsRequest() *PutRoomRatingsRequest`

NewPutRoomRatingsRequest instantiates a new PutRoomRatingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomRatingsRequestWithDefaults

`func NewPutRoomRatingsRequestWithDefaults() *PutRoomRatingsRequest`

NewPutRoomRatingsRequestWithDefaults instantiates a new PutRoomRatingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRoomRatingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomRatingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomRatingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomRatingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomRatingsInfo

`func (o *PutRoomRatingsRequest) GetRoomRatingsInfo() []RoomRatingInfoType`

GetRoomRatingsInfo returns the RoomRatingsInfo field if non-nil, zero value otherwise.

### GetRoomRatingsInfoOk

`func (o *PutRoomRatingsRequest) GetRoomRatingsInfoOk() (*[]RoomRatingInfoType, bool)`

GetRoomRatingsInfoOk returns a tuple with the RoomRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRatingsInfo

`func (o *PutRoomRatingsRequest) SetRoomRatingsInfo(v []RoomRatingInfoType)`

SetRoomRatingsInfo sets RoomRatingsInfo field to given value.

### HasRoomRatingsInfo

`func (o *PutRoomRatingsRequest) HasRoomRatingsInfo() bool`

HasRoomRatingsInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomRatingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomRatingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomRatingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomRatingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


