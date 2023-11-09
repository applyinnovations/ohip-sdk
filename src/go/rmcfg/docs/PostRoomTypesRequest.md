# PostRoomTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomType** | Pointer to [**RoomTypesCriteriaRoomType**](RoomTypesCriteriaRoomType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomTypesRequest

`func NewPostRoomTypesRequest() *PostRoomTypesRequest`

NewPostRoomTypesRequest instantiates a new PostRoomTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomTypesRequestWithDefaults

`func NewPostRoomTypesRequestWithDefaults() *PostRoomTypesRequest`

NewPostRoomTypesRequestWithDefaults instantiates a new PostRoomTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRoomTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomType

`func (o *PostRoomTypesRequest) GetRoomType() RoomTypesCriteriaRoomType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *PostRoomTypesRequest) GetRoomTypeOk() (*RoomTypesCriteriaRoomType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *PostRoomTypesRequest) SetRoomType(v RoomTypesCriteriaRoomType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *PostRoomTypesRequest) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


