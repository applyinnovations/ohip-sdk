# PutRoomTypeOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomTypes** | Pointer to [**RoomOrderType**](RoomOrderType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRoomTypeOrderRequest

`func NewPutRoomTypeOrderRequest() *PutRoomTypeOrderRequest`

NewPutRoomTypeOrderRequest instantiates a new PutRoomTypeOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomTypeOrderRequestWithDefaults

`func NewPutRoomTypeOrderRequestWithDefaults() *PutRoomTypeOrderRequest`

NewPutRoomTypeOrderRequestWithDefaults instantiates a new PutRoomTypeOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRoomTypeOrderRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomTypeOrderRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomTypeOrderRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomTypeOrderRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomTypes

`func (o *PutRoomTypeOrderRequest) GetRoomTypes() RoomOrderType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *PutRoomTypeOrderRequest) GetRoomTypesOk() (*RoomOrderType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *PutRoomTypeOrderRequest) SetRoomTypes(v RoomOrderType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *PutRoomTypeOrderRequest) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomTypeOrderRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomTypeOrderRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomTypeOrderRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomTypeOrderRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


