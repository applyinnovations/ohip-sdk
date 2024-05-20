# CheckoutReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCheckout** | Pointer to **bool** | This flag will be set to true if the reservation is checked out via mobility service. When the reservation is checked out through UI, this would be false. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CheckoutInstr** | Pointer to [**CheckoutInstructionsType**](CheckoutInstructionsType.md) |  | [optional] 
**CheckoutWithOpenFolio** | Pointer to **bool** | If the Property works with Open Folios and the reservation has the privileges for Post Stay Charging, this flag could be set to True which would checkout the guest without requiring the guest to settle his balances. | [optional] 
**EventType** | Pointer to [**CashieringEventType**](CashieringEventType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**MobileCheckout** | Pointer to **bool** | This flag will be set to true if the reservation is checked out via mobility service. When the reservation is checked out through UI, this would be false. | [optional] 
**MobileCheckoutFolioEmail** | Pointer to **string** | Email address | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**StopCheckout** | Pointer to **bool** | Indicates Stop Checkout reservation Global Alert flag. | [optional] 

## Methods

### NewCheckoutReservationType

`func NewCheckoutReservationType() *CheckoutReservationType`

NewCheckoutReservationType instantiates a new CheckoutReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckoutReservationTypeWithDefaults

`func NewCheckoutReservationTypeWithDefaults() *CheckoutReservationType`

NewCheckoutReservationTypeWithDefaults instantiates a new CheckoutReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCheckout

`func (o *CheckoutReservationType) GetAutoCheckout() bool`

GetAutoCheckout returns the AutoCheckout field if non-nil, zero value otherwise.

### GetAutoCheckoutOk

`func (o *CheckoutReservationType) GetAutoCheckoutOk() (*bool, bool)`

GetAutoCheckoutOk returns a tuple with the AutoCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCheckout

`func (o *CheckoutReservationType) SetAutoCheckout(v bool)`

SetAutoCheckout sets AutoCheckout field to given value.

### HasAutoCheckout

`func (o *CheckoutReservationType) HasAutoCheckout() bool`

HasAutoCheckout returns a boolean if a field has been set.

### GetCashierId

`func (o *CheckoutReservationType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CheckoutReservationType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CheckoutReservationType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CheckoutReservationType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckoutInstr

`func (o *CheckoutReservationType) GetCheckoutInstr() CheckoutInstructionsType`

GetCheckoutInstr returns the CheckoutInstr field if non-nil, zero value otherwise.

### GetCheckoutInstrOk

`func (o *CheckoutReservationType) GetCheckoutInstrOk() (*CheckoutInstructionsType, bool)`

GetCheckoutInstrOk returns a tuple with the CheckoutInstr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckoutInstr

`func (o *CheckoutReservationType) SetCheckoutInstr(v CheckoutInstructionsType)`

SetCheckoutInstr sets CheckoutInstr field to given value.

### HasCheckoutInstr

`func (o *CheckoutReservationType) HasCheckoutInstr() bool`

HasCheckoutInstr returns a boolean if a field has been set.

### GetCheckoutWithOpenFolio

`func (o *CheckoutReservationType) GetCheckoutWithOpenFolio() bool`

GetCheckoutWithOpenFolio returns the CheckoutWithOpenFolio field if non-nil, zero value otherwise.

### GetCheckoutWithOpenFolioOk

`func (o *CheckoutReservationType) GetCheckoutWithOpenFolioOk() (*bool, bool)`

GetCheckoutWithOpenFolioOk returns a tuple with the CheckoutWithOpenFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckoutWithOpenFolio

`func (o *CheckoutReservationType) SetCheckoutWithOpenFolio(v bool)`

SetCheckoutWithOpenFolio sets CheckoutWithOpenFolio field to given value.

### HasCheckoutWithOpenFolio

`func (o *CheckoutReservationType) HasCheckoutWithOpenFolio() bool`

HasCheckoutWithOpenFolio returns a boolean if a field has been set.

### GetEventType

`func (o *CheckoutReservationType) GetEventType() CashieringEventType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *CheckoutReservationType) GetEventTypeOk() (*CashieringEventType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *CheckoutReservationType) SetEventType(v CashieringEventType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *CheckoutReservationType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetHotelId

`func (o *CheckoutReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CheckoutReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CheckoutReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CheckoutReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMobileCheckout

`func (o *CheckoutReservationType) GetMobileCheckout() bool`

GetMobileCheckout returns the MobileCheckout field if non-nil, zero value otherwise.

### GetMobileCheckoutOk

`func (o *CheckoutReservationType) GetMobileCheckoutOk() (*bool, bool)`

GetMobileCheckoutOk returns a tuple with the MobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckout

`func (o *CheckoutReservationType) SetMobileCheckout(v bool)`

SetMobileCheckout sets MobileCheckout field to given value.

### HasMobileCheckout

`func (o *CheckoutReservationType) HasMobileCheckout() bool`

HasMobileCheckout returns a boolean if a field has been set.

### GetMobileCheckoutFolioEmail

`func (o *CheckoutReservationType) GetMobileCheckoutFolioEmail() string`

GetMobileCheckoutFolioEmail returns the MobileCheckoutFolioEmail field if non-nil, zero value otherwise.

### GetMobileCheckoutFolioEmailOk

`func (o *CheckoutReservationType) GetMobileCheckoutFolioEmailOk() (*string, bool)`

GetMobileCheckoutFolioEmailOk returns a tuple with the MobileCheckoutFolioEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckoutFolioEmail

`func (o *CheckoutReservationType) SetMobileCheckoutFolioEmail(v string)`

SetMobileCheckoutFolioEmail sets MobileCheckoutFolioEmail field to given value.

### HasMobileCheckoutFolioEmail

`func (o *CheckoutReservationType) HasMobileCheckoutFolioEmail() bool`

HasMobileCheckoutFolioEmail returns a boolean if a field has been set.

### GetReservationIdList

`func (o *CheckoutReservationType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *CheckoutReservationType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *CheckoutReservationType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *CheckoutReservationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetStopCheckout

`func (o *CheckoutReservationType) GetStopCheckout() bool`

GetStopCheckout returns the StopCheckout field if non-nil, zero value otherwise.

### GetStopCheckoutOk

`func (o *CheckoutReservationType) GetStopCheckoutOk() (*bool, bool)`

GetStopCheckoutOk returns a tuple with the StopCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopCheckout

`func (o *CheckoutReservationType) SetStopCheckout(v bool)`

SetStopCheckout sets StopCheckout field to given value.

### HasStopCheckout

`func (o *CheckoutReservationType) HasStopCheckout() bool`

HasStopCheckout returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


