# PostRoomingListRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInfo** | Pointer to [**RoomingListBlockInfoType**](RoomingListBlockInfoType.md) |  | [optional] 
**Reservations** | Pointer to [**RoomingListReservationsType**](RoomingListReservationsType.md) |  | [optional] 
**Shares** | Pointer to [**[]RoomingListShareType**](RoomingListShareType.md) | Contains a set of rooming list reservations that need to be shared. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRoomingListRequest

`func NewPostRoomingListRequest() *PostRoomingListRequest`

NewPostRoomingListRequest instantiates a new PostRoomingListRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomingListRequestWithDefaults

`func NewPostRoomingListRequestWithDefaults() *PostRoomingListRequest`

NewPostRoomingListRequestWithDefaults instantiates a new PostRoomingListRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInfo

`func (o *PostRoomingListRequest) GetBlockInfo() RoomingListBlockInfoType`

GetBlockInfo returns the BlockInfo field if non-nil, zero value otherwise.

### GetBlockInfoOk

`func (o *PostRoomingListRequest) GetBlockInfoOk() (*RoomingListBlockInfoType, bool)`

GetBlockInfoOk returns a tuple with the BlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInfo

`func (o *PostRoomingListRequest) SetBlockInfo(v RoomingListBlockInfoType)`

SetBlockInfo sets BlockInfo field to given value.

### HasBlockInfo

`func (o *PostRoomingListRequest) HasBlockInfo() bool`

HasBlockInfo returns a boolean if a field has been set.

### GetReservations

`func (o *PostRoomingListRequest) GetReservations() RoomingListReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PostRoomingListRequest) GetReservationsOk() (*RoomingListReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PostRoomingListRequest) SetReservations(v RoomingListReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PostRoomingListRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetShares

`func (o *PostRoomingListRequest) GetShares() []RoomingListShareType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *PostRoomingListRequest) GetSharesOk() (*[]RoomingListShareType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *PostRoomingListRequest) SetShares(v []RoomingListShareType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *PostRoomingListRequest) HasShares() bool`

HasShares returns a boolean if a field has been set.

### GetLinks

`func (o *PostRoomingListRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomingListRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomingListRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomingListRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomingListRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomingListRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomingListRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomingListRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


