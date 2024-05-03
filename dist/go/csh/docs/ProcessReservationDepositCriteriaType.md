# ProcessReservationDepositCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**DepositProcessType** | Pointer to [**DepositProcessType**](DepositProcessType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the reservation. | [optional] 
**Percentage** | Pointer to **float32** | The Percentage would be transferred to the Guest Ledger of the Psuedo Posting Room if the DepositProcessingType &#x3D; Keep/Return otherwise it will be transferred to the Guest Ledger of the current reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewProcessReservationDepositCriteriaType

`func NewProcessReservationDepositCriteriaType() *ProcessReservationDepositCriteriaType`

NewProcessReservationDepositCriteriaType instantiates a new ProcessReservationDepositCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessReservationDepositCriteriaTypeWithDefaults

`func NewProcessReservationDepositCriteriaTypeWithDefaults() *ProcessReservationDepositCriteriaType`

NewProcessReservationDepositCriteriaTypeWithDefaults instantiates a new ProcessReservationDepositCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *ProcessReservationDepositCriteriaType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ProcessReservationDepositCriteriaType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ProcessReservationDepositCriteriaType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ProcessReservationDepositCriteriaType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCashierId

`func (o *ProcessReservationDepositCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ProcessReservationDepositCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ProcessReservationDepositCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ProcessReservationDepositCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetDepositProcessType

`func (o *ProcessReservationDepositCriteriaType) GetDepositProcessType() DepositProcessType`

GetDepositProcessType returns the DepositProcessType field if non-nil, zero value otherwise.

### GetDepositProcessTypeOk

`func (o *ProcessReservationDepositCriteriaType) GetDepositProcessTypeOk() (*DepositProcessType, bool)`

GetDepositProcessTypeOk returns a tuple with the DepositProcessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositProcessType

`func (o *ProcessReservationDepositCriteriaType) SetDepositProcessType(v DepositProcessType)`

SetDepositProcessType sets DepositProcessType field to given value.

### HasDepositProcessType

`func (o *ProcessReservationDepositCriteriaType) HasDepositProcessType() bool`

HasDepositProcessType returns a boolean if a field has been set.

### GetHotelId

`func (o *ProcessReservationDepositCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProcessReservationDepositCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProcessReservationDepositCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProcessReservationDepositCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPercentage

`func (o *ProcessReservationDepositCriteriaType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *ProcessReservationDepositCriteriaType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *ProcessReservationDepositCriteriaType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *ProcessReservationDepositCriteriaType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetReservationId

`func (o *ProcessReservationDepositCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ProcessReservationDepositCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ProcessReservationDepositCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ProcessReservationDepositCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


