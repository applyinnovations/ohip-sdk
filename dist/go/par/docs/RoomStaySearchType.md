# RoomStaySearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Quantity** | Pointer to **int32** |  | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 

## Methods

### NewRoomStaySearchType

`func NewRoomStaySearchType() *RoomStaySearchType`

NewRoomStaySearchType instantiates a new RoomStaySearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomStaySearchTypeWithDefaults

`func NewRoomStaySearchTypeWithDefaults() *RoomStaySearchType`

NewRoomStaySearchTypeWithDefaults instantiates a new RoomStaySearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeSpan

`func (o *RoomStaySearchType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *RoomStaySearchType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *RoomStaySearchType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *RoomStaySearchType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetQuantity

`func (o *RoomStaySearchType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *RoomStaySearchType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *RoomStaySearchType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *RoomStaySearchType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetGuestCounts

`func (o *RoomStaySearchType) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *RoomStaySearchType) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *RoomStaySearchType) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *RoomStaySearchType) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


