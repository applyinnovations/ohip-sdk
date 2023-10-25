# AssociatedRoomOwnershipInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociatedRoomOwnershipType** | Pointer to [**AssociatedRoomOwnershipType**](AssociatedRoomOwnershipType.md) |  | [optional] 
**EndDate** | Pointer to **string** | End date of Room Ownership contract | [optional] 
**HotelId** | Pointer to **string** | Hotel Id | [optional] 
**OwnerExclusive** | Pointer to **bool** | Whether Room is available for the exclusive use of its designated owner and owner referrals, or if it is available in general availability | [optional] 
**RoomId** | Pointer to **string** | Room Number | [optional] 
**RoomOwnershipId** | Pointer to **int32** | Unique Id for Room Owner record. | [optional] 
**RoomType** | Pointer to **string** | Room Type | [optional] 
**StartDate** | Pointer to **string** | Start date of Room Ownership contract | [optional] 

## Methods

### NewAssociatedRoomOwnershipInfoType

`func NewAssociatedRoomOwnershipInfoType() *AssociatedRoomOwnershipInfoType`

NewAssociatedRoomOwnershipInfoType instantiates a new AssociatedRoomOwnershipInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssociatedRoomOwnershipInfoTypeWithDefaults

`func NewAssociatedRoomOwnershipInfoTypeWithDefaults() *AssociatedRoomOwnershipInfoType`

NewAssociatedRoomOwnershipInfoTypeWithDefaults instantiates a new AssociatedRoomOwnershipInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociatedRoomOwnershipType

`func (o *AssociatedRoomOwnershipInfoType) GetAssociatedRoomOwnershipType() AssociatedRoomOwnershipType`

GetAssociatedRoomOwnershipType returns the AssociatedRoomOwnershipType field if non-nil, zero value otherwise.

### GetAssociatedRoomOwnershipTypeOk

`func (o *AssociatedRoomOwnershipInfoType) GetAssociatedRoomOwnershipTypeOk() (*AssociatedRoomOwnershipType, bool)`

GetAssociatedRoomOwnershipTypeOk returns a tuple with the AssociatedRoomOwnershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedRoomOwnershipType

`func (o *AssociatedRoomOwnershipInfoType) SetAssociatedRoomOwnershipType(v AssociatedRoomOwnershipType)`

SetAssociatedRoomOwnershipType sets AssociatedRoomOwnershipType field to given value.

### HasAssociatedRoomOwnershipType

`func (o *AssociatedRoomOwnershipInfoType) HasAssociatedRoomOwnershipType() bool`

HasAssociatedRoomOwnershipType returns a boolean if a field has been set.

### GetEndDate

`func (o *AssociatedRoomOwnershipInfoType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *AssociatedRoomOwnershipInfoType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *AssociatedRoomOwnershipInfoType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *AssociatedRoomOwnershipInfoType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHotelId

`func (o *AssociatedRoomOwnershipInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AssociatedRoomOwnershipInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AssociatedRoomOwnershipInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AssociatedRoomOwnershipInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOwnerExclusive

`func (o *AssociatedRoomOwnershipInfoType) GetOwnerExclusive() bool`

GetOwnerExclusive returns the OwnerExclusive field if non-nil, zero value otherwise.

### GetOwnerExclusiveOk

`func (o *AssociatedRoomOwnershipInfoType) GetOwnerExclusiveOk() (*bool, bool)`

GetOwnerExclusiveOk returns a tuple with the OwnerExclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerExclusive

`func (o *AssociatedRoomOwnershipInfoType) SetOwnerExclusive(v bool)`

SetOwnerExclusive sets OwnerExclusive field to given value.

### HasOwnerExclusive

`func (o *AssociatedRoomOwnershipInfoType) HasOwnerExclusive() bool`

HasOwnerExclusive returns a boolean if a field has been set.

### GetRoomId

`func (o *AssociatedRoomOwnershipInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *AssociatedRoomOwnershipInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *AssociatedRoomOwnershipInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *AssociatedRoomOwnershipInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomOwnershipId

`func (o *AssociatedRoomOwnershipInfoType) GetRoomOwnershipId() int32`

GetRoomOwnershipId returns the RoomOwnershipId field if non-nil, zero value otherwise.

### GetRoomOwnershipIdOk

`func (o *AssociatedRoomOwnershipInfoType) GetRoomOwnershipIdOk() (*int32, bool)`

GetRoomOwnershipIdOk returns a tuple with the RoomOwnershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipId

`func (o *AssociatedRoomOwnershipInfoType) SetRoomOwnershipId(v int32)`

SetRoomOwnershipId sets RoomOwnershipId field to given value.

### HasRoomOwnershipId

`func (o *AssociatedRoomOwnershipInfoType) HasRoomOwnershipId() bool`

HasRoomOwnershipId returns a boolean if a field has been set.

### GetRoomType

`func (o *AssociatedRoomOwnershipInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *AssociatedRoomOwnershipInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *AssociatedRoomOwnershipInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *AssociatedRoomOwnershipInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetStartDate

`func (o *AssociatedRoomOwnershipInfoType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *AssociatedRoomOwnershipInfoType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *AssociatedRoomOwnershipInfoType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *AssociatedRoomOwnershipInfoType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


