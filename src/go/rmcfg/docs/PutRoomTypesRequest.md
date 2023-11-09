# PutRoomTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomType** | Pointer to [**RoomTypesToBeChangedRoomType**](RoomTypesToBeChangedRoomType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRoomTypesRequest

`func NewPutRoomTypesRequest() *PutRoomTypesRequest`

NewPutRoomTypesRequest instantiates a new PutRoomTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomTypesRequestWithDefaults

`func NewPutRoomTypesRequestWithDefaults() *PutRoomTypesRequest`

NewPutRoomTypesRequestWithDefaults instantiates a new PutRoomTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRoomTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomType

`func (o *PutRoomTypesRequest) GetRoomType() RoomTypesToBeChangedRoomType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *PutRoomTypesRequest) GetRoomTypeOk() (*RoomTypesToBeChangedRoomType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *PutRoomTypesRequest) SetRoomType(v RoomTypesToBeChangedRoomType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *PutRoomTypesRequest) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


