# DepositCancelConfigCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**HotelId** | Pointer to **string** | Property Code of the reservation. | [optional] 
**Percentage** | Pointer to **float32** | The percentage based on which the calculation of the amount and due date is to be done. | [optional] 
**PolicyCode** | Pointer to **string** | The policy code based on which the calculation of the amount and due date is to be done. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 

## Methods

### NewDepositCancelConfigCriteriaType

`func NewDepositCancelConfigCriteriaType() *DepositCancelConfigCriteriaType`

NewDepositCancelConfigCriteriaType instantiates a new DepositCancelConfigCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositCancelConfigCriteriaTypeWithDefaults

`func NewDepositCancelConfigCriteriaTypeWithDefaults() *DepositCancelConfigCriteriaType`

NewDepositCancelConfigCriteriaTypeWithDefaults instantiates a new DepositCancelConfigCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *DepositCancelConfigCriteriaType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DepositCancelConfigCriteriaType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DepositCancelConfigCriteriaType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *DepositCancelConfigCriteriaType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *DepositCancelConfigCriteriaType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *DepositCancelConfigCriteriaType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *DepositCancelConfigCriteriaType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *DepositCancelConfigCriteriaType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetHotelId

`func (o *DepositCancelConfigCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DepositCancelConfigCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DepositCancelConfigCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DepositCancelConfigCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPercentage

`func (o *DepositCancelConfigCriteriaType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *DepositCancelConfigCriteriaType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *DepositCancelConfigCriteriaType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *DepositCancelConfigCriteriaType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetPolicyCode

`func (o *DepositCancelConfigCriteriaType) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *DepositCancelConfigCriteriaType) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *DepositCancelConfigCriteriaType) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *DepositCancelConfigCriteriaType) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetReservationId

`func (o *DepositCancelConfigCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DepositCancelConfigCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DepositCancelConfigCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DepositCancelConfigCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRevenueType

`func (o *DepositCancelConfigCriteriaType) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *DepositCancelConfigCriteriaType) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *DepositCancelConfigCriteriaType) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *DepositCancelConfigCriteriaType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


