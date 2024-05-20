# LinkedAllowanceReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmationNo** | Pointer to **string** | Reservation confirmation number. | [optional] 
**ConsumeSharedAllowances** | Pointer to **bool** | Indicates that guest is allowed to consumed shared allowances from others. | [optional] 
**GuestDisplayName** | Pointer to **string** | Display Name for the guest. | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RoomId** | Pointer to **string** | Guest Room number. | [optional] 

## Methods

### NewLinkedAllowanceReservationInfoType

`func NewLinkedAllowanceReservationInfoType() *LinkedAllowanceReservationInfoType`

NewLinkedAllowanceReservationInfoType instantiates a new LinkedAllowanceReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedAllowanceReservationInfoTypeWithDefaults

`func NewLinkedAllowanceReservationInfoTypeWithDefaults() *LinkedAllowanceReservationInfoType`

NewLinkedAllowanceReservationInfoTypeWithDefaults instantiates a new LinkedAllowanceReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmationNo

`func (o *LinkedAllowanceReservationInfoType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *LinkedAllowanceReservationInfoType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *LinkedAllowanceReservationInfoType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *LinkedAllowanceReservationInfoType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetConsumeSharedAllowances

`func (o *LinkedAllowanceReservationInfoType) GetConsumeSharedAllowances() bool`

GetConsumeSharedAllowances returns the ConsumeSharedAllowances field if non-nil, zero value otherwise.

### GetConsumeSharedAllowancesOk

`func (o *LinkedAllowanceReservationInfoType) GetConsumeSharedAllowancesOk() (*bool, bool)`

GetConsumeSharedAllowancesOk returns a tuple with the ConsumeSharedAllowances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumeSharedAllowances

`func (o *LinkedAllowanceReservationInfoType) SetConsumeSharedAllowances(v bool)`

SetConsumeSharedAllowances sets ConsumeSharedAllowances field to given value.

### HasConsumeSharedAllowances

`func (o *LinkedAllowanceReservationInfoType) HasConsumeSharedAllowances() bool`

HasConsumeSharedAllowances returns a boolean if a field has been set.

### GetGuestDisplayName

`func (o *LinkedAllowanceReservationInfoType) GetGuestDisplayName() string`

GetGuestDisplayName returns the GuestDisplayName field if non-nil, zero value otherwise.

### GetGuestDisplayNameOk

`func (o *LinkedAllowanceReservationInfoType) GetGuestDisplayNameOk() (*string, bool)`

GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDisplayName

`func (o *LinkedAllowanceReservationInfoType) SetGuestDisplayName(v string)`

SetGuestDisplayName sets GuestDisplayName field to given value.

### HasGuestDisplayName

`func (o *LinkedAllowanceReservationInfoType) HasGuestDisplayName() bool`

HasGuestDisplayName returns a boolean if a field has been set.

### GetGuestNameId

`func (o *LinkedAllowanceReservationInfoType) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *LinkedAllowanceReservationInfoType) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *LinkedAllowanceReservationInfoType) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *LinkedAllowanceReservationInfoType) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetReservationId

`func (o *LinkedAllowanceReservationInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *LinkedAllowanceReservationInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *LinkedAllowanceReservationInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *LinkedAllowanceReservationInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoomId

`func (o *LinkedAllowanceReservationInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *LinkedAllowanceReservationInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *LinkedAllowanceReservationInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *LinkedAllowanceReservationInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


