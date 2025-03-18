# ComputeCancellationPoliciesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property Code of the reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**PolicyCode** | Pointer to **string** | The policy code based on which the calculation of the amount and due date is to be done. | [optional] 
**Percentage** | Pointer to **float32** | The percentage based on which the calculation of the amount and due date is to be done. | [optional] 
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 
**Nights** | Pointer to **int32** | The number of nights used in the calculation of the cancellation amount. | [optional] 

## Methods

### NewComputeCancellationPoliciesCriteria

`func NewComputeCancellationPoliciesCriteria() *ComputeCancellationPoliciesCriteria`

NewComputeCancellationPoliciesCriteria instantiates a new ComputeCancellationPoliciesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewComputeCancellationPoliciesCriteriaWithDefaults

`func NewComputeCancellationPoliciesCriteriaWithDefaults() *ComputeCancellationPoliciesCriteria`

NewComputeCancellationPoliciesCriteriaWithDefaults instantiates a new ComputeCancellationPoliciesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ComputeCancellationPoliciesCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ComputeCancellationPoliciesCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ComputeCancellationPoliciesCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ComputeCancellationPoliciesCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ComputeCancellationPoliciesCriteria) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ComputeCancellationPoliciesCriteria) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ComputeCancellationPoliciesCriteria) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ComputeCancellationPoliciesCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetPolicyCode

`func (o *ComputeCancellationPoliciesCriteria) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *ComputeCancellationPoliciesCriteria) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *ComputeCancellationPoliciesCriteria) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *ComputeCancellationPoliciesCriteria) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetPercentage

`func (o *ComputeCancellationPoliciesCriteria) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *ComputeCancellationPoliciesCriteria) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *ComputeCancellationPoliciesCriteria) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *ComputeCancellationPoliciesCriteria) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetAmount

`func (o *ComputeCancellationPoliciesCriteria) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ComputeCancellationPoliciesCriteria) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ComputeCancellationPoliciesCriteria) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ComputeCancellationPoliciesCriteria) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ComputeCancellationPoliciesCriteria) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ComputeCancellationPoliciesCriteria) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ComputeCancellationPoliciesCriteria) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ComputeCancellationPoliciesCriteria) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRevenueType

`func (o *ComputeCancellationPoliciesCriteria) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *ComputeCancellationPoliciesCriteria) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *ComputeCancellationPoliciesCriteria) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *ComputeCancellationPoliciesCriteria) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetNights

`func (o *ComputeCancellationPoliciesCriteria) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *ComputeCancellationPoliciesCriteria) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *ComputeCancellationPoliciesCriteria) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *ComputeCancellationPoliciesCriteria) HasNights() bool`

HasNights returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


