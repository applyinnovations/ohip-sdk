# RoomKeyGuest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | Pointer to **string** | First Name of the guest. | [optional] 
**GuestKeyOptions** | Pointer to **string** |  | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**IsAdult** | Pointer to **bool** | Flag to indicate wheter the guest is an Adult or a child. | [optional] 
**IsInactive** | Pointer to **bool** | Flag to indicate wheter the guest is an Adult or a child. | [optional] 
**KeyNumber** | Pointer to **float32** | Key Number of the card. | [optional] 
**LastName** | Pointer to **string** | Last Name of the guest. | [optional] 
**OriginalBalance** | Pointer to **float32** | Original Balance on the Key card. | [optional] 
**RemainingBalance** | Pointer to **float32** | Remaining Balance on the Key card. | [optional] 

## Methods

### NewRoomKeyGuest

`func NewRoomKeyGuest() *RoomKeyGuest`

NewRoomKeyGuest instantiates a new RoomKeyGuest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyGuestWithDefaults

`func NewRoomKeyGuestWithDefaults() *RoomKeyGuest`

NewRoomKeyGuestWithDefaults instantiates a new RoomKeyGuest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFirstName

`func (o *RoomKeyGuest) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *RoomKeyGuest) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *RoomKeyGuest) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *RoomKeyGuest) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetGuestKeyOptions

`func (o *RoomKeyGuest) GetGuestKeyOptions() string`

GetGuestKeyOptions returns the GuestKeyOptions field if non-nil, zero value otherwise.

### GetGuestKeyOptionsOk

`func (o *RoomKeyGuest) GetGuestKeyOptionsOk() (*string, bool)`

GetGuestKeyOptionsOk returns a tuple with the GuestKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestKeyOptions

`func (o *RoomKeyGuest) SetGuestKeyOptions(v string)`

SetGuestKeyOptions sets GuestKeyOptions field to given value.

### HasGuestKeyOptions

`func (o *RoomKeyGuest) HasGuestKeyOptions() bool`

HasGuestKeyOptions returns a boolean if a field has been set.

### GetGuestNameId

`func (o *RoomKeyGuest) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *RoomKeyGuest) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *RoomKeyGuest) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *RoomKeyGuest) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetIsAdult

`func (o *RoomKeyGuest) GetIsAdult() bool`

GetIsAdult returns the IsAdult field if non-nil, zero value otherwise.

### GetIsAdultOk

`func (o *RoomKeyGuest) GetIsAdultOk() (*bool, bool)`

GetIsAdultOk returns a tuple with the IsAdult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAdult

`func (o *RoomKeyGuest) SetIsAdult(v bool)`

SetIsAdult sets IsAdult field to given value.

### HasIsAdult

`func (o *RoomKeyGuest) HasIsAdult() bool`

HasIsAdult returns a boolean if a field has been set.

### GetIsInactive

`func (o *RoomKeyGuest) GetIsInactive() bool`

GetIsInactive returns the IsInactive field if non-nil, zero value otherwise.

### GetIsInactiveOk

`func (o *RoomKeyGuest) GetIsInactiveOk() (*bool, bool)`

GetIsInactiveOk returns a tuple with the IsInactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsInactive

`func (o *RoomKeyGuest) SetIsInactive(v bool)`

SetIsInactive sets IsInactive field to given value.

### HasIsInactive

`func (o *RoomKeyGuest) HasIsInactive() bool`

HasIsInactive returns a boolean if a field has been set.

### GetKeyNumber

`func (o *RoomKeyGuest) GetKeyNumber() float32`

GetKeyNumber returns the KeyNumber field if non-nil, zero value otherwise.

### GetKeyNumberOk

`func (o *RoomKeyGuest) GetKeyNumberOk() (*float32, bool)`

GetKeyNumberOk returns a tuple with the KeyNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyNumber

`func (o *RoomKeyGuest) SetKeyNumber(v float32)`

SetKeyNumber sets KeyNumber field to given value.

### HasKeyNumber

`func (o *RoomKeyGuest) HasKeyNumber() bool`

HasKeyNumber returns a boolean if a field has been set.

### GetLastName

`func (o *RoomKeyGuest) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *RoomKeyGuest) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *RoomKeyGuest) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *RoomKeyGuest) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetOriginalBalance

`func (o *RoomKeyGuest) GetOriginalBalance() float32`

GetOriginalBalance returns the OriginalBalance field if non-nil, zero value otherwise.

### GetOriginalBalanceOk

`func (o *RoomKeyGuest) GetOriginalBalanceOk() (*float32, bool)`

GetOriginalBalanceOk returns a tuple with the OriginalBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalBalance

`func (o *RoomKeyGuest) SetOriginalBalance(v float32)`

SetOriginalBalance sets OriginalBalance field to given value.

### HasOriginalBalance

`func (o *RoomKeyGuest) HasOriginalBalance() bool`

HasOriginalBalance returns a boolean if a field has been set.

### GetRemainingBalance

`func (o *RoomKeyGuest) GetRemainingBalance() float32`

GetRemainingBalance returns the RemainingBalance field if non-nil, zero value otherwise.

### GetRemainingBalanceOk

`func (o *RoomKeyGuest) GetRemainingBalanceOk() (*float32, bool)`

GetRemainingBalanceOk returns a tuple with the RemainingBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemainingBalance

`func (o *RoomKeyGuest) SetRemainingBalance(v float32)`

SetRemainingBalance sets RemainingBalance field to given value.

### HasRemainingBalance

`func (o *RoomKeyGuest) HasRemainingBalance() bool`

HasRemainingBalance returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


