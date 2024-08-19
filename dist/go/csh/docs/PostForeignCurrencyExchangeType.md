# PostForeignCurrencyExchangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ExchangeDate** | Pointer to **string** | Date on which exchange rate was obtained. | [optional] 
**ExchangeReference** | Pointer to **string** | Exchange references. | [optional] 
**ExchangeType** | Pointer to [**CurrencyExchangeType**](CurrencyExchangeType.md) |  | [optional] 
**FromCurrencyAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**GuestName** | Pointer to **string** | Name of the guest to whom posting is done. | [optional] 
**HotelId** | Pointer to **string** | Property code where the currency is being converted. | [optional] 
**PasserByName** | Pointer to **string** | Name of the passer by customer to whom posting is to be done. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Room** | Pointer to **string** | Room to which posting is to be made. | [optional] 
**Sell** | Pointer to **bool** | Buy or Sell for calculation. | [optional] 

## Methods

### NewPostForeignCurrencyExchangeType

`func NewPostForeignCurrencyExchangeType() *PostForeignCurrencyExchangeType`

NewPostForeignCurrencyExchangeType instantiates a new PostForeignCurrencyExchangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostForeignCurrencyExchangeTypeWithDefaults

`func NewPostForeignCurrencyExchangeTypeWithDefaults() *PostForeignCurrencyExchangeType`

NewPostForeignCurrencyExchangeTypeWithDefaults instantiates a new PostForeignCurrencyExchangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *PostForeignCurrencyExchangeType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PostForeignCurrencyExchangeType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PostForeignCurrencyExchangeType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PostForeignCurrencyExchangeType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetExchangeDate

`func (o *PostForeignCurrencyExchangeType) GetExchangeDate() string`

GetExchangeDate returns the ExchangeDate field if non-nil, zero value otherwise.

### GetExchangeDateOk

`func (o *PostForeignCurrencyExchangeType) GetExchangeDateOk() (*string, bool)`

GetExchangeDateOk returns a tuple with the ExchangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeDate

`func (o *PostForeignCurrencyExchangeType) SetExchangeDate(v string)`

SetExchangeDate sets ExchangeDate field to given value.

### HasExchangeDate

`func (o *PostForeignCurrencyExchangeType) HasExchangeDate() bool`

HasExchangeDate returns a boolean if a field has been set.

### GetExchangeReference

`func (o *PostForeignCurrencyExchangeType) GetExchangeReference() string`

GetExchangeReference returns the ExchangeReference field if non-nil, zero value otherwise.

### GetExchangeReferenceOk

`func (o *PostForeignCurrencyExchangeType) GetExchangeReferenceOk() (*string, bool)`

GetExchangeReferenceOk returns a tuple with the ExchangeReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeReference

`func (o *PostForeignCurrencyExchangeType) SetExchangeReference(v string)`

SetExchangeReference sets ExchangeReference field to given value.

### HasExchangeReference

`func (o *PostForeignCurrencyExchangeType) HasExchangeReference() bool`

HasExchangeReference returns a boolean if a field has been set.

### GetExchangeType

`func (o *PostForeignCurrencyExchangeType) GetExchangeType() CurrencyExchangeType`

GetExchangeType returns the ExchangeType field if non-nil, zero value otherwise.

### GetExchangeTypeOk

`func (o *PostForeignCurrencyExchangeType) GetExchangeTypeOk() (*CurrencyExchangeType, bool)`

GetExchangeTypeOk returns a tuple with the ExchangeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeType

`func (o *PostForeignCurrencyExchangeType) SetExchangeType(v CurrencyExchangeType)`

SetExchangeType sets ExchangeType field to given value.

### HasExchangeType

`func (o *PostForeignCurrencyExchangeType) HasExchangeType() bool`

HasExchangeType returns a boolean if a field has been set.

### GetFromCurrencyAmount

`func (o *PostForeignCurrencyExchangeType) GetFromCurrencyAmount() CurrencyAmountType`

GetFromCurrencyAmount returns the FromCurrencyAmount field if non-nil, zero value otherwise.

### GetFromCurrencyAmountOk

`func (o *PostForeignCurrencyExchangeType) GetFromCurrencyAmountOk() (*CurrencyAmountType, bool)`

GetFromCurrencyAmountOk returns a tuple with the FromCurrencyAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromCurrencyAmount

`func (o *PostForeignCurrencyExchangeType) SetFromCurrencyAmount(v CurrencyAmountType)`

SetFromCurrencyAmount sets FromCurrencyAmount field to given value.

### HasFromCurrencyAmount

`func (o *PostForeignCurrencyExchangeType) HasFromCurrencyAmount() bool`

HasFromCurrencyAmount returns a boolean if a field has been set.

### GetGuestName

`func (o *PostForeignCurrencyExchangeType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *PostForeignCurrencyExchangeType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *PostForeignCurrencyExchangeType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *PostForeignCurrencyExchangeType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetHotelId

`func (o *PostForeignCurrencyExchangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostForeignCurrencyExchangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostForeignCurrencyExchangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostForeignCurrencyExchangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPasserByName

`func (o *PostForeignCurrencyExchangeType) GetPasserByName() string`

GetPasserByName returns the PasserByName field if non-nil, zero value otherwise.

### GetPasserByNameOk

`func (o *PostForeignCurrencyExchangeType) GetPasserByNameOk() (*string, bool)`

GetPasserByNameOk returns a tuple with the PasserByName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasserByName

`func (o *PostForeignCurrencyExchangeType) SetPasserByName(v string)`

SetPasserByName sets PasserByName field to given value.

### HasPasserByName

`func (o *PostForeignCurrencyExchangeType) HasPasserByName() bool`

HasPasserByName returns a boolean if a field has been set.

### GetProfileId

`func (o *PostForeignCurrencyExchangeType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *PostForeignCurrencyExchangeType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *PostForeignCurrencyExchangeType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *PostForeignCurrencyExchangeType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationId

`func (o *PostForeignCurrencyExchangeType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostForeignCurrencyExchangeType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostForeignCurrencyExchangeType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostForeignCurrencyExchangeType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoom

`func (o *PostForeignCurrencyExchangeType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *PostForeignCurrencyExchangeType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *PostForeignCurrencyExchangeType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *PostForeignCurrencyExchangeType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetSell

`func (o *PostForeignCurrencyExchangeType) GetSell() bool`

GetSell returns the Sell field if non-nil, zero value otherwise.

### GetSellOk

`func (o *PostForeignCurrencyExchangeType) GetSellOk() (*bool, bool)`

GetSellOk returns a tuple with the Sell field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSell

`func (o *PostForeignCurrencyExchangeType) SetSell(v bool)`

SetSell sets Sell field to given value.

### HasSell

`func (o *PostForeignCurrencyExchangeType) HasSell() bool`

HasSell returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


