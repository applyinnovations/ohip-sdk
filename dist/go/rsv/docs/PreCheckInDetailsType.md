# PreCheckInDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**Arrival** | Pointer to [**ReservationArrivalInfoType**](ReservationArrivalInfoType.md) |  | [optional] 
**ArrivalTransport** | Pointer to [**TransportInfoType**](TransportInfoType.md) |  | [optional] 
**GuestPreferredCurrency** | Pointer to **string** | Currency code preferred by guest. | [optional] 
**ReservationPaymentMethods** | Pointer to [**[]ReservationPaymentMethodType**](ReservationPaymentMethodType.md) | Defines reservation payment methods. | [optional] 
**RoomId** | Pointer to **string** | Room Number to be assigned to the reservation. | [optional] 

## Methods

### NewPreCheckInDetailsType

`func NewPreCheckInDetailsType() *PreCheckInDetailsType`

NewPreCheckInDetailsType instantiates a new PreCheckInDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreCheckInDetailsTypeWithDefaults

`func NewPreCheckInDetailsTypeWithDefaults() *PreCheckInDetailsType`

NewPreCheckInDetailsTypeWithDefaults instantiates a new PreCheckInDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowMobileViewFolio

`func (o *PreCheckInDetailsType) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *PreCheckInDetailsType) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *PreCheckInDetailsType) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *PreCheckInDetailsType) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetArrival

`func (o *PreCheckInDetailsType) GetArrival() ReservationArrivalInfoType`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *PreCheckInDetailsType) GetArrivalOk() (*ReservationArrivalInfoType, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *PreCheckInDetailsType) SetArrival(v ReservationArrivalInfoType)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *PreCheckInDetailsType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetArrivalTransport

`func (o *PreCheckInDetailsType) GetArrivalTransport() TransportInfoType`

GetArrivalTransport returns the ArrivalTransport field if non-nil, zero value otherwise.

### GetArrivalTransportOk

`func (o *PreCheckInDetailsType) GetArrivalTransportOk() (*TransportInfoType, bool)`

GetArrivalTransportOk returns a tuple with the ArrivalTransport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalTransport

`func (o *PreCheckInDetailsType) SetArrivalTransport(v TransportInfoType)`

SetArrivalTransport sets ArrivalTransport field to given value.

### HasArrivalTransport

`func (o *PreCheckInDetailsType) HasArrivalTransport() bool`

HasArrivalTransport returns a boolean if a field has been set.

### GetGuestPreferredCurrency

`func (o *PreCheckInDetailsType) GetGuestPreferredCurrency() string`

GetGuestPreferredCurrency returns the GuestPreferredCurrency field if non-nil, zero value otherwise.

### GetGuestPreferredCurrencyOk

`func (o *PreCheckInDetailsType) GetGuestPreferredCurrencyOk() (*string, bool)`

GetGuestPreferredCurrencyOk returns a tuple with the GuestPreferredCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestPreferredCurrency

`func (o *PreCheckInDetailsType) SetGuestPreferredCurrency(v string)`

SetGuestPreferredCurrency sets GuestPreferredCurrency field to given value.

### HasGuestPreferredCurrency

`func (o *PreCheckInDetailsType) HasGuestPreferredCurrency() bool`

HasGuestPreferredCurrency returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *PreCheckInDetailsType) GetReservationPaymentMethods() []ReservationPaymentMethodType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *PreCheckInDetailsType) GetReservationPaymentMethodsOk() (*[]ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *PreCheckInDetailsType) SetReservationPaymentMethods(v []ReservationPaymentMethodType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *PreCheckInDetailsType) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetRoomId

`func (o *PreCheckInDetailsType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *PreCheckInDetailsType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *PreCheckInDetailsType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *PreCheckInDetailsType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


