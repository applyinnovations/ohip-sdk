# CheckoutInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomStatus** | Pointer to **string** | Housekeeping Status to be assigned to the room after checkout. | [optional] 
**ScheduleOn** | Pointer to **string** | Date and time for scheduled check out which could be performed when SCHEDULED CHECKOUT is active. Room status will be assigned according to SCHEDULED CHECKOUT ROOM STATUS parameter value. | [optional] 
**GuestPreferredCurrency** | Pointer to **string** | Currency Code which the Guest preferred to use and to be stored on the reservation of the Guest. | [optional] 
**IgnoreWarnings** | Pointer to **bool** | Dictates whether to ignore warnings before check out. | [optional] 

## Methods

### NewCheckoutInstructionsType

`func NewCheckoutInstructionsType() *CheckoutInstructionsType`

NewCheckoutInstructionsType instantiates a new CheckoutInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckoutInstructionsTypeWithDefaults

`func NewCheckoutInstructionsTypeWithDefaults() *CheckoutInstructionsType`

NewCheckoutInstructionsTypeWithDefaults instantiates a new CheckoutInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomStatus

`func (o *CheckoutInstructionsType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *CheckoutInstructionsType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *CheckoutInstructionsType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *CheckoutInstructionsType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetScheduleOn

`func (o *CheckoutInstructionsType) GetScheduleOn() string`

GetScheduleOn returns the ScheduleOn field if non-nil, zero value otherwise.

### GetScheduleOnOk

`func (o *CheckoutInstructionsType) GetScheduleOnOk() (*string, bool)`

GetScheduleOnOk returns a tuple with the ScheduleOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleOn

`func (o *CheckoutInstructionsType) SetScheduleOn(v string)`

SetScheduleOn sets ScheduleOn field to given value.

### HasScheduleOn

`func (o *CheckoutInstructionsType) HasScheduleOn() bool`

HasScheduleOn returns a boolean if a field has been set.

### GetGuestPreferredCurrency

`func (o *CheckoutInstructionsType) GetGuestPreferredCurrency() string`

GetGuestPreferredCurrency returns the GuestPreferredCurrency field if non-nil, zero value otherwise.

### GetGuestPreferredCurrencyOk

`func (o *CheckoutInstructionsType) GetGuestPreferredCurrencyOk() (*string, bool)`

GetGuestPreferredCurrencyOk returns a tuple with the GuestPreferredCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestPreferredCurrency

`func (o *CheckoutInstructionsType) SetGuestPreferredCurrency(v string)`

SetGuestPreferredCurrency sets GuestPreferredCurrency field to given value.

### HasGuestPreferredCurrency

`func (o *CheckoutInstructionsType) HasGuestPreferredCurrency() bool`

HasGuestPreferredCurrency returns a boolean if a field has been set.

### GetIgnoreWarnings

`func (o *CheckoutInstructionsType) GetIgnoreWarnings() bool`

GetIgnoreWarnings returns the IgnoreWarnings field if non-nil, zero value otherwise.

### GetIgnoreWarningsOk

`func (o *CheckoutInstructionsType) GetIgnoreWarningsOk() (*bool, bool)`

GetIgnoreWarningsOk returns a tuple with the IgnoreWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreWarnings

`func (o *CheckoutInstructionsType) SetIgnoreWarnings(v bool)`

SetIgnoreWarnings sets IgnoreWarnings field to given value.

### HasIgnoreWarnings

`func (o *CheckoutInstructionsType) HasIgnoreWarnings() bool`

HasIgnoreWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


