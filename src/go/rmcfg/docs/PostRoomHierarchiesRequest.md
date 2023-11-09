# PostRoomHierarchiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomHierarchies** | Pointer to [**CreateRoomHierarchiesType**](CreateRoomHierarchiesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomHierarchiesRequest

`func NewPostRoomHierarchiesRequest() *PostRoomHierarchiesRequest`

NewPostRoomHierarchiesRequest instantiates a new PostRoomHierarchiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomHierarchiesRequestWithDefaults

`func NewPostRoomHierarchiesRequestWithDefaults() *PostRoomHierarchiesRequest`

NewPostRoomHierarchiesRequestWithDefaults instantiates a new PostRoomHierarchiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRoomHierarchiesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomHierarchiesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomHierarchiesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomHierarchiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomHierarchies

`func (o *PostRoomHierarchiesRequest) GetRoomHierarchies() CreateRoomHierarchiesType`

GetRoomHierarchies returns the RoomHierarchies field if non-nil, zero value otherwise.

### GetRoomHierarchiesOk

`func (o *PostRoomHierarchiesRequest) GetRoomHierarchiesOk() (*CreateRoomHierarchiesType, bool)`

GetRoomHierarchiesOk returns a tuple with the RoomHierarchies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomHierarchies

`func (o *PostRoomHierarchiesRequest) SetRoomHierarchies(v CreateRoomHierarchiesType)`

SetRoomHierarchies sets RoomHierarchies field to given value.

### HasRoomHierarchies

`func (o *PostRoomHierarchiesRequest) HasRoomHierarchies() bool`

HasRoomHierarchies returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomHierarchiesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomHierarchiesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomHierarchiesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomHierarchiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


