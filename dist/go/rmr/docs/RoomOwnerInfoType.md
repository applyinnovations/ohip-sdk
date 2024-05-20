# RoomOwnerInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractNumber** | Pointer to **string** | Contract number for Room Ownership record. | [optional] 
**EndDate** | Pointer to **string** | End Date of the Room Ownership record. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of Room Ownership record. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Room Owner is inactive. | [optional] 
**OwnerDisplayName** | Pointer to **string** | Display Name for the Room Owner. | [optional] 
**OwnerExclusive** | Pointer to **bool** | Indicates whether Room is available for the exclusive use of its designated owner and owner referrals, or if it is available in general availability. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room Id of Room Ownership record. | [optional] 
**RoomOwnershipId** | Pointer to **int32** | Unique Id for Room Ownership record. | [optional] 
**RoomType** | Pointer to **string** | Room Type of the Room Ownership record. | [optional] 
**StartDate** | Pointer to **string** | Start Date of the Room Ownership record. | [optional] 

## Methods

### NewRoomOwnerInfoType

`func NewRoomOwnerInfoType() *RoomOwnerInfoType`

NewRoomOwnerInfoType instantiates a new RoomOwnerInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOwnerInfoTypeWithDefaults

`func NewRoomOwnerInfoTypeWithDefaults() *RoomOwnerInfoType`

NewRoomOwnerInfoTypeWithDefaults instantiates a new RoomOwnerInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractNumber

`func (o *RoomOwnerInfoType) GetContractNumber() string`

GetContractNumber returns the ContractNumber field if non-nil, zero value otherwise.

### GetContractNumberOk

`func (o *RoomOwnerInfoType) GetContractNumberOk() (*string, bool)`

GetContractNumberOk returns a tuple with the ContractNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractNumber

`func (o *RoomOwnerInfoType) SetContractNumber(v string)`

SetContractNumber sets ContractNumber field to given value.

### HasContractNumber

`func (o *RoomOwnerInfoType) HasContractNumber() bool`

HasContractNumber returns a boolean if a field has been set.

### GetEndDate

`func (o *RoomOwnerInfoType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *RoomOwnerInfoType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *RoomOwnerInfoType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *RoomOwnerInfoType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomOwnerInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomOwnerInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomOwnerInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomOwnerInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *RoomOwnerInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomOwnerInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomOwnerInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomOwnerInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOwnerDisplayName

`func (o *RoomOwnerInfoType) GetOwnerDisplayName() string`

GetOwnerDisplayName returns the OwnerDisplayName field if non-nil, zero value otherwise.

### GetOwnerDisplayNameOk

`func (o *RoomOwnerInfoType) GetOwnerDisplayNameOk() (*string, bool)`

GetOwnerDisplayNameOk returns a tuple with the OwnerDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerDisplayName

`func (o *RoomOwnerInfoType) SetOwnerDisplayName(v string)`

SetOwnerDisplayName sets OwnerDisplayName field to given value.

### HasOwnerDisplayName

`func (o *RoomOwnerInfoType) HasOwnerDisplayName() bool`

HasOwnerDisplayName returns a boolean if a field has been set.

### GetOwnerExclusive

`func (o *RoomOwnerInfoType) GetOwnerExclusive() bool`

GetOwnerExclusive returns the OwnerExclusive field if non-nil, zero value otherwise.

### GetOwnerExclusiveOk

`func (o *RoomOwnerInfoType) GetOwnerExclusiveOk() (*bool, bool)`

GetOwnerExclusiveOk returns a tuple with the OwnerExclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerExclusive

`func (o *RoomOwnerInfoType) SetOwnerExclusive(v bool)`

SetOwnerExclusive sets OwnerExclusive field to given value.

### HasOwnerExclusive

`func (o *RoomOwnerInfoType) HasOwnerExclusive() bool`

HasOwnerExclusive returns a boolean if a field has been set.

### GetProfileId

`func (o *RoomOwnerInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *RoomOwnerInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *RoomOwnerInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *RoomOwnerInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomOwnerInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomOwnerInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomOwnerInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomOwnerInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomOwnershipId

`func (o *RoomOwnerInfoType) GetRoomOwnershipId() int32`

GetRoomOwnershipId returns the RoomOwnershipId field if non-nil, zero value otherwise.

### GetRoomOwnershipIdOk

`func (o *RoomOwnerInfoType) GetRoomOwnershipIdOk() (*int32, bool)`

GetRoomOwnershipIdOk returns a tuple with the RoomOwnershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipId

`func (o *RoomOwnerInfoType) SetRoomOwnershipId(v int32)`

SetRoomOwnershipId sets RoomOwnershipId field to given value.

### HasRoomOwnershipId

`func (o *RoomOwnerInfoType) HasRoomOwnershipId() bool`

HasRoomOwnershipId returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomOwnerInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomOwnerInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomOwnerInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomOwnerInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetStartDate

`func (o *RoomOwnerInfoType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RoomOwnerInfoType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RoomOwnerInfoType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RoomOwnerInfoType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


