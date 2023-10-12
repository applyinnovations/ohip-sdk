# PostRoomOwnerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwner** | Pointer to [**RoomOwnerType**](RoomOwnerType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRoomOwnerRequest

`func NewPostRoomOwnerRequest() *PostRoomOwnerRequest`

NewPostRoomOwnerRequest instantiates a new PostRoomOwnerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomOwnerRequestWithDefaults

`func NewPostRoomOwnerRequestWithDefaults() *PostRoomOwnerRequest`

NewPostRoomOwnerRequestWithDefaults instantiates a new PostRoomOwnerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwner

`func (o *PostRoomOwnerRequest) GetRoomOwner() RoomOwnerType`

GetRoomOwner returns the RoomOwner field if non-nil, zero value otherwise.

### GetRoomOwnerOk

`func (o *PostRoomOwnerRequest) GetRoomOwnerOk() (*RoomOwnerType, bool)`

GetRoomOwnerOk returns a tuple with the RoomOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwner

`func (o *PostRoomOwnerRequest) SetRoomOwner(v RoomOwnerType)`

SetRoomOwner sets RoomOwner field to given value.

### HasRoomOwner

`func (o *PostRoomOwnerRequest) HasRoomOwner() bool`

HasRoomOwner returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomOwnerRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomOwnerRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomOwnerRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomOwnerRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


