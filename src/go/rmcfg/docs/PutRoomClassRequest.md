# PutRoomClassRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomClass** | Pointer to [**RoomClassType**](RoomClassType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRoomClassRequest

`func NewPutRoomClassRequest() *PutRoomClassRequest`

NewPutRoomClassRequest instantiates a new PutRoomClassRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomClassRequestWithDefaults

`func NewPutRoomClassRequestWithDefaults() *PutRoomClassRequest`

NewPutRoomClassRequestWithDefaults instantiates a new PutRoomClassRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRoomClassRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomClassRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomClassRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomClassRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomClass

`func (o *PutRoomClassRequest) GetRoomClass() RoomClassType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *PutRoomClassRequest) GetRoomClassOk() (*RoomClassType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *PutRoomClassRequest) SetRoomClass(v RoomClassType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *PutRoomClassRequest) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomClassRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomClassRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomClassRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomClassRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


